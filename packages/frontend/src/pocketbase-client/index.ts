import { meta } from '$meta'
import { assertExists } from '$src/assert'
import { createGenericSyncEvent } from '$src/events'
import { Collections } from '$store/Collections'
import type { HubPlayerStateRecord, HubRecord } from '$store/HubContext'
import type { UserModel } from '$store/UserModel'
import {
  sanitizeHubState,
  sanitizePlayerState,
  sanitizeUserSettings,
} from '$store/defaults'

import PocketBase, {
  BaseAuthStore,
  type AuthModel,
  type RecordSubscription,
} from 'pocketbase'

export type AuthToken = string
export type AuthStoreProps = {
  token: AuthToken
  model: AuthModel | null
  isValid: boolean
}

export type PocketbaseClientConfig = {}
export const pb = new PocketBase(meta.pocketbase.endpoint)

const { authStore } = pb

export const user = () => authStore.model

export const isLoggedIn = () => authStore.isValid

export const logOut = () => {
  return new Promise<void>((resolve) => {
    const unsub = onAuthChange(() => {
      if (!isLoggedIn()) {
        unsub()
        resolve()
      }
    })
    authStore.clear()
  })
}

/**
 * This will register a new user into Pocketbase, and email them a verification
 * link
 *
 * @param email {string} The email of the user
 * @param password {string} The password of the user
 */
export const createUser = async (email: string, password: string) => {
  // Build the new user object and any additional properties needed
  const data = {
    email,
    password,
    passwordConfirm: password,
  }

  // Create the user
  const record = await pb.collection('users').create(data)

  // Send the verification email
  await resendVerificationEmail()

  return record
}

/**
 * This will let a user confirm their new account via a token in their email
 *
 * @param token {string} The token from the verification email
 */
export const confirmVerification = async (token: string) => {
  return await pb.collection('users').confirmVerification(token)
}

/**
 * This will reset an unauthenticated user's password by sending a verification
 * link to their email, and includes an optional error handler
 *
 * @param email {string} The email of the user
 */
export const requestPasswordReset = async (email: string) => {
  return await pb.collection('users').requestPasswordReset(email)
}

/**
 * This will let an unauthenticated user save a new password after verifying
 * their email
 *
 * @param token {string} The token from the verification email
 * @param password {string} The new password of the user
 */
export const requestPasswordResetConfirm = async (
  token: string,
  password: string,
) => {
  return await pb
    .collection('users')
    .confirmPasswordReset(token, password, password)
}

/**
 * This will log a user into Pocketbase, and includes an optional error handler
 *
 * @param {string} email The email of the user
 * @param {string} password The password of the user
 */
export const authViaEmail = async (email: string, password: string) => {
  return await pb.collection('users').authWithPassword(email, password)
}

export const refreshAuthToken = () => pb.collection('users').authRefresh()

export const resendVerificationEmail = async () => {
  const user = pb.authStore.model
  assertExists(user, `Login required`)
  await pb.collection('users').requestVerification(user.email)
}

export const getAuthStoreProps = (): AuthStoreProps => {
  const { isAdmin, model, token, isValid } = pb.authStore

  if (isAdmin) throw new Error(`Admin models not supported`)
  if (model && !model.email) throw new Error(`Expected model to be a user here`)
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

export { onAuthChange }

/** This section is for initialization */
{
  /** Listen for native authStore changes and convert to synthetic event */
  pb.authStore.onChange(() => {
    fireAuthChange(pb.authStore)
  })

  /**
   * Refresh the auth token immediately upon creating the client. The auth token
   * may be out of date, or fields in the user record may have changed in the
   * backend.
   */
  refreshAuthToken()
    .catch((error) => {
      pb.authStore.clear()
    })
    .finally(() => {
      fireAuthChange(pb.authStore)
    })
}

export const sendOtp = async (email: string, returnUrl: string) =>
  pb.send(`/api/otp/auth`, { body: { email, returnUrl }, method: 'POST' })

export const authViaOtp = async (email: string, code: string) => {
  const res = await pb.send(`/api/otp/verify`, {
    body: { email, code },
    method: 'POST',
  })
  pb.authStore.save(res.token, res.record)
}

export const getTopHubs = () =>
  pb.collection(Collections.Hubs).getFullList<HubRecord>({
    sort: `-isFeatured,-created`,
    limit: 10,
    filter: `isPublic=true`,
  })

const _sanitizeHubState = (hub: HubRecord) => {
  hub.state = sanitizeHubState(hub.state)
  return hub
}

export const getHubBySlug = (slug: string) =>
  pb
    .collection(Collections.Hubs)
    .getFirstListItem<HubRecord>(`slug = '${slug}'`)
    .then(_sanitizeHubState)

export const getHubById = (id: string) =>
  pb.collection(Collections.Hubs).getOne<HubRecord>(id).then(_sanitizeHubState)

export const getDefaultHub = () =>
  pb
    .collection(Collections.Hubs)
    .getFirstListItem<HubRecord>(`isDefault = true`)
    .then(_sanitizeHubState)

export type RecordChangeHandler<T> = (data: RecordSubscription<T>) => void

export const onHubChanged = (id: string, cb: RecordChangeHandler<HubRecord>) =>
  pb.collection(Collections.Hubs).subscribe<HubRecord>(id, (data) => {
    console.log(`hub changed`, data)
    data.record = _sanitizeHubState(data.record)
    cb(data)
  })

const _sanitizeUserSettings = (user: UserModel) => {
  user.settings = sanitizeUserSettings(user.settings)
  return user
}

export const currentUser = () => {
  const model = pb.authStore.model as UserModel | null
  if (!model) return null
  return _sanitizeUserSettings(model)
}

export const currentUserOrDie = () => {
  const model = pb.authStore.model as UserModel | null
  if (!model) {
    throw new Error(`Authenticated user required here.`)
  }
  return _sanitizeUserSettings(model)
}

const _sanitizeHubPlayerState = (player: HubPlayerStateRecord) => {
  player.state = sanitizePlayerState(player.state)
  return player
}

export const getHubPlayerByUserId = async (uid: string) =>
  pb
    .collection(Collections.HubPlayers)
    .getFirstListItem<HubPlayerStateRecord>(`user = '${uid}'`)
    .then(_sanitizeHubPlayerState)

export const onPlayerStateChanged = (
  id: string,
  cb: RecordChangeHandler<HubPlayerStateRecord>,
) =>
  pb
    .collection(Collections.HubPlayers)
    .subscribe<HubPlayerStateRecord>(id, (data) => {
      console.log(`player state changed`, data)
      data.record = _sanitizeHubPlayerState(data.record)
      cb(data)
    })
