<script lang="ts">
  import { isUserVerified } from '$store/user'
  import AuthStateGuard from './AuthStateGuard.svelte'
</script>

<AuthStateGuard>
  {#if !$isUserVerified}
    <slot />
  {/if}
</AuthStateGuard>
