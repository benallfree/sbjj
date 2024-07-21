import { writable } from 'svelte/store'
// TODO: Removing this will cause the app to crash
// Theres a reference inside of `createPocketbaseClient.ts` that needs the information that comes from this file
import { meta, type PlanSlug } from '$src/meta'
import { isLoggedIn, onAuthChange } from '$src/pocketbase-client'
import { find } from '@s-libs/micro-dash'
import type { UnsubscribeFunc } from 'pocketbase'
import type { UserModel } from './UserModel'

export const userSubscriptionType = writable<PlanSlug>(`free`)
export const isUserLoggedIn = writable(isLoggedIn())
export const isUserFounder = writable(false)
export const isUserVerified = writable(false)
export const isAuthStateInitialized = writable(isLoggedIn())
export const userStore = writable<UserModel | undefined>()

/**
 * Listen for auth change events. When we get at least one, the auth state is
 * initialized.
 */
onAuthChange((authStoreProps) => {
  console.log(`authStoreProps`, authStoreProps)
  const isLoggedIn = authStoreProps.isValid
  isUserLoggedIn.set(isLoggedIn)
  userStore.set(isLoggedIn ? (authStoreProps.model as UserModel) : undefined)
  isAuthStateInitialized.set(true)
})

userStore.subscribe((user) => {
  userSubscriptionType.set(
    (user?.subscription || find(meta.plans, (v, k) => v.isDefault)) as PlanSlug,
  )
  isUserVerified.set(!!user?.verified)
})

/** Listen for instances */
isUserLoggedIn.subscribe(async (isLoggedIn) => {
  let unsub: UnsubscribeFunc | undefined
  if (!isLoggedIn) {
    unsub?.()
      .then(() => {
        unsub = undefined
      })
      .catch(console.error)
    return
  }
})
