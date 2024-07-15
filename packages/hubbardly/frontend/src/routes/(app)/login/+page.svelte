<script lang="ts">
  import UserLoggedIn from '$src/components/UserLoggedIn.svelte'
  import UserLoggedOut from '$src/components/UserLoggedOut.svelte'
  import { PocketbaseClient } from '$src/pocketbase-client/PocketbaseClient'
  import {
    faEnvelope,
    faRightToBracket,
  } from '@fortawesome/free-solid-svg-icons'
  import Fa from 'svelte-fa'
  import type { KeyboardEventHandler } from 'svelte/elements'

  let email = 'ben@benallfree.com'
  let code = '335584'
  let otpSent = true
  let verifying = false
  let error = ''
  $: console.log(email)

  const startOver = () => {
    otpSent = false
    code = ''
    error = ''
    verifying = false
  }

  const handleKeydown: KeyboardEventHandler<HTMLInputElement> = (event) => {
    if (event.key === 'Enter') {
      otpSent = true
      const { sendOtp } = PocketbaseClient()
      sendOtp(email).catch(console.error)
    }
  }

  const handleKeydownCode: KeyboardEventHandler<HTMLInputElement> = (event) => {
    if (code?.length != 6) return
    verifying = true
    const { authViaOtp } = PocketbaseClient()
    authViaOtp(email, parseInt(code, 10))
      .catch((e) => {
        error = e.message
        console.error(e)
      })
      .finally(() => {
        verifying = false
      })
  }
</script>

<UserLoggedOut>
  <div class="m-4">
    {#if error}
      <div class="bg-error text-neutral p-2">{error}</div>
    {/if}
    {#if otpSent}
      {#if verifying}
        <div class="m-4">Logging in...</div>
      {:else}
        <div class="m-4">Check your email</div>
        <label class="input input-bordered flex items-center gap-2">
          <Fa icon={faRightToBracket} />
          <input
            type="number"
            maxlength="6"
            bind:value={code}
            on:keydown={handleKeydownCode}
            class="grow"
            placeholder="Verification code from email"
          />
        </label>
        <button class="btn btn-primary" on:click={startOver}>Start Over</button>
      {/if}
    {:else}
      <label class="input input-bordered flex items-center gap-2">
        <Fa icon={faEnvelope} />
        <input
          type="email"
          bind:value={email}
          on:keydown={handleKeydown}
          class="grow"
          placeholder="Search"
        />
      </label>
    {/if}
  </div>
</UserLoggedOut>
<UserLoggedIn
  >Logged in
  <button class="btn btn-primary" on:click={() => PocketbaseClient().logOut()}
    >Log out</button
  >
</UserLoggedIn>
