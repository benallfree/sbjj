<script lang="ts">
  import type { Col, Row } from '$store/RowCol_CellCoordKey'
  import CellOverlay from './CellOverlay.svelte'

  export let r: Row
  export let c: Col
</script>

<CellOverlay>
  <div class="coord">
    {r}x{c}
  </div>
</CellOverlay>

<style lang="scss">
  .coord {
    @apply text-neutral-content opacity-30 text-xs text-right w-full pr-1;
  }
</style>
