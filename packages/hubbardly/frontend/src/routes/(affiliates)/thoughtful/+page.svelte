<script lang="ts">
  import Lander from '$components/Lander.svelte'
  import { meta } from '$src/meta'
  import splashImg from './splash.webp?enhanced'
  import Cta from './cta.svx'
  import { produce } from 'immer'
  import PricingSheet from '$src/routes/(marketing)/pricing/PricingSheet.svelte'
  import FaqSection from '$src/components/FAQSection.svelte'

  const merged = produce(meta, (draft) => {
    const { hero } = draft.pages.lander
    hero.title = `Welcome, Thoughtful Journey listeners`
    hero.splashImg = splashImg
    hero.cta.text = `We've partnered with Hubbardly to create a special Founder's Edition just for TJ listeners. Purchase a #Hubbardly Founder's Edition: TJ Special# to  get a #lifetime membership# to Hubbardly with #TJ-exclusive bonuses#. This is rare, don't sleep on it!`
    hero.cta.button.text = `Get Hubbardly Founder's Edition, TJ Special`
    hero.cta.button.link = 'https://buy.stripe.com/fZe28s0wrgLVeuA5kl'
    draft.plans.founder.name = `Founder's Edition - TJ Special`
    draft.plans.founder.checkoutUrl =
      'https://buy.stripe.com/fZe28s0wrgLVeuA5kl'
    draft.plans.founder.bonusFeatures[`je-tee`] = {
      title: `#TJ Exclusive#: #tj4lyf tee shirt`,
      description: `Get a limited edition #tj4lyf tee shirt to show your support for the Thoughtful Journey podcast.`,
    }
  })
</script>

<Lander meta={merged}>
  <div class="special-message mt-4 mb-4">
    <div class="prose w-full bg-neutral p-8 rounded-3xl">
      <Cta />
    </div>
  </div>
  <div class="flex justify-center mb-4">
    <PricingSheet meta={merged} />
  </div>
  <div class="flex justify-center mb-4">
    <FaqSection faqs={merged.faqs} />
  </div>
</Lander>

<style lang="postcss">
  .special-message :global(.prose) {
    max-width: initial;
    /* @apply text-sm; */
  }
</style>
