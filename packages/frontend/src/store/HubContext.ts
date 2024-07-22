import { browser } from '$app/environment'
import { currentUserOrDie, onHubChanged, pb } from '$src/pocketbase-client'
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
import type { MetaContext_State } from './MetaContext'
import { sanitizePlayerState } from './defaults'

export const HubRecordState = z.object({
  grid: z.record(CellCoordKey, GridCell),
})
export type HubRecordState = z.infer<typeof HubRecordState>

const fixedLengthEntityStackArray = z
  .array(EntityStackItem.nullable())
  .refine((arr) => arr.length === 5, {
    message: 'Array must have exactly 5 elements',
  })

export const HubPlayerState = z.object({
  entityStack: fixedLengthEntityStackArray,
  seeds: z.record(
    z.string(),
    z.object({
      count: z.number(),
    }),
  ),
  activeSeedSlug: z.string().nullable(),
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

export const createHubContext = (
  meta: MetaContext_State,
  hub: HubRecord,
): HubContext => {
  const { defaultSeedSlug } = meta.currentSeason
  const player = sanitizePlayerState(
    getLocalStorageItemOrDefault(`hub.${hub.id}.player`, {
      seeds: {
        [defaultSeedSlug]: { count: 20 },
      },
      entityStack: [
        { seedSlug: meta.currentSeason.defaultSeedSlug, cornaments: [] },
        null,
        null,
        null,
        null,
      ],
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
      console.log(`_updateHubState`, JSON.stringify(res, null, 2))
      localStorage.setItem(`hub.${hub.id}`, JSON.stringify(res))
      return res
    })
  }

  const selectCell = (key: CellCoordKey) => {
    _updateHubState((draft) => {
      draft.player.selectedCellKey = key
      if (!draft.hub.state.grid[key]?.item) {
        draft.hub.state.grid[key]!.item = {
          ...draft.player.entityStack[draft.player.activeEntityStackIdx]!,
          user: currentUserOrDie().id,
        }
      } else {
        alert(`That cell is occupied`)
      }
    })
  }

  const setActiveEntityStackIdx = (stackIdx: number) => {
    _updateHubState((draft) => {
      draft.player.activeEntityStackIdx = stackIdx
      draft.player.activeSeedSlug = null
      draft.player.activeCornamentSelections = []
      if (!draft.player.entityStack[stackIdx]) {
        draft.player.entityStack[stackIdx] = {
          seedSlug: meta.currentSeason.defaultSeedSlug,
          cornaments: [],
        }
      }
      draft.player.activeSeedSlug = draft.player.entityStack[stackIdx]!.seedSlug
      draft.player.activeCornamentSelections =
        draft.player.entityStack[stackIdx]!.cornaments
      console.log(JSON.stringify(draft.player, null, 2))
    })
  }

  const setActiveSeedSlug = (slug: SeedSlug) => {
    _updateHubState((draft) => {
      draft.player.activeSeedSlug = slug
      if (!draft.player.entityStack[draft.player.activeEntityStackIdx]) {
        draft.player.entityStack[draft.player.activeEntityStackIdx] = {
          seedSlug: slug,
          cornaments: [],
        }
      }
      draft.player.entityStack[draft.player.activeEntityStackIdx]!.seedSlug =
        slug
    })
  }

  const toggleCornamentSelection = (slug: CornamentSlug) => {
    _updateHubState((draft) => {
      draft.player.activeCornamentSelections =
        draft.player.activeCornamentSelections.includes(slug)
          ? draft.player.activeCornamentSelections.filter((s) => s !== slug)
          : [...draft.player.activeCornamentSelections, slug]

      if (!draft.player.entityStack[draft.player.activeEntityStackIdx]) {
        draft.player.entityStack[draft.player.activeEntityStackIdx] = {
          seedSlug:
            draft.player.activeSeedSlug || meta.currentSeason.defaultSeedSlug,
          cornaments: [],
        }
      }
      draft.player.entityStack[draft.player.activeEntityStackIdx]!.cornaments =
        draft.player.activeCornamentSelections
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
