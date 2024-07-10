<script lang="ts">
  import GpdrBanner from '../../components/GpdrBanner.svelte'
  import Footer from '../../components/Footer.svelte'
  import '../../app.css'
  import Logo from '../Logo.svelte'
</script>

<div class="app">
  <main>
    <div class=" md:p-8">
      <slot />
    </div>
  </main>

  <GpdrBanner />
</div>
