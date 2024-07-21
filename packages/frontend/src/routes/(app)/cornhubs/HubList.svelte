<script lang="ts">
  import { onMount } from 'svelte'

  import { getTopHubs } from '$src/pocketbase-client'
  import type { HubRecord } from '$store/HubContext'
  import HubPreview from './HubPreview.svelte'

  let hubs: HubRecord[] = []
  onMount(async () => {
    try {
      hubs = await getTopHubs()
    } catch (e) {
      console.error(e)
    }
  })
</script>

<div>Latest Activity</div>

{#each hubs as hub}
  <div class="w-64 m-8">
    <HubPreview item={hub} />
  </div>
{/each}
