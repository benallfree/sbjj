<script lang="ts">
  import { isLoggedIn } from '$src/pocketbase-client'
  import type { HubContext } from '$store/HubContext'
  import { getContext } from 'svelte'
  import Cell from './Cell.svelte'
  import Controls from './Controls.svelte'

  const { state } = getContext<HubContext>('hub')

  $: ({
    hub,
    hub: {
      state: { grid },
    },
    player,
  } = $state)
</script>

<div class="title">
  <h1>{hub.name}</h1>
</div>
<div class="description">
  <p>{@html hub.about}</p>
</div>
{#if isLoggedIn()}
  <div>
    <Controls />
  </div>
{/if}
<div class="game-grid">
  {#each Object.entries(grid || {}) as [key, cell]}
    <Cell {key} />
  {/each}
</div>

<style lang="scss">
  .title {
    @apply text-3xl font-bold m-2;
  }
  .description {
    @apply text-lg m-4;
  }
  .game-grid {
    @apply grid grid-cols-10 auto-cols-max;
  }
</style>
