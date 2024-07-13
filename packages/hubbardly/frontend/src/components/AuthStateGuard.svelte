<script lang="ts">
  import { isAuthStateInitialized } from '$src/stores'
</script>

{#if $isAuthStateInitialized}
  <slot />
{/if}
