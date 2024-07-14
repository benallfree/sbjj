<script lang="ts">
  import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
  import PrimaryButton from './PrimaryButton.svelte'
  import type { Meta } from '$src/meta'

  export let meta: Meta
  const {
    pages: { lander },
  } = meta
  const {
    hero: { title, cta, splashImg },
  } = lander
</script>

<div class="container mx-auto text-white flex items-center">
  <div class="p-8 md:w-1/2">
    <h1 class="md:text-6xl text-4xl font-bold mb-8">{title}</h1>

    <p class="text-2xl mb-12">
      {@html cta.text.replaceAll(
        /#(.*?)#/g,
        `<b class="text-green-600 dark:text-green-400">$1</b>`,
      )}
    </p>

    <PrimaryButton url={cta.button.link} icon={faArrowRight}
      >{cta.button.text}</PrimaryButton
    >
  </div>

  <div class="w-full p-8 md:w-1/2 lg:w-1/2 xl:w-1/3 md:block hidden">
    <enhanced:img
      src={splashImg}
      alt="Hero splash"
      class="rounded-[250px] mix-blend-lighten animated-hero-banner"
    />
  </div>
</div>

<div class="m-2">
  <slot />
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
