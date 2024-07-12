<script lang="ts">
  import PrimaryButton from './PrimaryButton.svelte'

  export let price: string
  export let url: string
</script>

<PrimaryButton {url}>
  <span class="text-xl font-bold tracking-tight text-white">
    ${price}
  </span>
</PrimaryButton>
