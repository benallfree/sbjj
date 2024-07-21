<script lang="ts">
  import Corn from '$components/Corn/index.svelte'
  import type { HubContext } from '$store/HubContext'
  import type { MetaContext } from '$store/MetaContext'
  import { faExpand } from '@fortawesome/free-solid-svg-icons'
  import { getContext } from 'svelte'
  import Fa from 'svelte-fa'
  import PlayerCornamentInfo from './PlayerCornamentInfo.svelte'
  import PlayerSeedInfo from './PlayerSeedInfo.svelte'

  const { state: metaState } = getContext<MetaContext>(`meta`)
  $: meta = $metaState

  const { state, setActiveEntityStackIdx } = getContext<HubContext>(`hub`)
  $: ({ hub, player } = $state)

  let isDetailOpen = false
  const expand = () => {
    isDetailOpen = !isDetailOpen
  }
</script>

<div class="controls">
  <button class="control" on:click={expand}><Fa icon={faExpand} /></button>
  {#each player.entityStack as item, idx}
    <button
      class="control {player.activeEntityStackIdx === idx ? `selected` : ''}"
      on:click={() => setActiveEntityStackIdx(idx)}
    >
      {#if item}
        <Corn {item} />
      {/if}
    </button>
  {/each}
</div>
{#if isDetailOpen}
  <div class="details">
    <h1>Seeds</h1>
    <div class="flex flex-wrap">
      {#each meta.seedSlugs as slug}
        <PlayerSeedInfo {slug} selected={slug === player.activeSeedSlug} />
      {/each}
    </div>
    <h1>Cornaments</h1>
    <div class="flex flex-wrap">
      {#each meta.cornamentSlugs as slug}
        <PlayerCornamentInfo
          {slug}
          selected={player.activeCornamentSelections.includes(slug)}
        />
      {/each}
    </div>
  </div>
{/if}

<style lang="scss">
  .controls {
    @apply flex flex-wrap;
    .control {
      @apply btn btn-neutral size-12 m-1 relative;
      &.selected {
        @apply border border-primary;
      }
    }
  }
</style>
