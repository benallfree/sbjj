<script lang="ts">
  import '@beyonk/gdpr-cookie-consent-banner/banner.css' // optional, you can also define your own styles
  import GdprBanner from '@beyonk/gdpr-cookie-consent-banner'
  import { meta } from '$src/meta'

  function initAnalytics() {
    // do something with segment.io or google analytics etc
  }
</script>

<GdprBanner
  showEditIcon={false}
  cookieName={meta.gpdr.cookie.name}
  description={meta.gpdr.description}
  on:analytics={initAnalytics}
/>
