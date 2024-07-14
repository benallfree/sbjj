<script lang="ts">
  import Lander from '$components/Lander.svelte'
  import { meta } from '$src/meta'
  import splashImg from './splash.webp?enhanced'
  import Cta from './cta.svx'
  import Recipe from './Recipe.svelte'
  import { produce } from 'immer'
  import PricingSheet from '$src/routes/(marketing)/pricing/PricingSheet.svelte'
  import FaqSection from '$src/components/FAQSection.svelte'

  const merged = produce(meta, (draft) => {
    const { hero } = draft.pages.lander
    hero.title = `Jamie Eats`
    hero.splashImg = splashImg
    hero.cta.text = `Join the private #Jamie Eats# community today and get access to exclusive recipes, community, and more!`
    hero.cta.button.text = `Access Jamie Eats with Hubbardly Founder's Edition, JE Special`
    hero.cta.button.link = 'https://buy.stripe.com/fZe28s0wrgLVeuA5kl'
    draft.plans.founder.name = `Founder's Edition - Jamie Eats Special`
    draft.plans.founder.checkoutUrl =
      'https://buy.stripe.com/fZe28s0wrgLVeuA5kl'
    draft.plans.founder.bonusFeatures[`je-private`] = {
      title: `#JE Exclusive#: Access to private JE community`,
      description: `Join the private JE community on Hubbardly to connect with other listeners and share your favorite recipes.`,
    }
    draft.plans.founder.bonusFeatures[`je-recipes`] = {
      title: `#JE Exclusive#: Unlimited access to private JE recipes`,
      description: `Unlock all of the private JE recipes on Hubbardly to discover new dishes and share your favorites.`,
    }
    draft.plans.founder.bonusFeatures[`je-tee`] = {
      title: `#JE Exclusive#: #je4lyf tee shirt`,
      description: `Get a limited edition #je4lyf tee shirt to show your support for the Jamie Eatst.`,
    }
  })
</script>

<div class="alert alert-error mt-4">
  <div>
    Jamie Eats is a private community. You must be a Hubbardly Blue or Founder
    member to access this page.
  </div>
</div>
<Lander meta={merged}>
  <div class="flex flex-col md:flex-row md:gap-x-2 justify-center mb-4">
    <div class="special-message mt-4 mb-4">
      <div class="prose w-full bg-neutral p-8 rounded-3xl">
        <Cta />
      </div>
    </div>
    <div class="special-message mt-4 mb-4">
      <div class="prose w-full bg-neutral p-8 rounded-3xl">
        <Recipe />
      </div>
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
