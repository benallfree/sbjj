<script lang="ts">
  import Cell from '$components/Hub/Cell.svelte'
  import type { HubRecord } from '$store/HubContext'

  export let item: HubRecord
</script>

<div>
  <div>{item.name}</div>
  <div class="game-grid relative">
    {#each Object.entries(item.state?.grid || {}) as [key, cell]}
      <Cell {key} />
    {/each}
    <a
      href={`/${item.slug}`}
      class="absolute top-0 left-0 w-full h-full"
      on:click={() => {}}
    >
    </a>
  </div>
</div>

<style lang="scss">
  .game-grid {
    @apply grid grid-cols-10 auto-cols-max;
  }
</style>
