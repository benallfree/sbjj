<script lang="ts">
  import Lander from '$components/Lander.svelte'
  import { meta } from '$src/meta'
  import splashImg from './splash.webp?enhanced'
  import Cta from './cta.svx'
  import { produce } from 'immer'
  import PricingSheet from '$src/routes/(marketing)/pricing/PricingSheet.svelte'
  import FaqSection from '$src/components/FAQSection.svelte'
  import { APP_NAME, FOUNDERS_NAME } from '$src/meta/constants'

  const merged = produce(meta, (draft) => {
    const { hero } = draft.pages.lander
    hero.title = `Welcome, Thoughtful Journey listeners`
    hero.splashImg = splashImg
    hero.cta.text = `We've partnered with ${APP_NAME} to create a special ${FOUNDERS_NAME} just for TJ listeners. Purchase a #${APP_NAME} ${FOUNDERS_NAME} TJ Special# to  get a #lifetime membership# to ${APP_NAME} with #TJ-exclusive bonuses#. This is rare, don't sleep on it!`
    hero.cta.button.text = `Get ${APP_NAME} ${FOUNDERS_NAME}: TJ Special`
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
