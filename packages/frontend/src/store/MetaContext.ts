import { type Meta } from '$meta'
import { meta } from '$src/meta'
import { keys } from '@s-libs/micro-dash'
import { writable, type Writable } from 'svelte/store'

export type MetaContext_State = Meta & {
  seedSlugs: (keyof Meta['seasons']['season1']['seeds'])[]
  cornamentSlugs: (keyof Meta['seasons']['season1']['cornaments'])[]
  currentSeason: Meta['seasons']['season1']
}

export type MetaContext = {
  state: Writable<MetaContext_State>
}

export const createMetaContext = (): MetaContext => {
  const state = writable<MetaContext_State>({
    ...meta,
    seedSlugs: keys(meta.seasons.season1.seeds),
    cornamentSlugs: keys(meta.seasons.season1.cornaments),
    currentSeason: meta.seasons.season1,
  })

  return {
    state,
  }
}
