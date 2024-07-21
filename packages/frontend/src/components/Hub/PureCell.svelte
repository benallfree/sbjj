<script lang="ts">
  import { createEventDispatcher } from 'svelte'
  const dispatch = createEventDispatcher()

  export let selected = false
</script>

<button
  class="cell {selected ? 'selected' : ''}"
  on:click={() => dispatch('click')}
>
  <slot />
</button>

<style lang="scss">
  .cell {
    @apply border border-neutral aspect-square relative;

    &.selected {
      @apply border-primary;
    }
  }
</style>
