<script>
  import AuthStateGuard from './AuthStateGuard.svelte'
  import MediaQuery from './MediaQuery.svelte'
  import MobileNavDrawer from './MobileNavDrawer.svelte'
  import UserLoggedIn from './UserLoggedIn.svelte'
  import Navbar from './Navbar.svelte'
  import { isUserLoggedIn } from '$src/stores'
  import VerifyAccountBar from './VerifyAccountBar.svelte'
</script>

<div>
  <Navbar />
  <VerifyAccountBar />

  <slot />
</div>
