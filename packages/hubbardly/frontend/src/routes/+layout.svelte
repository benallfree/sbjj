<script lang="ts">
  import Header from './Header.svelte'
  import '../app.css'
  import '@beyonk/gdpr-cookie-consent-banner/banner.css' // optional, you can also define your own styles
  import GdprBanner from '@beyonk/gdpr-cookie-consent-banner'
  import type { PageData } from './$types'

  export let data: PageData
  const { meta } = data

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
        <a href="/privacy" class="link link-hover">Privacy</a>
        <a href="/cookie" class="link link-hover">Cookies</a>
        <a href="/affiliate" class="link link-hover">Affiliates</a>
        <a href="/cancel" class="link link-hover">Canceling and Refunds</a>
      </nav>
    </footer>
  </footer>

  <GdprBanner
    cookieName={meta.gpdr.cookie.name}
    description={meta.gpdr.description}
    on:analytics={initAnalytics}
  />
</div>
