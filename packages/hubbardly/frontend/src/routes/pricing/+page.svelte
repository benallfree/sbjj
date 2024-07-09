<script lang="ts">
	import { writable } from 'svelte/store'
	import PricingCard from './PricingCard.svelte'
	import type { PageData } from './$types'

	export let data: PageData
	const { meta } = data

	const {
		plans: { title, tagline, content, tiers, presale }
	} = meta

	const userSubscriptionType = writable('')
</script>

<div class="">
	<main>
		<div class="mx-auto mt-16 max-w-7xl md:px-6 sm:mt-32 lg:px-8">
			<div class="mx-auto max-w-4xl text-center">
				<h1 class="text-base font-semibold leading-7 text-primary">{title}</h1>
				<p class="mt-2 text-4xl font-bold tracking-tight text-white sm:text-5xl">
					{tagline}
				</p>
			</div>

			{#if presale}
				<div class="flex justify-center">
					<div role="alert" class="alert alert-warning m-8 max-w-2xl">
						<i class="fa-thin fa-martini-glass"></i>
						<span>{presale}</span>
					</div>
				</div>
			{/if}

			<p class="mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-gray-300">
				{content}
			</p>

			<div
				class="mx-auto mt-10 grid max-w-md grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3"
			>
				{#each tiers as { name, description, price, slug, features, checkoutUrl, locked, qtyMax }}
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
</div>
