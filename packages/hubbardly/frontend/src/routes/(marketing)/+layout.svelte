<script lang="ts">
  import Header from '$components/Header.svelte'
  import '$src/app.css'
  import Footer from '$components/Footer.svelte'
  import Gpdr from '$components/Gpdr/Gpdr.svelte'
</script>

<div class="app">
  <Header />

  <main>
    <div class=" md:p-8">
      <slot />
    </div>
  </main>

  <Footer />
  <Gpdr />
</div>
