<script lang="ts">
  import Lander from '$components/Lander.svelte'
  import {
    FOUNDER_FEATURES,
    FREE_FEATURES,
    meta,
    PRO_FEATURES,
  } from '$src/meta'
  import type { Meta } from '$src/meta'
  import { cloneDeep, merge } from '@s-libs/micro-dash'
  import splashImg from './splash.jpg?enhanced'
  import type { PartialDeep } from 'type-fest'
  import Cta from './cta.svx'
  import PrimaryButton from '$src/components/PrimaryButton.svelte'
  import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

  const overrides: PartialDeep<Meta> = {
    lander: {
      hero: {
        title: `Welcome, Thoughtful Journey listeners!`,
        splashImg,
        cta: {
          button: {
            text: `Grab Your Founder's Edition`,
            link: meta.plans.tiers.founder.checkoutUrl,
          },
        },
      },
    },
    plans: {
      tiers: {
        founder: {
          features: [
            ...FREE_FEATURES,
            ...PRO_FEATURES,
            ...FOUNDER_FEATURES,
            `#TTJ Exclusive#: Unlimited access to private TJJ recipes`,
            `#TTJ Exclusive#: #tjjlyf tee shirt`,
          ],
        },
      },
    },
  }
  const merged = merge<Meta, PartialDeep<Meta>>(cloneDeep(meta), overrides)
  const { cta } = merged.lander.hero
</script>

<Lander meta={merged}>
  <div class="card bg-primary text-primary-content mt-8">
    <div class="card-body">
      <Cta />
      <div class="card-actions justify-end">
        <div class="mt-4">
          <PrimaryButton
            text={cta.button.text}
            url={cta.button.link}
            icon={faArrowRight}
          />
        </div>
      </div>
    </div>
  </div>
</Lander>

<style lang="postcss">
  .card-body :global(h2) {
    @apply card-title;
  }
</style>
