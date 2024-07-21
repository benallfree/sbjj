<script lang="ts">
  import Hub from '$components/Hub/Hub.svelte'
  import { createHubContext, type HubContext } from '$store/HubContext'
  import { setContext } from 'svelte'
  import type { PageData } from './$types'

  export let data: PageData

  const { hub } = data
  console.log({ hub })

  setContext<HubContext>('hub', createHubContext(hub))
</script>

<Hub />
