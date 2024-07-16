<script>
  import { meta } from '$src/meta'

  export let hideLogoText = false
  export let logoWidth = 'w-24'
</script>

<a class="flex items-center justify-center" href="/">
  <enhanced:img
    src="$src/assets/favicon.png"
    class="mix-blend-lighten {logoWidth}"
    alt="{meta.name} Logo"
    style="width: 24px"
  />
  <h1
    class="text-white font-bold text-2xl pl-0 ml-0 {hideLogoText && 'sr-only'}"
  >
    {meta.name}
  </h1>
</a>
