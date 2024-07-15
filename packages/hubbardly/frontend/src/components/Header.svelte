<script>
  import Flash from '$src/components/Flash.svelte'
  import Navbar from './Navbar.svelte'
</script>

<div>
  <Navbar />
  <Flash />

  <slot />
</div>
