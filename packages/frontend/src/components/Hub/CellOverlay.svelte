<script lang="ts">
  export let padding = 0
</script>

<div class="cell-overlay padded" style="--padding: {padding}px">
  <slot />
</div>

<style lang="scss">
  .cell-overlay {
    @apply absolute top-0 left-0 w-full h-full;
    &.padded {
      @apply absolute;
      width: auto;
      height: auto;
      top: var(--padding);
      left: var(--padding);
      right: var(--padding);
      bottom: var(--padding);
    }
  }
</style>
