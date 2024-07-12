<script lang="ts">
  export let price: string
  export let url: string
</script>

<a
  href={url}
  class="mt-auto mb-4 block rounded-md py-2 px-3 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 bg-white/10 text-white hover:bg-white/20 focus-visible:outline-white"
>
  <span class="text-xl font-bold tracking-tight text-white">
    ${price}
  </span>
</a>
