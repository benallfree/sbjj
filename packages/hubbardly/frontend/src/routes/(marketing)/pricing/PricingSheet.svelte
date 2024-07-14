<script lang="ts">
  import Fa from 'svelte-fa'
  import {
    faChampagneGlasses,
    faClockFour,
  } from '@fortawesome/free-solid-svg-icons'
  import ListItem from './ListItem.svelte'
  import PricingTier from './PricingTier.svelte'
  import type { Meta } from '$src/meta'
  import { greenify } from '$src/util'

  export let meta: Meta

  function formatNumber(num: number): string {
    if (num < 1000) {
      return num.toString()
    } else if (num < 1_000_000) {
      return (num / 1000).toFixed(1).replace(/\.0$/, '') + 'k'
    } else if (num < 1_000_000_000) {
      return (num / 1_000_000).toFixed(1).replace(/\.0$/, '') + 'm'
    } else {
      return (num / 1_000_000_000).toFixed(1).replace(/\.0$/, '') + 'b'
    }
  }
</script>

<div class="flex flex-col lg:flex-row gap-x-2">
  <PricingTier
    {meta}
    disabled
    title={meta.plans.free.name}
    subscribeText="Join"
    subscribeLink=""
  >
    <ListItem>Manage unlimited pantry items</ListItem>
    <ListItem>Join public communities</ListItem>
    <ListItem>Join premium communities</ListItem>
    <ListItem>Discover new recipes</ListItem>
    <ListItem>Create and share recipes</ListItem>
  </PricingTier>

  <PricingTier
    {meta}
    disabled
    title={meta.plans.annual.name}
    subscribeText={meta.plans.annual.price}
    subscribeLink={meta.plans.annual.checkoutUrl}
  >
    <div class="italic text-accent">Everything in Free, plus:</div>
    <div>Create communities</div>
    <div>Join private communities</div>

    <ListItem>Stretch goals:</ListItem>
    <ListItem
      ><Fa class="text-info" icon={faChampagneGlasses} /> Research ingredient trends</ListItem
    >
    <ListItem
      ><Fa class="text-info" icon={faChampagneGlasses} /> AI-powered recipe suggestions</ListItem
    >
    <ListItem
      ><Fa class="text-info" icon={faChampagneGlasses} />Monetize your community</ListItem
    >
    <ListItem
      ><Fa class="text-info" icon={faChampagneGlasses} />Appoint community
      moderators</ListItem
    >
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
    <div>Lifetime access to Hubbardly</div>
    <div>Founder's badge</div>
    <div>Private Founder's channel on Discord</div>
    <div>Early access to new features</div>
    <div>Vote on new features</div>
    <div>Founder's edition mug</div>
    {#if meta.plans.founder.bonusFeatures}
      {#each Object.values(meta.plans.founder.bonusFeatures) as { title, description }}
        <ListItem>{@html greenify(title)}</ListItem>
      {/each}
    {/if}
  </PricingTier>
</div>
