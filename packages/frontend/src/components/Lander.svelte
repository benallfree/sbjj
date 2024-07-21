<script lang="ts">
  import type { Meta } from '$meta'
  import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
  import PrimaryButton from './PrimaryButton.svelte'

  export let page: Meta['pages']['lander']
  const {
    hero: { splashImg, cta, title },
  } = page
  $: console.log({ splashImg }, typeof splashImg)
</script>

<slot name="hero">
  <div class="flex flex-row justify-center md:hidden">
    <enhanced:img
      src={splashImg}
      alt="Hero splash"
      class="rounded-lg mix-blend-lighten animated-hero-banner w-full max-w-96"
    />
  </div>
</slot>

<div class="container m-2 text-white flex flex-col md:flex-row">
  <div class="m-4 md:w-1/2">
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
      class="rounded-xl mix-blend-lighten animated-hero-banner"
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
