<script lang="ts">
  import {
    faCircleCheck,
    faCircleInfo,
    faCircleXmark,
    faTriangleExclamation,
    type IconDefinition,
  } from '@fortawesome/free-solid-svg-icons'
  import { onMount } from 'svelte'
  import Fa from 'svelte-fa'
  import { slide } from 'svelte/transition'

  // https://daisyui.com/components/alert/
  type AlertTypes = 'info' | 'success' | 'warning' | 'error'

  export let type: AlertTypes = 'info'
  export let icon = true
  export let additionalClasses: string = ''
  export let remember = ''
  export let dismissible = !!remember

  let isVisible = false

  const icons: { [key in AlertTypes]: IconDefinition } = {
    info: faCircleInfo,
    success: faCircleCheck,
    warning: faTriangleExclamation,
    error: faCircleXmark,
  } as const

  const iconFile = icons[type]

  // Set up the default alert classes and icon
  const alertTypeClassLookup = {
    info: 'alert-info',
    success: 'alert-success',
    warning: 'alert-warning',
    error: 'alert-error',
  } as const
  const alertTypeClass = alertTypeClassLookup[type]

  onMount(() => {
    isVisible = true
    if (!remember) return
    const storedValue = localStorage.getItem(remember)
    if (storedValue === 'hidden') {
      isVisible = false
    }
  })

  function dismiss() {
    isVisible = false
    if (remember) {
      localStorage.setItem(remember, 'hidden')
    }
  }
</script>

{#if isVisible}
  <div class="m-4">
    <div
      class="alert {alertTypeClass} {additionalClasses} relative"
      transition:slide
      role="alert"
    >
      {#if dismissible}
        <button
          class="absolute top-0 right-0 m-1 btn btn-circle btn-sm btn-outline"
          on:click={dismiss}>X</button
        >
      {/if}

      <div class={dismissible ? 'mt-6' : 'mt-0'}>
        {#if icon}<Fa
            icon={iconFile}
            class="h-6 w-6 shrink-0 stroke-current"
          />{/if}<span><slot /></span>
      </div>
    </div>
  </div>
{/if}
