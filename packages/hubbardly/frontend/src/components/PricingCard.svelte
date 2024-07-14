<script lang="ts">
  import {
    faChampagneGlasses,
    faCheck,
    faClockFour,
    faLock,
    faWineBottle,
    faXmark,
  } from '@fortawesome/free-solid-svg-icons'
  import Fa from 'svelte-fa'
  import PricingCardDivButton from './PricingCardDivButton.svelte'
  import PricingCardAnchorButton from './PricingCardAnchorButton.svelte'
  import { type Meta, type PlanSlug } from '$src/meta'
  import { produce } from 'immer'
  import { forEach, values } from '@s-libs/micro-dash'
  import type { Feature, FeatureLookup } from '$src/meta/features'
  import { formatNumber, greenify } from '$src/util'

  export let meta: Meta
  export let plan: PlanSlug
  export let qtySold = 0
  export let active = false

  const activePlan = meta.plans[plan]
  const {
    name,
    description,
    price,
    checkoutUrl,
    qtyMax,
    bonusFeatures,
    isPrelaunch,
    isDefault,
  } = activePlan

  export let prelaunch = true

  const qtyRemaining = qtyMax - qtySold

  const mappedFeatures = Object.entries(
    produce(meta.features, (draft) => {
      forEach(bonusFeatures as FeatureLookup, (feature, k) => {
        draft[k] = produce(feature, (draftFeature) => {
          draftFeature.title = greenify(draftFeature.title)
        })
      })
    }),
  )
    .sort(([keyA, featureA], [keyB, featureB]) => {
      if (featureA.isStretch && !featureB.isStretch) {
        return 1
      } else if (featureB.isStretch && !featureA.isStretch) {
        return -1
      } else if (featureA.isPremium && !featureB.isPremium) {
        return 1
      } else if (featureB.isPremium && !featureA.isPremium) {
        return -1
      } else {
        return featureB.title.localeCompare(featureA.title)
      }
    })
    .reduce((acc, [key, feature]) => {
      acc[key] = feature
      return acc
    }, {} as FeatureLookup)

  const locked = !isPrelaunch

  const url = locked
    ? `javascript:alert('This plan is locked while ${meta.name} is in ${meta.prelaunchLabel} mode.')`
    : checkoutUrl
</script>

<div
  class={`flex flex-col rounded-3xl p-8 xl:p-10  ${
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
    <div class="flex flex-row">
      <Fa icon={faLock} class="mt-1 mr-1" />
      <span class="text-warning">Locked during {meta.prelaunchLabel}</span>
    </div>
  {/if}

  {#if qtyMax > 0}
    <div class="flex flex-row">
      <Fa icon={faClockFour} class="mt-1 mr-1" />
      <span
        class="animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent text-xl font-black"
        >{formatNumber(qtyRemaining)}/{formatNumber(qtyMax)} Remaining</span
      >
    </div>
    {#if qtyRemaining <= 0}
      <p class="text-error text-xl font-black">SOLD OUT</p>
    {/if}
  {/if}

  <p class="mt-4 mb-8 text-sm leading-6 text-gray-300">{description}</p>

  <div class="mb-8">
    {#if prelaunch}
      <div class="prose">Features in Planning</div>
    {/if}
    <ul class="text-sm leading-6 text-gray-300">
      {#each values(mappedFeatures) as { title, description, isPremium, isStretch }}
        <li class="flex items-center gap-x-2">
          <div class="collapse">
            <summary
              class="collapse-title flex items-center gap-x-2 p-0 min-h-0"
            >
              {#if isPremium && !activePlan.isPremium}
                <Fa icon={faXmark} class="text-error" />
              {:else if isStretch}
                <Fa icon={faChampagneGlasses} class="text-info" />
              {:else}
                <Fa icon={faCheck} class="text-success" />
              {/if}
              <span>{@html title}</span>
            </summary>
            <div class="collapse-content">
              {@html description}
            </div>
          </div>
        </li>
      {/each}
    </ul>
  </div>

  <div class="mt-auto">
    {#if isDefault}
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
