<script lang="ts">
  import GpdrBanner from '$components/Gpdr/Gpdr.svelte'
  import Footer from '$src/components/Footer.svelte'
  import Header from '$src/components/Header.svelte'
  import UserLoggedIn from '$src/components/UserLoggedIn.svelte'
  import '../../app.css'
</script>

<div class="app">
  <UserLoggedIn>
    <Header />
  </UserLoggedIn>

  <main>
    <div class=" md:p-8">
      <slot />
    </div>
  </main>

  <Footer />
  <GpdrBanner />
</div>
