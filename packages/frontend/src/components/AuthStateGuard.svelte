<script lang="ts">
  import { isAuthStateInitialized } from '$store/user'

  export let fallback = false
</script>

{#if $isAuthStateInitialized || fallback}
  <slot />
{/if}
