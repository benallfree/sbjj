<script lang="ts">
  import Lander from '$components/Lander.svelte'
  import { meta } from '$src/meta'
  import splashImg from './splash.jpg?enhanced'
  import Cta from './cta.svx'
  import PricingCard from '$src/components/PricingCard.svelte'
  import { produce } from 'immer'

  const merged = produce(meta, (draft) => {
    const { hero } = draft.pages.lander
    hero.title = `Welcome, Thoughtful Journey listeners`
    hero.splashImg = splashImg
    hero.cta.text = `We've partnered with Hubbardly to create a special Founder's Edition just for TJ listeners. Purchase a #Hubbardly Founder's Edition: TJ Special# to help build the exclusive TJ Recipe Community on Hubbardly. You'll get a #lifetime membership# to Hubbardly with #TJ-exclusive bonuses#. This is rare, don't sleep on it!`
    hero.cta.button.text = `Get Hubbardly Founder's Edition, TJ Special`
    hero.cta.button.link = meta.plans.founder.checkoutUrl
    draft.plans.founder.bonusFeatures.push(
      `#TTJ Exclusive#: Access to private TJ community`,
      `#TTJ Exclusive#: Unlimited access to private TJ recipes`,
      `#TTJ Exclusive#: #tj4lyf tee shirt`,
    )
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
  <div class="mb-4">
    <PricingCard meta={merged} plan={'founder'} />
  </div>
</Lander>

<style lang="postcss">
  .special-message :global(.prose) {
    max-width: initial;
    /* @apply text-sm; */
  }
</style>
