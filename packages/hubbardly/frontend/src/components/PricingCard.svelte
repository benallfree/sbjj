<script lang="ts">
  import type { Meta } from '$src/meta'
  import { faCheck, faClock, faLock } from '@fortawesome/free-solid-svg-icons'
  import Fa from 'svelte-fa'
  import PricingCardDivButton from './PricingCardDivButton.svelte'
  import PricingCardAnchorButton from './PricingCardAnchorButton.svelte'
  import AlertBar from './AlertBar.svelte'

  export let data: Meta['plans']['tiers']['free']
  export let qtySold = 0
  export let active = false

  const {
    slug,
    name,
    description,
    price,
    features,
    checkoutUrl,
    locked,
    qtyMax,
  } = data

  export let prelaunch = true

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

  const greenify = (text: string) =>
    text.replaceAll(
      /#(.*?)#/g,
      `<b class="text-green-600 dark:text-green-400">$1</b>`,
    )
  const qtyRemaining = qtyMax - qtySold

  const mappedFeatures = features.map((feature) => {
    const [featureText, link] = feature.split(/🔗/)
    return [greenify(featureText), link]
  })

  const url = locked
    ? `javascript:alert('This plan is locked during Prelaunch')`
    : checkoutUrl
</script>

<div
  class={`flex flex-col rounded-3xl p-8 xl:p-10 ${
    !locked
      ? 'bg-white/5 ring-2 ring-primary'
      : 'ring-1 ring-white/90 bg-warning/20'
  }`}
>
  <div class="flex items-center justify-between gap-x-4">
    <h2 id="tier-startup" class="text-lg font-semibold leading-8 text-white">
      {name}
    </h2>

    {#if active}
      <p
        class="rounded-full border-primary border px-2.5 py-1 text-xs font-semibold leading-5 text-white"
      >
        Your Plan
      </p>
    {/if}
  </div>
  {#if locked}
    <div>
      <Fa icon={faLock} />
      <span class="text-warning">Locked during Prelaunch</span>
    </div>
  {/if}

  {#if qtyMax > 0}
    <p
      class="animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent text-xl font-black"
    >
      <Fa icon={faClock} />
      {formatNumber(qtyRemaining)}/{formatNumber(qtyMax)} Remaining
    </p>
    {#if qtyRemaining <= 0}
      <p class="text-error text-xl font-black">SOLD OUT</p>
    {/if}
  {/if}

  <p class="mt-4 mb-8 text-sm leading-6 text-gray-300">{description}</p>

  <div class="mb-8">
    {#if prelaunch}
      <AlertBar type="warning" icon={false}>
        We are in Prelaunch mode! Once all the Founder's Edition memberships are
        sold, we will begin building. Your Founder's Edition membership is fully
        refundable at any time for any reason during Prelaunch. After we launch,
        it is refundable for 90 days.
      </AlertBar>
      <div class="prose">Features in Planning</div>
    {/if}
    <ul class="text-sm leading-6 text-gray-300">
      {#each mappedFeatures as [feature, infoUrl]}
        <li class="flex items-center gap-x-2">
          <Fa icon={prelaunch ? faLock : faCheck} class="text-primary" />
          <span>{@html feature}</span>
          {#if infoUrl}
            <a href={infoUrl} class="badge badge-neutral" target="_blank">i</a>
          {/if}
        </li>
      {/each}
    </ul>
  </div>

  <div class="mt-auto">
    {#if slug === 'free'}
      <PricingCardDivButton {price} {url} />
    {:else if qtyMax > 0}
      {#if qtyRemaining > 0}
        <PricingCardAnchorButton {price} {url} />
      {:else}
        <PricingCardDivButton {price} {url} isSoldOut={true} />
      {/if}
    {:else}
      <PricingCardAnchorButton {price} {url} />
    {/if}
  </div>
</div>
