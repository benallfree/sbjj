<script lang="ts">
  import { writable } from 'svelte/store'
  import PricingCard from './PricingCard.svelte'
  import type { PageData } from './$types'
  import Fa from 'svelte-fa'
  import { faMartiniGlass } from '@fortawesome/free-solid-svg-icons'

  export let data: PageData
  const { meta } = data

  const {
    presale,
    plans: { title, tagline, content, tiers },
  } = meta

  const userSubscriptionType = writable('')
</script>

<main>
  <div class="mx-auto max-w-7xl p-2 md:px-6 lg:px-8">
    <div class="mx-auto max-w-4xl text-center">
      <h1 class="text-base font-semibold leading-7 text-primary">{title}</h1>
      <p class="mt-2 text-4xl font-bold tracking-tight text-white sm:text-5xl">
        {tagline}
      </p>
    </div>

    {#if presale}
      <div class="flex justify-center">
        <div role="alert" class="alert alert-warning m-8 max-w-2xl">
          <Fa icon={faMartiniGlass} />
          <span>{@html presale}</span>
        </div>
      </div>
    {/if}

    <p
      class="mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-gray-300"
    >
      {content}
    </p>

    <div
      class="mx-auto mt-10 grid max-w-md grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3"
    >
      {#each Object.entries(tiers) as [slug, { name, description, price, features, checkoutUrl, locked, qtyMax }]}
        <PricingCard
          {name}
          {description}
          {price}
          {checkoutUrl}
          {locked}
          active={$userSubscriptionType === slug}
          {features}
          {qtyMax}
          qtySold={data.soldCounts[slug] || 0}
        />
      {/each}
    </div>
  </div>
</main>
