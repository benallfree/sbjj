<script lang="ts">
  import Fa from 'svelte-fa'
  import {
    faChampagneGlasses,
    faClockFour,
  } from '@fortawesome/free-solid-svg-icons'
  import ListItem from './ListItem.svelte'
  import PricingTier from './PricingTier.svelte'
  import type { Meta } from '$src/meta'
  import { formatNumber, greenify } from '$src/util'
  import { reduce, values } from '@s-libs/micro-dash'
  import { FEATURES_MATRIX, type FeatureLookup } from '$src/meta/features'

  export let meta: Meta

  const coreFeatures = reduce(
    FEATURES_MATRIX,
    (acc, feature, slug) => {
      if (feature.isPremium) return acc
      if (feature.isStretch) return acc
      acc[slug] = feature
      return acc
    },
    {} as FeatureLookup,
  )
  const coreStretchFeatures = reduce(
    FEATURES_MATRIX,
    (acc, feature, slug) => {
      if (feature.isPremium) return acc
      if (!feature.isStretch) return acc
      acc[slug] = feature
      return acc
    },
    {} as FeatureLookup,
  )

  const premiumFeatures = reduce(
    FEATURES_MATRIX,
    (acc, feature, slug) => {
      if (!feature.isPremium) return acc
      if (feature.isStretch) return acc
      acc[slug] = feature
      return acc
    },
    {} as FeatureLookup,
  )

  const premiumStretchFeatures = reduce(
    FEATURES_MATRIX,
    (acc, feature, slug) => {
      if (!feature.isPremium) return acc
      if (!feature.isStretch) return acc
      acc[slug] = feature
      return acc
    },
    {} as FeatureLookup,
  )
</script>

<div class="flex flex-col lg:flex-row gap-x-2">
  <PricingTier
    {meta}
    disabled
    title={meta.plans.free.name}
    subscribeText="Join"
    subscribeLink=""
  >
    {#each Object.values(coreFeatures) as feature}
      <ListItem>{feature.title}</ListItem>
    {/each}
    {#if values(coreStretchFeatures).length > 0}
      <ListItem>Stretch goals:</ListItem>
      {#each Object.values(coreStretchFeatures) as feature}
        <ListItem
          ><Fa
            class="text-info"
            icon={faChampagneGlasses}
          />{feature.title}</ListItem
        >
      {/each}
    {/if}
  </PricingTier>

  <PricingTier
    {meta}
    disabled
    title={meta.plans.annual.name}
    subscribeText={meta.plans.annual.price}
    subscribeLink={meta.plans.annual.checkoutUrl}
  >
    <div class="italic text-accent">Everything in Free, plus:</div>
    {#each Object.values(premiumFeatures) as feature}
      <ListItem>{feature.title}</ListItem>
    {/each}

    {#if values(premiumStretchFeatures).length > 0}
      <ListItem>Stretch goals:</ListItem>
      {#each Object.values(premiumStretchFeatures) as feature}
        <ListItem
          ><Fa
            class="text-info"
            icon={faChampagneGlasses}
          />{feature.title}</ListItem
        >
      {/each}
    {/if}
  </PricingTier>

  <PricingTier
    {meta}
    title={meta.plans.founder.name}
    subscribeText={meta.plans.founder.price}
    subscribeLink={meta.plans.founder.checkoutUrl}
  >
    <ListItem>
      <Fa icon={faClockFour} class="mt-1 mr-1" />
      <span
        class="animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent text-xl font-black"
        >{formatNumber(500)}/{formatNumber(500)} Remaining</span
      >
    </ListItem>
    <div class="italic text-accent">Everything in Blue, plus:</div>
    {#if meta.plans.founder.bonusFeatures}
      {#each Object.values(meta.plans.founder.bonusFeatures) as { title, description }}
        <ListItem><div>{@html greenify(title)}</div></ListItem>
      {/each}
    {/if}
  </PricingTier>
</div>
