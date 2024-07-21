<script>
  import Flash from '$src/components/Flash.svelte'
  import Navbar from './Navbar.svelte'

  export let hideLogoText = false
</script>

<div>
  <Navbar {hideLogoText}><slot name="navbar" /></Navbar>
  <Flash />

  <slot />
</div>
