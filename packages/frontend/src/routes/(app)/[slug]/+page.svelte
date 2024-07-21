<script lang="ts">
  import Hub from '$components/Hub/Hub.svelte'
  import { createHubContext, type HubContext } from '$store/HubContext.js'
  import { setContext } from 'svelte'

  export let data

  const { hub } = data

  setContext<HubContext>('hub', createHubContext(hub))
</script>

<Hub />
