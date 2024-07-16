<script lang="ts">
  import { goto } from '$app/navigation'
  import { isAuthStateInitialized, isUserLoggedIn } from '$src/stores'
  import AuthStateGuard from './AuthStateGuard.svelte'

  export let fallback = false
  export let redirect = false
  $: {
    if ($isAuthStateInitialized && redirect && !$isUserLoggedIn) {
      goto('/')
    }
  }
</script>

<AuthStateGuard {fallback}>
  {#if $isUserLoggedIn}
    <slot />
  {/if}
</AuthStateGuard>
