<script lang="ts">
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
<div>
  <Controls />
</div>
<div class="game-grid">
  {#each Object.entries(grid || {}) as [key, cell]}
    <Cell {key} />
  {/each}
</div>

<style lang="scss">
  .game-grid {
    @apply grid grid-cols-10 auto-cols-max;
  }
</style>
