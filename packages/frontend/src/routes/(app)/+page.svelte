<script lang="ts">
  import Lander from '$components/Lander.svelte'
  import { createHubContext, type HubContext } from '$store/HubContext'
  import type { MetaContext } from '$store/MetaContext'
  import { getContext, setContext } from 'svelte'
  import type { PageData } from './$types'

  export let data: PageData

  const { state: metaState } = getContext<MetaContext>('meta')

  $: ({
    pages: { lander },
  } = $metaState)

  const { hub } = data

  $: setContext<HubContext>('hub', createHubContext($metaState, hub))
</script>

<Lander page={lander} />
