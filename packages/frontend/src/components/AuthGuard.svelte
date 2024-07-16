<script lang="ts">
  import { browser } from '$app/environment'
  import { goto } from '$app/navigation'
  import UserLoggedIn from '$src/components/UserLoggedIn.svelte'
  import UserLoggedOut from '$src/components/UserLoggedOut.svelte'
  import { PocketbaseClient } from '$src/pocketbase-client/PocketbaseClient'
  import { flash } from '$src/stores'
  import {
    faEnvelope,
    faRightToBracket,
  } from '@fortawesome/free-solid-svg-icons'
  import { onMount } from 'svelte'
  import Fa from 'svelte-fa'
  import type { KeyboardEventHandler } from 'svelte/elements'

  const { authViaOtp, sendOtp } = PocketbaseClient()

  enum FormState {
    SendCode,
    Login,
    LoggingIn,
  }
  let formState: FormState = FormState.SendCode
  let email = browser ? localStorage.getItem('email') || '' : ''
  let code = ''
  let error = ''
  $: {
    console.log({ email, code, formState, error })
  }
  $: {
    if (formState === FormState.Login && code?.length === 6) {
      logIn()
    }
  }

  const logIn = () => {
    if (code?.length !== 6) {
      error = 'Please enter a valid 6 digit code'
      return
    }
    error = ''
    formState = FormState.LoggingIn
    authViaOtp(email, code)
      .then(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
        formState = FormState.LoggingIn
      })
      .catch((e) => {
        error = e.message
        console.error(e)
      })
  }

  const startOver = () => {
    formState = FormState.SendCode
    code = ''
    error = ''
  }

  const haveCode = () => {
    formState = FormState.Login
  }

  const sendCode = () => {
    console.log(`send code`)
    if (email.trim().length === 0) {
      error = 'Please enter a valid email address'
      return
    }
    localStorage.setItem('email', email)
    error = ''
    formState = FormState.Login
    sendOtp(email, document.location.origin).catch((e) => {
      error = e.message
      console.error(e)
    })
  }

  const handleKeydown: KeyboardEventHandler<HTMLInputElement> = (event) => {
    if (event.key === 'Enter') {
      sendCode()
    }
  }

  onMount(async () => {
    const urlParams = new URLSearchParams(window.location.search)
    const otp = urlParams.get('otp')
    if (!otp) return

    try {
      const decoded = atob(otp)
      const payload = JSON.parse(decoded)
      const { email, code } = payload

      if (!email || !code) {
        throw new Error(`Error parsing login code`)
      }
      await authViaOtp(email, code)
    } catch (error) {
      flash.set({
        type: 'error',
        message: `Invalid login token. Try logging in again.`,
      })
      console.error('Error decoding OTP:', error)
    } finally {
      console.log(`***${window.location.href}`)
      goto(`/`)
    }
  })
</script>

<UserLoggedOut>
  <div class="m-4">
    {#if error}
      <div class="bg-error text-neutral p-2 mb-4 rounded">{error}</div>
    {/if}
    {#if formState === FormState.LoggingIn}
      <div class="mb-4">Logging in...</div>
    {/if}
    {#if formState === FormState.Login}
      <div class="mb-4">
        We sent you an email containing a 6-digit code. Please check your email
        and input the code here.
      </div>
      <label class="input input-bordered flex items-center gap-2">
        <Fa icon={faRightToBracket} />
        <input
          type="text"
          maxlength="6"
          bind:value={code}
          class="grow"
          placeholder="Verification code from email"
        />
      </label>
      <div class="grid justify-items-stretch grid-cols-2">
        <button
          class="btn btn-neutral btm-sm mt-4 justify-self-start"
          on:click={startOver}>Start Over</button
        >
        <button
          class="btn btn-primary btm-sm mt-4 justify-self-end"
          on:click={logIn}>Log In</button
        >
      </div>
    {/if}
    {#if formState === FormState.SendCode}
      <label class="input input-bordered flex items-center gap-2">
        <Fa icon={faEnvelope} />
        <input
          type="email"
          bind:value={email}
          on:keydown={handleKeydown}
          class="grow"
          placeholder="Log in using your email address"
        />
      </label>
      <div class="grid justify-items-stretch grid-cols-2">
        <button
          class="btn btn-neutral btm-sm mt-4 justify-self-start"
          on:click={haveCode}>I have a code</button
        >
        <button
          class="btn btn-primary btm-sm mt-4 justify-self-end"
          on:click={sendCode}>Log in</button
        >
      </div>
    {/if}
  </div>
</UserLoggedOut>
<UserLoggedIn>
  <slot />
</UserLoggedIn>
