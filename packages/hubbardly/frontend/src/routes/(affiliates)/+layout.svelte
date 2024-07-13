<script lang="ts">
  import GpdrBanner from '$components/Gpdr/Gpdr.svelte'
  import Footer from '$src/components/Footer.svelte'
  import '../../app.css'
</script>

<div class="app">
  <main>
    <div class=" md:p-8">
      <slot />
    </div>
  </main>

  <Footer />
  <GpdrBanner />
</div>
