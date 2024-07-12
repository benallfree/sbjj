<script lang="ts">
  import { meta, PRELAUNCH_NAME } from '$src/meta'
</script>

{#if meta.prelaunch}
  <div class="bg-warning text-neutral p-2">
    {meta.name} is in {PRELAUNCH_NAME} mode.
    <a class="link link-neutral" href="/kickstart">read more</a>
  </div>
{/if}

<slot />
