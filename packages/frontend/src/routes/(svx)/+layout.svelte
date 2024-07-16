<script lang="ts">
  import Header from '$components/Header.svelte'
  import Footer from '$components/Footer.svelte'
  import Gpdr from '$components/Gpdr/Gpdr.svelte'
</script>

<div class="app">
  <Header />

  <main>
    <article class="prose lg:prose-xl m-4">
      <slot />
    </article>
  </main>

  <Footer />
  <Gpdr />
</div>
