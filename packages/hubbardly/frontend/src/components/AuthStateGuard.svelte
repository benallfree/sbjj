<script lang="ts">
  import { isAuthStateInitialized } from '$src/stores'

  export let fallback = false
</script>

{#if $isAuthStateInitialized || fallback}
  <slot />
{/if}
