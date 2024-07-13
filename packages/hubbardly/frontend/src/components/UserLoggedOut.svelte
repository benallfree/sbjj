<script lang="ts">
  import { isUserLoggedIn } from '$src/stores'
  import AuthStateGuard from './AuthStateGuard.svelte'
</script>

<AuthStateGuard>
  {#if !$isUserLoggedIn}
    <slot />
  {/if}
</AuthStateGuard>
