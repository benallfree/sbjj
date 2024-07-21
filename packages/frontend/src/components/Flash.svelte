<script lang="ts">
  import { flash } from '$store/flash'
  import { faCircleXmark } from '@fortawesome/free-solid-svg-icons'
  import Fa from 'svelte-fa'

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
