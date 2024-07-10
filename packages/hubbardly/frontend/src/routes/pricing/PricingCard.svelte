<script lang="ts">
  import { DOCS_URL } from '$src/env'
  import { faCheck, faClock, faLock } from '@fortawesome/free-solid-svg-icons'
  import Fa from 'svelte-fa'

  export let name: string
  export let description: string
  export let price: string
  export let features: string[]
  export let checkoutUrl
  export let locked = false
  export let active: boolean
  export let qtyMax = 0
  export let qtySold = 0

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

  const qtyRemaining = qtyMax - qtySold

  const mappedFeatures = features.map((feature) => feature.split(/#/))

  const url = locked
    ? `javascript:alert('This plan is locked during presale')`
    : checkoutUrl
</script>

<div
  class={`flex flex-col rounded-3xl p-8 xl:p-10 ${
    active ? 'bg-white/5 ring-2 ring-primary' : 'ring-1 ring-white/10'
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
      <span class="text-warning">Locked during presale</span>
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
    <ul class="text-sm leading-6 text-gray-300">
      {#each mappedFeatures as [feature, infoUrl]}
        <li class="flex items-center gap-x-2">
          <Fa icon={faCheck} class="text-primary" />
          {feature}
          {#if infoUrl}
            <a
              href={infoUrl.startsWith(`http`) ? infoUrl : DOCS_URL(infoUrl)}
              class="badge badge-neutral"
              target="_blank">i</a
            >
          {/if}
        </li>
      {/each}
    </ul>
  </div>

  <div class="mt-auto">
    {#if price === '0'}
      <div
        class="mt-auto mb-4 block rounded-md py-2 px-3 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 bg-primary/50 text-white focus-visible:outline-white"
      >
        <span class="text-xl font-bold tracking-tight text-white">
          Free Forever
        </span>
      </div>
    {:else if qtyMax > 0}
      {#if qtyRemaining > 0}
        <a
          href={url}
          class="mt-auto mb-4 block rounded-md py-2 px-3 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 bg-white/10 text-white hover:bg-white/20 focus-visible:outline-white"
        >
          <span class="text-xl font-bold tracking-tight text-white">
            ${price}
          </span>
        </a>
      {:else}
        <div
          class="mt-auto mb-4 block rounded-md py-2 px-3 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 bg-white/10 text-white hover:bg-white/20 focus-visible:outline-white"
        >
          <span class="text-xl font-bold tracking-tight text-white">
            ${price}
            <span class="text-error text-xl font-black">SOLD OUT</span></span
          >
        </div>
      {/if}
    {:else}
      <a
        href={url}
        class="mt-auto mb-4 block rounded-md py-2 px-3 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 bg-white/10 text-white hover:bg-white/20 focus-visible:outline-white"
      >
        <span class="text-xl font-bold tracking-tight text-white">
          ${price}
        </span>
      </a>
    {/if}
  </div>
</div>
