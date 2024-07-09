<script>
	import Header from './Header.svelte'
	import '../app.css'
	import '@beyonk/gdpr-cookie-consent-banner/banner.css' // optional, you can also define your own styles
	import GdprBanner from '@beyonk/gdpr-cookie-consent-banner'

	import meta from '$src/meta.json'

	function initAnalytics() {
		// do something with segment.io or google analytics etc
	}
</script>

<div class="app">
	<Header />

	<main>
		<div class=" md:p-8">
			<slot />
		</div>
	</main>

	<footer>
		<footer class="footer bg-neutral text-neutral-content p-10">
			<nav>
				<h6 class="footer-title">Legal</h6>
				<a href="/tos" class="link link-hover">Terms of Service</a>
				<a href="/privacy" class="link link-hover">Privacy Policy</a>
				<a href="/cookie" class="link link-hover">Cookie Policy</a>
			</nav>
		</footer>
	</footer>

	<GdprBanner
		cookieName={meta.gpdr.cookieName}
		description={meta.gpdr.description}
		on:analytics={initAnalytics}
	/>
</div>
