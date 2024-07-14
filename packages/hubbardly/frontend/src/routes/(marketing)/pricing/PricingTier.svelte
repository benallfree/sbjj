<script lang="ts">
  import type { Meta } from '$src/meta'

  export let meta: Meta
  export let disabled = false
  export let title
  export let subscribeText
  export let subscribeLink
</script>

<div class="lg:w-1/3">
  <div
    class="flex flex-row justify-between gap-x-2 p-3 border-solid border-2 bg-neutral border-neutral rounded-t-lg border-b-0"
  >
    <div class="whitespace-nowrap"><slot name="title">{title}</slot></div>
  </div>
  <div class="p-3 text-sm">
    <slot />
  </div>
  <div class="p-3">
    <a
      href={disabled ? undefined : subscribeLink}
      class={`btn ${disabled ? `btn-neutral bg-neutral-content text-neutral` : `btn-primary`} `}
      >{subscribeText}
      {#if disabled}(Locked for {meta.prelaunchLabel}){/if}</a
    >
  </div>
</div>
