<script>
  import { meta } from '$src/meta'

  export let hideLogoText = false
  export let logoWidth = 'w-24'
</script>

<div class="flex items-center justify-center gap-4">
  <enhanced:img
    src="$src/assets/favicon.png"
    class="mix-blend-lighten {logoWidth}"
    alt="{meta.name} Logo"
  />
  <h1 class="text-white font-bold text-2xl {hideLogoText && 'sr-only'}">
    {meta.name}
  </h1>
</div>
