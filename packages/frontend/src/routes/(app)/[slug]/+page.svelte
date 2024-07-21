<script lang="ts">
  import Hub from '$components/Hub/Hub.svelte'
  import { createHubContext, type HubContext } from '$store/HubContext.js'
  import type { MetaContext } from '$store/MetaContext.js'
  import { getContext, setContext } from 'svelte'

  export let data

  const { hub } = data

  const { state: metaState } = getContext<MetaContext>('meta')

  $: setContext<HubContext>('hub', createHubContext($metaState, hub))
</script>

<Hub />
