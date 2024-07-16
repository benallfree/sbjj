<script lang="ts">
  import '../../app.css'
  import GdprBanner from '@beyonk/gdpr-cookie-consent-banner'
  import './custom.css'
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
