<script lang="ts">
  import Logo from './Logo.svelte'
  import UserLoggedIn from './UserLoggedIn.svelte'
  import { PocketbaseClient } from '$src/pocketbase-client/PocketbaseClient'
  import UserLoggedOut from './UserLoggedOut.svelte'
  import AuthModal from '$src/components/AuthModal.svelte'

  // Log the user out and redirect them to the homepage
  const handleLogoutAndRedirect = async () => {
    const { logOut } = PocketbaseClient()

    // Clear out the pocketbase information about the current user
    logOut()

    // Hard refresh to make sure any remaining data is cleared
    window.location.href = '/'
  }

  const handleMobileNavDismiss = () => {
    document.querySelector<HTMLElement>('.drawer-overlay')?.click()
  }
</script>

<!-- Custom Tablet Navigation -->
<div class="navbar bg-base-100">
  <div class="flex-1">
    <Logo />
  </div>
  <UserLoggedIn>
    <div class="flex-none">
      <div class="dropdown dropdown-end">
        <div tabindex="0" role="button" class="btn btn-ghost btn-circle avatar">
          <div class="w-10 rounded-full">
            <img
              alt="Avatar"
              src="https://robohash.org/{PocketbaseClient().user()
                ?.id}.png?set=set4"
            />
          </div>
        </div>
        <ul
          class="menu menu-sm dropdown-content bg-neutral rounded-box z-[1] mt-3 w-52 p-2 shadow"
        >
          <li>
            <a class="justify-between" href="/profile"> Profile </a>
          </li>
          <li>
            <button on:click={() => PocketbaseClient().logOut()}>Logout</button>
          </li>
        </ul>
      </div>
    </div>
  </UserLoggedIn>
  <UserLoggedOut>
    <button class="btn btn-xs btn-primary" onclick="my_modal_1.showModal()"
      >Login</button
    >
    <AuthModal />
  </UserLoggedOut>
</div>
