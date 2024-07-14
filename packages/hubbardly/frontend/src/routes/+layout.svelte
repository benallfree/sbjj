<script lang="ts">
  import { meta } from '$src/meta'
</script>

{#if meta.prelaunch}
  <div class="bg-warning text-neutral p-2">
    {meta.name} is in {meta.prelaunchLabel} mode.
    <a class="link link-neutral" href="/kickstart-for-users">read more</a>
  </div>
{/if}

<slot />
