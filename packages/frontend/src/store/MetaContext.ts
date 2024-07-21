import { type Meta } from '$meta'
import { meta } from '$src/meta'
import { writable, type Writable } from 'svelte/store'

export type MetaContext_State = Meta

export type MetaContext = {
  state: Writable<MetaContext_State>
}

export const createMetaContext = (): MetaContext => {
  const state = writable<MetaContext_State>(meta)

  return {
    state,
  }
}
