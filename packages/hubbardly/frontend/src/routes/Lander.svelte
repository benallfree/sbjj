<script lang="ts">
  import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
  import PrimaryButton from './PrimaryButton.svelte'
  import { meta, type Meta } from '$src/meta'
  import MainFeatureBlock from './MainFeatureBlock.svelte'
  import SubfeatureBlock from './SubfeatureBlock.svelte'
  import defaultSplashImg from '$src/assets/img/splash.webp?enhanced'

  const { lander } = meta
  const {
    hero,
    features: { main, sub },
  } = lander

  export let title = hero.title
  export let cta = hero.cta
  export let splashImg = defaultSplashImg
  export let mainFeature1 = main[0]
  export let mainFeature2 = main[1]
  export let subFeatures = sub
</script>

<div class="container mx-auto text-white flex items-center">
  <div class="p-8 lg:w-1/2">
    <h1 class="text-6xl font-bold mb-8">{title}</h1>

    <p class="text-2xl mb-12">
      {@html cta.text.replaceAll(
        /#(.*?)#/g,
        `<b class="text-green-600 dark:text-green-400">$1</b>`,
      )}
    </p>

    <PrimaryButton text="Get Started" url={cta.link} icon={faArrowRight} />
  </div>

  <div class="w-full p-8 lg:w-1/2 md:block hidden">
    <enhanced:img
      src={splashImg}
      alt="Hero splash"
      class="rounded-[250px] mix-blend-lighten animated-hero-banner"
    />
  </div>
</div>

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

<style>
  .animated-hero-banner {
    animation-name: heroAnimation;
    animation-duration: 2s;
    animation-iteration-count: infinite;
    animation-direction: alternate-reverse;
  }

  @keyframes heroAnimation {
    0% {
      transform: translateY(-10px);
    }
    100% {
      transform: translateY(10px);
    }
  }
</style>
