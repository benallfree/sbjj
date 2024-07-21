<script lang="ts">
  import FaqSection from '$src/components/FAQSection.svelte'
  import type { MetaContext } from '$store/MetaContext'
  import { faMartiniGlass } from '@fortawesome/free-solid-svg-icons'
  import { getContext } from 'svelte'
  import Fa from 'svelte-fa'
  import PricingSheet from './PricingSheet.svelte'

  const { state: metaState } = getContext<MetaContext>('meta')

  $: ({
    earlyAccessMessage,
    faqs,
    prelaunch,
    pages: {
      pricing: { title, tagline },
    },
  } = $metaState)
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
          <span>{@html earlyAccessMessage}</span>
        </div>
      </div>
    {/if}

    <div class="flex justify-center">
      <PricingSheet />
    </div>

    <div class="m-4">
      <FaqSection {faqs} />
    </div>
  </div>
</main>
