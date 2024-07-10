<script lang="ts">
  import { page } from '$app/stores'
  import Logo from './Logo.svelte'
  import MediaQuery from './MediaQuery.svelte'
  import SubscriptionStatus from './SubscriptionStatus.svelte'
  import UserLoggedIn from './UserLoggedIn.svelte'
  import SidebarNavLink from './sidebar/SidebarNavLink.svelte'
  import { PocketbaseClient } from '$src/pocketbase-client/PocketbaseClient'

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
<MediaQuery query="(min-width: 701px) and (max-width: 1024px)" let:matches>
  {#if matches}
    <UserLoggedIn>
      <div role="tablist" class="tabs tabs-boxed">
        <a href="/" role="tab" class="tab">
          <Logo hideLogoText={true} logoWidth="h-8" />
        </a>

        <a
          role="tab"
          class="tab {$page.url.pathname === '/app' ? `tab-active` : ``}"
          href="/app">Dashboard</a
        >

        <a href="/support" class="tab" target="_blank" rel="noreferrer"
          ><i class="fa-regular fa-comment-code mr-2"></i> Support
        </a>

        <a
          href={`/pricing`}
          class="tab"
          role="tab"
          target="_blank"
          rel="noreferrer"
        >
          <i class="fa-regular fa-webhook mr-2"></i> Presale
        </a>

        <a
          role="tab"
          class="tab {$page.url.pathname.endsWith(`/account`)
            ? `tab-active`
            : ``}"
          href="/account">My Account</a
        >

        <button type="button" class="tab" on:click={handleLogoutAndRedirect}
          ><i class="fa-regular fa-arrow-up-left-from-circle mr-2"></i> Logout</button
        >
      </div>
    </UserLoggedIn>
  {:else}
    <aside
      class="lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col w-full max-w-[360px] h-full"
    >
      <div class="flex grow flex-col overflow-y-auto bg-gray-900 px-6 h-full">
        <div class="flex shrink-0 items-center">
          <a href="/" class="" on:click={handleMobileNavDismiss}>
            <Logo hideLogoText={true} logoWidth="w-20" />
          </a>
        </div>

        <nav class="flex flex-1 flex-col">
          <SubscriptionStatus handleClick={handleMobileNavDismiss} />

          <ul role="list" class="-mx-2 space-y-1 mb-8">
            <li>
              <SidebarNavLink
                url="/"
                icon="house"
                handleClick={handleMobileNavDismiss}>Dashboard</SidebarNavLink
              >
            </li>
            <li>
              <SidebarNavLink
                url="/account"
                icon="user"
                handleClick={handleMobileNavDismiss}>My Account</SidebarNavLink
              >
            </li>

            \
            <li>
              <SidebarNavLink
                url="https://github.com/pockethost/pockethost"
                icon="github"
                brandIcon={true}
                external={true}
                handleClick={handleMobileNavDismiss}>GitHub</SidebarNavLink
              >
            </li>
            <li>
              <SidebarNavLink
                url="#"
                icon="arrow-up-left-from-circle"
                handleClick={handleLogoutAndRedirect}>Logout</SidebarNavLink
              >
            </li>
          </ul>
        </nav>
      </div>
    </aside>
  {/if}
</MediaQuery>
