<script lang="ts">
  import Corn from '$components/Corn/index.svelte'
  import type { HubContext } from '$store/HubContext'
  import type { SeedSlug } from '$store/SeedSlug'
  import { faQuestion } from '@fortawesome/free-solid-svg-icons'
  import { getContext } from 'svelte'
  import Fa from 'svelte-fa'

  const { setActiveSeedSlug, state } = getContext<HubContext>('hub')

  export let slug: SeedSlug
  export let selected = false

  $: seedBag = $state.player.seeds[slug]
</script>

{#if seedBag}
  <button
    class="cell {selected ? 'selected' : ''}"
    on:click={() => setActiveSeedSlug(slug)}
  >
    <Corn
      item={{
        seedSlug: slug,
        cornaments: [],
      }}
    />
    <div class="count">{seedBag.count}</div>
  </button>
{:else}
  <button class="cell">
    <Fa icon={faQuestion} />
  </button>
{/if}

<style lang="scss">
  .cell {
    @apply btn btn-neutral size-16 m-1 relative;
    &.selected {
      @apply border-primary;
    }
    .count {
      @apply absolute bottom-1 right-1 p-1 text-xs border-neutral-content border bg-neutral rounded-sm text-neutral-content;
    }
  }
</style>
