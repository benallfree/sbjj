<script lang="ts">
  import '$src/app.css'
  import { createMetaContext, type MetaContext } from '$store/MetaContext'
  import { setContext } from 'svelte'
  import Prelaunch from './Prelaunch.svelte'

  setContext<MetaContext>(`meta`, createMetaContext())
</script>

<Prelaunch />
<slot />
