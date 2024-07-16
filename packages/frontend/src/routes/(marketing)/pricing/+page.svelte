<script lang="ts">
  import Fa from 'svelte-fa'
  import { faMartiniGlass } from '@fortawesome/free-solid-svg-icons'
  import { FOUNDERS_NAME, meta } from '$src/meta'
  import FaqSection from '$src/components/FAQSection.svelte'
  import PricingSheet from './PricingSheet.svelte'

  const {
    prelaunch,
    pages: {
      pricing: { title, tagline },
    },
  } = meta
</script>

<main>
  <div class="mx-auto max-w-7xl p-2 md:px-6 lg:px-8">
    <div class="mx-auto max-w-4xl text-center">
      <h1 class="text-base font-semibold leading-7 text-primary">{title}</h1>
      <p class="mt-2 text-4xl font-bold tracking-tight text-white sm:text-5xl">
        {tagline}
      </p>
    </div>

    {#if prelaunch}
      <div class="flex justify-center">
        <div role="alert" class="alert alert-warning mt-8 mb-8 max-w-2xl">
          <Fa icon={faMartiniGlass} />
          <span
            >{meta.name} is currently in {meta.prelaunchLabel} mode.
            <b>We are building features as funds are raised.</b> All
            subscription plans will remain locked until the official launch. In
            the meantime, consider supporting the project by purchasing a {FOUNDERS_NAME}
            to get lifetime access. As soon as we reach funding (and maybe before!),
            features will be added.</span
          >
        </div>
      </div>
    {/if}

    <div class="flex justify-center">
      <PricingSheet {meta} />
    </div>

    <div class="m-4">
      <FaqSection faqs={meta.faqs} />
    </div>
  </div>
</main>
