import { writable } from 'svelte/store'
// TODO: Removing this will cause the app to crash
// Theres a reference inside of `createPocketbaseClient.ts` that needs the information that comes from this file
import { meta, type PlanSlug } from '$src/meta'
import type { UserFields } from '$src/types'
import { find } from '@s-libs/micro-dash'
import type { UnsubscribeFunc } from 'pocketbase'
import { PocketbaseClient } from './pocketbase-client/PocketbaseClient'

const { onAuthChange, isLoggedIn } = PocketbaseClient()

export const flash = writable<{
  message: string
  type: 'success' | 'error'
} | null>(null)
export const userSubscriptionType = writable<PlanSlug>(`free`)
export const isUserLoggedIn = writable(isLoggedIn())
export const isUserFounder = writable(false)
export const isUserVerified = writable(false)
export const isAuthStateInitialized = writable(isLoggedIn())
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
