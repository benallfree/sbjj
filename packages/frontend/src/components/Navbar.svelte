<script lang="ts">
  import Logo from './Logo.svelte'
  import UserLoggedIn from './UserLoggedIn.svelte'
  import { PocketbaseClient } from '$src/pocketbase-client/PocketbaseClient'
  import UserLoggedOut from './UserLoggedOut.svelte'
  import AuthModal from '$src/components/AuthModal.svelte'
  import Fa from 'svelte-fa'
  import { faSignOut } from '@fortawesome/free-solid-svg-icons'

  // Log the user out and redirect them to the homepage
  const handleLogoutAndRedirect = async () => {
    console.log('Logging out')
    const { logOut } = PocketbaseClient()

    // Clear out the pocketbase information about the current user
    logOut()

    // Hard refresh to make sure any remaining data is cleared
    window.location.href = '/'
  }

  const showModal = () => {
    //@ts-ignore
    document.getElementById('auth_modal')?.showModal()
  }
</script>

<!-- Custom Tablet Navigation -->
<div class="navbar bg-base-100">
  <div class="flex-1">
    <Logo />
  </div>
  <UserLoggedIn fallback>
    <div class="grid grid-flow-col gap-4">
      <div class="avatar">
        <a href="/profile" class="w-12 rounded-full">
          <img
            alt="Avatar"
            src="https://robohash.org/{PocketbaseClient().user()
              ?.id}.png?set=set4"
          />
        </a>
      </div>
      <div>
        <button on:click={handleLogoutAndRedirect}>
          <Fa icon={faSignOut} />
        </button>
      </div>
    </div>
  </UserLoggedIn>
  <UserLoggedOut>
    <button class="btn btn-sm btn-primary" on:click={showModal}>Login</button>
    <AuthModal />
  </UserLoggedOut>
</div>
