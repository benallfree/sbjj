<script lang="ts">
  import AuthModal from '$src/components/AuthModal.svelte'
  import { currentUser, logOut } from '$src/pocketbase-client'
  import { faSignOut } from '@fortawesome/free-solid-svg-icons'
  import Fa from 'svelte-fa'
  import Logo from './Logo.svelte'
  import UserLoggedIn from './UserLoggedIn.svelte'
  import UserLoggedOut from './UserLoggedOut.svelte'

  export let hideLogoText = false

  // Log the user out and redirect them to the homepage
  const handleLogoutAndRedirect = async () => {
    console.log('Logging out')

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
<div class="navbar bg-base-100 flex items-start">
  <div class="flex-none w-auto">
    <Logo {hideLogoText} />
  </div>
  <div class="flex-grow">
    <slot />
  </div>
  <div class="flex-none w-auto">
    <UserLoggedIn fallback>
      <div class="grid grid-flow-col gap-4">
        <div class="avatar">
          <a href="/profile" class="w-8 rounded-full">
            <img
              alt="Avatar"
              src="https://robohash.org/{currentUser()?.id}.png?set=set4"
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
</div>
