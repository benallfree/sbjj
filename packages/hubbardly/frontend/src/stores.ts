import { writable } from 'svelte/store'
// TODO: Removing this will cause the app to crash
// Theres a reference inside of `createPocketbaseClient.ts` that needs the information that comes from this file
import { meta, type Meta } from '$src/meta'
import type { UnsubscribeFunc } from 'pocketbase'
import { PocketbaseClient } from './pocketbase-client/PocketbaseClient'
import type { UserFields } from './routes/pricing/User'

const { onAuthChange } = PocketbaseClient()

export const isUserLegacy = writable(false)
export const userSubscriptionType =
  writable<keyof Meta['plans']['tiers']>(`free`)
export const isUserLoggedIn = writable(false)
export const isUserFounder = writable(false)
export const isUserVerified = writable(false)
export const isAuthStateInitialized = writable(false)
export const userStore = writable<UserFields | undefined>()
/**
 * Listen for auth change events. When we get at least one, the auth state is
 * initialized.
 */
onAuthChange((authStoreProps) => {
  const isLoggedIn = authStoreProps.isValid
  isUserLoggedIn.set(isLoggedIn)
  userStore.set(isLoggedIn ? (authStoreProps.model as UserFields) : undefined)
  isAuthStateInitialized.set(true)
})

userStore.subscribe((user) => {
  userSubscriptionType.set(user?.subscription || meta.plans.tiers.free.slug)
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
