<script lang="ts">
  import { formatNumber, greenify } from '$src/util'
  import type { MetaContext } from '$store/MetaContext'
  import {
    faChampagneGlasses,
    faClockFour,
  } from '@fortawesome/free-solid-svg-icons'
  import { values } from '@s-libs/micro-dash'
  import { getContext } from 'svelte'
  import Fa from 'svelte-fa'
  import ListItem from './ListItem.svelte'
  import PricingTier from './PricingTier.svelte'

  const { state: metaState } = getContext<MetaContext>('meta')

  $: ({ plans, features } = $metaState)

  $: ({
    coreFeatures,
    coreStretchFeatures,
    premiumFeatures,
    premiumStretchFeatures,
  } = {
    coreFeatures: features.filter(
      (feature) => !feature.isPremium && !feature.isStretch,
    ),
    coreStretchFeatures: features.filter(
      (feature) => !feature.isPremium && feature.isStretch,
    ),
    premiumFeatures: features.filter(
      (feature) => feature.isPremium && !feature.isStretch,
    ),
    premiumStretchFeatures: features.filter(
      (feature) => feature.isPremium && feature.isStretch,
    ),
  })
</script>

<div class="flex flex-col lg:flex-row gap-x-2">
  <PricingTier disabled plan={'free'}>
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

  <PricingTier disabled plan={'season1'}>
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

  <PricingTier plan={'founder'}>
    <ListItem>
      <Fa icon={faClockFour} class="mt-1 mr-1" />
      <span
        class="animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent text-xl font-black"
        >{formatNumber(500)}/{formatNumber(500)} Remaining</span
      >
    </ListItem>
    <div class="italic text-accent">Everything in Blue, plus:</div>
    {#if plans.founder.bonusFeatures}
      {#each Object.values(plans.founder.bonusFeatures) as { title, description }}
        <ListItem><div>{@html greenify(title)}</div></ListItem>
      {/each}
    {/if}
  </PricingTier>
</div>
