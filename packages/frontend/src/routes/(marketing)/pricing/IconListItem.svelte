<script lang="ts">
  import type { IconDefinition } from '@fortawesome/free-solid-svg-icons'
  import Fa from 'svelte-fa'
  import ListItem from './ListItem.svelte'

  export let icon: IconDefinition
</script>

<ListItem>
  <Fa {icon} /><slot />
</ListItem>
