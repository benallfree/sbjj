<script lang="ts">
  import Lander from '$components/Lander.svelte'
  import { meta } from '$src/meta'
  import splashImg from './splash.webp?enhanced'
  import Cta from './cta.svx'
  import PricingCard from '$src/components/PricingCard.svelte'
  import { produce } from 'immer'
  import PricingSheet from '$src/routes/(marketing)/pricing/PricingSheet.svelte'

  const merged = produce(meta, (draft) => {
    const { hero } = draft.pages.lander
    hero.title = `Welcome, to the Jamie Eats community!`
    hero.splashImg = splashImg
    hero.cta.text = `Join #Jamie Eats# today and get access to exclusive recipes, community, and more!`
    hero.cta.button.text = `Get Hubbardly Founder's Edition, JE Special`
    hero.cta.button.link = meta.plans.founder.checkoutUrl
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
      description: `Get a limited edition #je4lyf tee shirt to show your support for the Thoughtful Journey podcast.`,
    }
  })
  const {
    plans: { founder },
  } = merged
</script>

<Lander meta={merged}>
  <div class="special-message mt-4 mb-4">
    <div class="prose w-full bg-neutral p-8 rounded-3xl">
      <Cta />
    </div>
  </div>
  <div class="flex justify-center mb-4">
    <PricingSheet />
  </div>
</Lander>

<style lang="postcss">
  .special-message :global(.prose) {
    max-width: initial;
    /* @apply text-sm; */
  }
</style>
