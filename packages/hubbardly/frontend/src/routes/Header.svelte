<script>
  import AuthStateGuard from './AuthStateGuard.svelte'
  import MediaQuery from './MediaQuery.svelte'
  import MobileNavDrawer from './MobileNavDrawer.svelte'
  import UserLoggedIn from './UserLoggedIn.svelte'
  import Navbar from './Navbar.svelte'
  import { isUserLoggedIn } from '$src/stores'
  import VerifyAccountBar from './VerifyAccountBar.svelte'
</script>

<AuthStateGuard>
  <div>
    <Navbar />

    <main class="py-10 {$isUserLoggedIn ? `lg:pl-72` : ``}">
      <div class="px-4 sm:px-6 lg:px-8">
        <VerifyAccountBar />

        <slot />
      </div>
    </main>
  </div>
</AuthStateGuard>
