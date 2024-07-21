<script lang="ts">
  import CellOverlay from '$components/Hub/CellOverlay.svelte'
  import type { EntityStackItem } from '$store/EntityStackItem'
  import type { MetaContext } from '$store/MetaContext'
  import { afterUpdate, getContext, onMount } from 'svelte'
  import Sprites from './sprites.svg?component'

  // Type declaration for props
  export let item: EntityStackItem
  console.log({ item })

  const { state: metaState } = getContext<MetaContext>('meta')
  $: ({
    currentSeason: { baseSlug },
  } = $metaState)

  $: visibleIds = [baseSlug, item.seedSlug, ...item.cornaments]
  $: console.log({ visibleIds })

  // Reference to the img element
  let objectRef: HTMLDivElement

  // Function to update visibility
  function updateVisibility() {
    if (!objectRef) return

    const svg = objectRef.querySelector('svg')
    if (!svg) return

    svg.style.width = '100%'
    svg.style.maxWidth = '100%'
    svg.style.height = '100%'
    svg.style.maxHeight = '100%'

    const allGroups = svg.querySelectorAll('g')
    allGroups[0]?.getRootNode
    const topLevelGElements = Array.from(svg.children).filter(
      (child) => child.tagName === 'g' && child.id,
    ) as SVGAElement[]

    topLevelGElements.forEach((group) => {
      console.log({ group })
      if (visibleIds.includes(group.id)) {
        group.style.display = 'block'
        console.log(`block`, visibleIds)
      } else {
        group.style.display = 'none'
      }
    })
    objectRef.classList.remove('hidden')
  }

  // Update visibility when the component is mounted or the visibleIds change
  onMount(() => {
    objectRef.addEventListener('load', () => {
      updateVisibility()
    })
  })

  afterUpdate(() => {
    updateVisibility()
  })
</script>

<!-- Use the imported SVG as the source of an <img> tag -->
<div bind:this={objectRef} class="hidden">
  <CellOverlay>
    <Sprites />
  </CellOverlay>
</div>
