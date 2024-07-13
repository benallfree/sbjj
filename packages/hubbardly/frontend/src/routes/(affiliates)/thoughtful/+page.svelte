<script lang="ts">
  import Lander from '$components/Lander.svelte'
  import {
    FOUNDER_FEATURES,
    FREE_FEATURES,
    meta,
    PRO_FEATURES,
  } from '$src/meta'
  import type { Meta, Plan } from '$src/meta'
  import { cloneDeep, merge } from '@s-libs/micro-dash'
  import splashImg from './splash.jpg?enhanced'
  import type { PartialDeep } from 'type-fest'
  import Cta from './cta.svx'
  import PrimaryButton from '$src/components/PrimaryButton.svelte'
  import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
  import PricingCard from '$src/components/PricingCard.svelte'

  const overrides: PartialDeep<Meta> = {
    lander: {
      hero: {
        title: `Welcome, Thoughtful Journey listeners`,

        splashImg,
        cta: {
          text: `We've partnered with Hubbardly to create a special Founder's Edition just for TJ listeners. Purchase a #Hubbardly Founder's Edition: TJ Special# to help build the exclusive TJ Recipe Community on Hubbardly. You'll get a #lifetime membership# to Hubbardly with #TJ-exclusive bonuses#. This is rare, don't sleep on it!`,
          button: {
            text: `Get Hubbardly Founder's Edition, TJ Special`,
            link: meta.plans.tiers.founder.checkoutUrl,
          },
        },
      },
    },
  }
  const merged = merge<Meta, PartialDeep<Meta>>(cloneDeep(meta), overrides)
  const founder = merge<Plan>(cloneDeep(meta.plans.tiers.founder), {
    features: [
      ...FREE_FEATURES,
      ...PRO_FEATURES,
      ...FOUNDER_FEATURES,
      `#TTJ Exclusive#: Unlimited access to private TJ recipes`,
      `#TTJ Exclusive#: #tj4lyf tee shirt`,
    ],
  })
  const { cta } = merged.lander.hero
</script>

<Lander meta={merged}>
  <div class="special-message mt-4 mb-4">
    <div class="prose w-full bg-neutral p-8 rounded-3xl">
      <Cta />
    </div>
  </div>
  <div class="mb-4">
    <PricingCard data={founder} />
  </div>
</Lander>

<style lang="postcss">
  .special-message :global(.prose) {
    max-width: initial;
    /* @apply text-sm; */
  }
</style>
