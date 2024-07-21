<script lang="ts">
  import { type MetaContext } from '$store/MetaContext'
  import { getContext } from 'svelte'

  const { state: metaState } = getContext<MetaContext>(`meta`)
  $: ({ prelaunch, name, prelaunchLabel } = $metaState)
</script>

{#if prelaunch}
  <div class="bg-warning text-neutral p-2">
    {name} is in {prelaunchLabel} mode.
    <a class="link link-neutral" href="/for-users">read more</a>
  </div>
{/if}
