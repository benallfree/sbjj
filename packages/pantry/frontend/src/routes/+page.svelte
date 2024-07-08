<script>
	import { PUBLIC_APP_URL } from '../env';
	import MainFeatureBlock from './MainFeatureBlock.svelte';
	import PrimaryButton from './PrimaryButton.svelte';
	import SubfeatureBlock from './SubfeatureBlock.svelte';
	import meta from './meta.json';
</script>

<div class="block md:hidden">
	<img src="/img/logo.png" alt="Logo" class="w-full p-8 mix-blend-lighten" />
</div>
<div class="container mx-auto text-white flex items-center">
	<div class="p-8 lg:w-1/2">
		<h1 class="text-6xl font-bold mb-8">{meta.hero.subtitle}</h1>

		<p class="text-2xl mb-12">
			{@html meta.hero.cta.text.replaceAll(
				/#(.*?)#/g,
				`<b class="text-green-600 dark:text-green-400">$1</b>`
			)}
		</p>

		<PrimaryButton text="Get Started" url="/signup" icon="fa-solid fa-arrow-right" />
	</div>

	<div class="w-full p-8 lg:w-1/2 md:block hidden">
		<img
			src="/img/splash.webp"
			alt="Hero splash"
			class="rounded-[250px] mix-blend-lighten animated-hero-banner"
		/>
	</div>
</div>

<div
	class="container mx-auto md:bg-gradient-to-r md:from-zinc-900 md:to-zinc-800 bg-zinc-800 border-zinc-700 border-2 rounded-[75px] flex flex-wrap mb-12 shadow-xl overflow-hidden"
>
	<div class="bg-zinc-900 md:w-1/2">
		<MainFeatureBlock
			icon={meta.mainFeatures[0].icon}
			title={meta.mainFeatures[0].title}
			tagline={meta.mainFeatures[0].title}
			content={meta.mainFeatures[0].content}
			linkText={meta.mainFeatures[0].linkText}
			linkURL={meta.mainFeatures[0].linkURL}
		/>
	</div>

	<div class="bg-zinc-800 md:w-1/2">
		<MainFeatureBlock
			icon={meta.mainFeatures[1].icon}
			title={meta.mainFeatures[1].title}
			tagline={meta.mainFeatures[1].title}
			content={meta.mainFeatures[1].content}
			linkText={meta.mainFeatures[1].linkText}
			linkURL={meta.mainFeatures[1].linkURL}
		/>
	</div>

	<div class="w-full">
		<div
			class="bg-zinc-900 p-[75px] border-zinc-700 border-t-2 rounded-[75px] flex flex-wrap justify-center"
		>
			{#each meta.subFeatures as subfeature}
				<SubfeatureBlock
					icon={subfeature.icon}
					title={subfeature.title}
					content={subfeature.content}
				/>
			{/each}
		</div>
	</div>
</div>

<style>
	.animated-hero-banner {
		animation-name: heroAnimation;
		animation-duration: 2s;
		animation-iteration-count: infinite;
		animation-direction: alternate-reverse;
	}

	@keyframes heroAnimation {
		0% {
			transform: translateY(-10px);
		}
		100% {
			transform: translateY(10px);
		}
	}
</style>
