<script lang="ts">
  import Lander from '$components/Lander.svelte'
  import MainFeatureBlock from '$components/MainFeatureBlock.svelte'
  import SubfeatureBlock from '$components/SubfeatureBlock.svelte'
  import type { MetaContext } from '$store/MetaContext'
  import { getContext } from 'svelte'

  const { state: metaState } = getContext<MetaContext>('meta')

  $: ({
    pages: {
      lander,
      lander: {
        features: {
          main: { left, right },
          sub,
        },
      },
    },
  } = $metaState)
</script>

<Lander page={lander}>
  <div
    class="container mx-auto md:bg-gradient-to-r md:from-zinc-900 md:to-zinc-800 bg-zinc-800 border-zinc-700 border-2 rounded-[75px] flex flex-wrap mb-12 shadow-xl overflow-hidden"
  >
    <div class="bg-zinc-900 md:w-1/2">
      <MainFeatureBlock feature={left} />
    </div>

    <div class="bg-zinc-800 md:w-1/2">
      <MainFeatureBlock feature={right} />
    </div>

    <div class="w-full">
      <div
        class="bg-zinc-900 p-[75px] border-zinc-700 border-t-2 rounded-[75px] flex flex-wrap justify-center"
      >
        {#each sub as subfeature}
          <SubfeatureBlock
            icon={subfeature.icon}
            title={subfeature.title}
            content={subfeature.content}
          />
        {/each}
      </div>
    </div>
  </div>
</Lander>
