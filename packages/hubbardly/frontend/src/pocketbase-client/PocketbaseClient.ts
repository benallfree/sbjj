import { assertExists } from '$src/assert'
import { createGenericSyncEvent } from '$src/events'
import { meta } from '$src/meta'
import PocketBase, { BaseAuthStore, type AuthModel } from 'pocketbase'

export type AuthToken = string
export type AuthStoreProps = {
  token: AuthToken
  model: AuthModel | null
  isValid: boolean
}

export type PocketbaseClientConfig = {}
export type PocketbaseClient = ReturnType<typeof createPocketbaseClient>

const createPocketbaseClient = (config: PocketbaseClientConfig) => {
  const client = new PocketBase(meta.pocketbase.endpoint)

  const { authStore } = client

  const user = () => authStore.model as AuthStoreProps['model']

  const isLoggedIn = () => authStore.isValid

  const logOut = () => authStore.clear()

  /**
   * This will register a new user into Pocketbase, and email them a
   * verification link
   *
   * @param email {string} The email of the user
   * @param password {string} The password of the user
   */
  const createUser = async (email: string, password: string) => {
    // Build the new user object and any additional properties needed
    const data = {
      email,
      password,
      passwordConfirm: password,
    }

    // Create the user
    const record = await client.collection('users').create(data)

    // Send the verification email
    await resendVerificationEmail()

    return record
  }

  /**
   * This will let a user confirm their new account via a token in their email
   *
   * @param token {string} The token from the verification email
   */
  const confirmVerification = async (token: string) => {
    return await client.collection('users').confirmVerification(token)
  }

  /**
   * This will reset an unauthenticated user's password by sending a
   * verification link to their email, and includes an optional error handler
   *
   * @param email {string} The email of the user
   */
  const requestPasswordReset = async (email: string) => {
    return await client.collection('users').requestPasswordReset(email)
  }

  /**
   * This will let an unauthenticated user save a new password after verifying
   * their email
   *
   * @param token {string} The token from the verification email
   * @param password {string} The new password of the user
   */
  const requestPasswordResetConfirm = async (
    token: string,
    password: string,
  ) => {
    return await client
      .collection('users')
      .confirmPasswordReset(token, password, password)
  }

  /**
   * This will log a user into Pocketbase, and includes an optional error
   * handler
   *
   * @param {string} email The email of the user
   * @param {string} password The password of the user
   */
  const authViaEmail = async (email: string, password: string) => {
    return await client.collection('users').authWithPassword(email, password)
  }

  const refreshAuthToken = () => client.collection('users').authRefresh()

  const resendVerificationEmail = async () => {
    const user = client.authStore.model
    assertExists(user, `Login required`)
    await client.collection('users').requestVerification(user.email)
  }

  const getAuthStoreProps = (): AuthStoreProps => {
    const { isAdmin, model, token, isValid } = client.authStore

    if (isAdmin) throw new Error(`Admin models not supported`)
    if (model && !model.email)
      throw new Error(`Expected model to be a user here`)
    return {
      token,
      model,
      isValid,
    }
  }

  /**
   * Use synthetic event for authStore changers, so we can broadcast just the
   * props we want and not the actual authStore object.
   */
  const [onAuthChange, fireAuthChange] = createGenericSyncEvent<BaseAuthStore>()

  /** This section is for initialization */
  {
    /** Listen for native authStore changes and convert to synthetic event */
    client.authStore.onChange(() => {
      fireAuthChange(client.authStore)
    })

    /**
     * Refresh the auth token immediately upon creating the client. The auth
     * token may be out of date, or fields in the user record may have changed
     * in the backend.
     */
    refreshAuthToken()
      .catch((error) => {
        client.authStore.clear()
      })
      .finally(() => {
        fireAuthChange(client.authStore)
      })

    /**
     * Listen for auth state changes and subscribe to realtime _user events.
     * This way, when the verified flag is flipped, it will appear that the
     * authstore model is updated.
     *
     * Polling is a stopgap til v.0.8. Once 0.8 comes along, we can do a
     * realtime watch on the user record and update auth accordingly.
     */
    const unsub = onAuthChange((authStore) => {
      const { model, isAdmin } = authStore
      if (!model) return
      if (isAdmin) return
      if (model.verified) {
        unsub()
        return
      }
      setTimeout(refreshAuthToken, 1000)

      // TODO - THIS DOES NOT WORK, WE HAVE TO POLL INSTEAD. FIX IN V0.8
      // unsub = subscribe<User>(`users/${model.id}`, (user) => {
      //   fireAuthChange({ ...authStore, model: user })
      // })
    })
  }

  return {
    client,
    getAuthStoreProps,
    authViaEmail,
    createUser,
    requestPasswordReset,
    requestPasswordResetConfirm,
    confirmVerification,
    logOut,
    onAuthChange,
    isLoggedIn,
    user,
    resendVerificationEmail,
  }
}

export const PocketbaseClient = (() => {
  const client = createPocketbaseClient({})
  return () => client
})()
