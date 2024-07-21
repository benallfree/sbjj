<script lang="ts">
  import Footer from '$components/Footer.svelte'
  import Gpdr from '$components/Gpdr/Gpdr.svelte'
  import Header from '$src/components/Header.svelte'
  import { createMetaContext, type MetaContext } from '$store/MetaContext'
  import { isUserLoggedIn } from '$store/user'
  import { setContext } from 'svelte'
  setContext<MetaContext>(`meta`, createMetaContext())
</script>

<div class="app">
  <Header hideLogoText={$isUserLoggedIn} />

  <main>
    <div class="md:p-8">
      <slot />
    </div>
  </main>

  <Footer />
  <Gpdr />
</div>
