<script lang="ts">
  import Logo from './Logo.svelte'
  import UserLoggedIn from './UserLoggedIn.svelte'
  import { PocketbaseClient } from '$src/pocketbase-client/PocketbaseClient'
  import UserLoggedOut from './UserLoggedOut.svelte'
  import { meta } from '$src/meta'
  import AlertBar from './AlertBar.svelte'

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
              alt="Tailwind CSS Navbar component"
              src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
            />
          </div>
        </div>
        <ul
          tabindex="0"
          class="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
        >
          <li>
            <a class="justify-between">
              Profile
              <span class="badge">New</span>
            </a>
          </li>
          <li><a>Settings</a></li>
          <li><a>Logout</a></li>
        </ul>
      </div>
    </div>
  </UserLoggedIn>
  <UserLoggedOut>
    <!-- <a href="/login" class="btn btn-xs btn-primary">Login</a> -->
  </UserLoggedOut>
</div>
