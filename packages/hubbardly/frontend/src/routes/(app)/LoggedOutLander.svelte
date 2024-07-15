<script lang="ts">
  import Lander from '$components/Lander.svelte'
  import MainFeatureBlock from '$components/MainFeatureBlock.svelte'
  import SubfeatureBlock from '$components/SubfeatureBlock.svelte'
  import { meta, type Meta } from '$src/meta'

  const {
    pages: { lander },
  } = meta
  const {
    features: { main, sub },
  } = lander

  const mainFeature1 = main[0]
  const mainFeature2 = main[1]
  const subFeatures = sub
</script>

<Lander page={meta.pages.lander}>
  <div
    class="container mx-auto md:bg-gradient-to-r md:from-zinc-900 md:to-zinc-800 bg-zinc-800 border-zinc-700 border-2 rounded-[75px] flex flex-wrap mb-12 shadow-xl overflow-hidden"
  >
    <div class="bg-zinc-900 md:w-1/2">
      <MainFeatureBlock
        icon={mainFeature1.icon}
        title={mainFeature1.title}
        tagline={mainFeature1.tagline}
        content={mainFeature1.content}
        linkText={mainFeature1.linkText}
        linkURL={mainFeature1.linkURL}
      />
    </div>

    <div class="bg-zinc-800 md:w-1/2">
      <MainFeatureBlock
        icon={mainFeature2.icon}
        title={mainFeature2.title}
        tagline={mainFeature2.tagline}
        content={mainFeature2.content}
        linkText={mainFeature2.linkText}
        linkURL={mainFeature2.linkURL}
      />
    </div>

    <div class="w-full">
      <div
        class="bg-zinc-900 p-[75px] border-zinc-700 border-t-2 rounded-[75px] flex flex-wrap justify-center"
      >
        {#each subFeatures as subfeature}
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
