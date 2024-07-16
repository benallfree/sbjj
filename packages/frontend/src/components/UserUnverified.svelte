<script lang="ts">
  import { isUserVerified } from '$src/stores'
  import AuthStateGuard from './AuthStateGuard.svelte'
</script>

<AuthStateGuard>
  {#if $isUserVerified}
    <slot />
  {/if}
</AuthStateGuard>
