<script lang="ts">
  import { flash } from '$src/stores'
  import Fa from 'svelte-fa'
  import { faCircleXmark, faClose } from '@fortawesome/free-solid-svg-icons'

  const closeFlash = () => {
    flash.set(null)
  }
</script>

{#if $flash}
  <div class="m-4">
    <div
      class="alert relative {$flash.type === 'success'
        ? `alert-success`
        : `alert-error`}"
    >
      {$flash.message}
      <div
        class="absolute right-3 top-3"
        on:click={closeFlash}
        aria-label="Close"
        tabindex="0"
        role="button"
        on:keypress={(e) => {
          if (e.key === 'Escape') {
            // closeFlash()
          }
        }}
      >
        <Fa icon={faCircleXmark} />
      </div>
    </div>
  </div>
{/if}
