import { browser } from '$app/environment'
import { meta } from '$src/meta'
import { onHubChanged, pb } from '$src/pocketbase-client'
import type { CornamentSlug } from '$store/CornamentSlug'
import { EntityStackItem } from '$store/EntityStackItem'
import { GridCell } from '$store/GridCell'
import { RecordBase } from '$store/RecordBase'
import { CellCoordKey } from '$store/RowCol_CellCoordKey'
import type { SeedSlug } from '$store/SeedSlug'
import { UserModel } from '$store/UserModel'
import { produce } from 'immer'
import { writable, type Writable } from 'svelte/store'
import { z } from 'zod'
import { sanitizePlayerState } from './defaults'

export const HubRecordState = z.object({
  grid: z.record(CellCoordKey, GridCell),
})
export type HubRecordState = z.infer<typeof HubRecordState>

export const HubPlayerState = z.object({
  entityStack: EntityStackItem.array(),
  seeds: z.record(
    z.string(),
    z.object({
      count: z.number(),
    }),
  ),
  activeSeedSlug: z.string(),
  activeEntityStackIdx: z.number(),
  activeCornamentSelections: z.array(z.string()),
  selectedCellKey: z.string().optional(),
})
export type HubPlayerState = z.infer<typeof HubPlayerState>

export type HubContext = {
  state: Writable<HubContext_State>
  selectCell: (cellKey: CellCoordKey) => void
  setActiveEntityStackIdx: (stackIdx: number) => void
  setActiveSeedSlug: (slug: SeedSlug) => void
  toggleCornamentSelection: (slug: CornamentSlug) => void
}

export const HubPlayerStateRecord = RecordBase.extend({
  user: UserModel,
  state: HubPlayerState,
})
export type HubPlayerStateRecord = z.infer<typeof HubPlayerStateRecord>

export const HubRecord = RecordBase.extend({
  user: z.string(),
  name: z.string(),
  about: z.string(),
  slug: z.string(),
  isPublic: z.boolean(),
  state: HubRecordState,
})
export type HubRecord = z.infer<typeof HubRecord>

export const HubContext_State = z.object({
  hub: HubRecord,
  player: HubPlayerState,
})
export type HubContext_State = z.infer<typeof HubContext_State>

const safeParse = (str: string | null) => {
  if (str === null) return null
  try {
    return JSON.parse(str)
  } catch (e) {
    return null
  }
}

const getLocalStorageItemOrDefault = <T>(key: string, defaultValue: T): T => {
  if (!browser) return defaultValue
  return safeParse(localStorage.getItem(key)) || defaultValue
}

export const createHubContext = (hub: HubRecord): HubContext => {
  const { defaultSeedSlug } = meta.currentSeason
  const player = sanitizePlayerState(
    getLocalStorageItemOrDefault(`hub.${hub.id}.player`, {
      seeds: {
        [defaultSeedSlug]: { count: 20 },
      },
      entityStack: [],
      activeEntityStackIdx: 0,
      activeSeedSlug: defaultSeedSlug,
      activeCornamentSelections: [],
    }),
  )

  const state = writable<HubContext_State>({
    hub,
    player,
  })

  const updatePlayerState = async (playerState: HubPlayerState) => {
    const key = `hub.${hub.id}.player`
    localStorage.setItem(key, JSON.stringify(playerState))
    await pb.send(`/hub/${hub.id}/player`, {
      method: `POST`,
      body: playerState,
    })
  }

  const _updateHubState = (cb: (draft: HubContext_State) => void) => {
    state.update((s) => {
      const res = produce(s, cb)
      updatePlayerState(res.player).catch(console.error)
      return res
    })
  }

  const selectCell = (key: CellCoordKey) => {
    _updateHubState((draft) => {
      draft.player.selectedCellKey = key
    })
  }

  const setActiveEntityStackIdx = (stackIdx: number) => {
    _updateHubState((draft) => {
      draft.player.activeEntityStackIdx = stackIdx
    })
  }

  const setActiveSeedSlug = (slug: SeedSlug) => {
    _updateHubState((draft) => {
      draft.player.activeSeedSlug = slug
    })
  }

  const toggleCornamentSelection = (slug: CornamentSlug) => {
    _updateHubState((draft) => {
      if (draft.player.activeCornamentSelections.includes(slug)) {
        draft.player.activeCornamentSelections =
          draft.player.activeCornamentSelections.filter((s) => s !== slug)
        return
      }
      draft.player.activeCornamentSelections.push(slug)
    })
  }

  if (browser) {
    onHubChanged(hub.id, (newHub) => {
      state.update((s) => {
        s.hub = newHub.record
        return s
      })
    }).catch(console.error)
  }

  // onPlayerStateChanged(player.id, (newPlayerState) => {
  //   state.update((s) => {
  //     s.player = newPlayerState.record.state
  //     return s
  //   })
  // }).catch(console.error)

  return {
    state,
    selectCell,
    setActiveEntityStackIdx,
    setActiveSeedSlug,
    toggleCornamentSelection,
  }
}
