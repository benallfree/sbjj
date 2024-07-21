<script lang="ts">
  import Corn from '$components/Corn/index.svelte'
  import { isLoggedIn } from '$src/pocketbase-client'
  import type { HubContext } from '$store/HubContext'
  import type { CellCoordKey } from '$store/RowCol_CellCoordKey'
  import { faCirclePlus } from '@fortawesome/free-solid-svg-icons'
  import { getContext } from 'svelte'
  import Fa from 'svelte-fa'
  import CellOverlay from './CellOverlay.svelte'
  import PureCell from './PureCell.svelte'

  export let key: CellCoordKey
  export let readonly = false

  const { state, selectCell } = getContext<HubContext>(`hub`)

  const onClick = () => {
    if (readonly) return
    if (!isLoggedIn()) {
      alert(
        `Cornage is a live multiplayer game. You must be logged in to play.`,
      )
      return
    }
    selectCell(key)
  }

  $: item = $state.hub.state.grid[key]?.item
  $: isSelected = $state.player.selectedCellKey === key
</script>

<PureCell on:click={onClick} selected={isSelected}>
  {#if item}
    <Corn {item} />
  {:else}
    <CellOverlay>
      <div class="size-full flex justify-center items-center text-neutral">
        <Fa icon={faCirclePlus} />
      </div>
    </CellOverlay>
  {/if}
</PureCell>

<style lang="scss">
</style>
