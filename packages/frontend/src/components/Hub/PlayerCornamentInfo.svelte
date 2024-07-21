<script lang="ts">
  import Corn from '$components/Corn/index.svelte'
  import { currentUser } from '$src/pocketbase-client'
  import type { CornamentSlug } from '$store/CornamentSlug'
  import type { HubContext } from '$store/HubContext'
  import type { MetaContext } from '$store/MetaContext'
  import { faLock } from '@fortawesome/free-solid-svg-icons'
  import { getContext } from 'svelte'
  import Fa from 'svelte-fa'

  export let slug: CornamentSlug
  export let selected = false

  const { state: metaState } = getContext<MetaContext>('meta')

  $: ({
    cornamentSlugs,
    currentSeason: { defaultSeedSlug },
  } = $metaState)

  const { toggleCornamentSelection, state } = getContext<HubContext>('hub')

  $: userHasCornament = !!currentUser()?.settings?.cornaments?.[slug]
</script>

{#if userHasCornament}
  <button
    class="cell {selected ? 'selected' : ''}"
    on:click={() => toggleCornamentSelection(slug)}
  >
    <Corn
      item={{
        seedSlug: defaultSeedSlug,
        cornaments: [slug],
      }}
    />
  </button>
{:else}
  <button class="cell absolute">
    <Corn
      item={{
        seedSlug: defaultSeedSlug,
        cornaments: [slug],
      }}
    />
    <div class="absolute">
      <Fa icon={faLock} />
    </div>
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
