<script lang="ts">
  import {
    faArrowRight,
    type IconDefinition,
  } from '@fortawesome/free-solid-svg-icons'
  import FeatureIcon from './FeatureIcon.svelte'
  import PrimaryButton from './PrimaryButton.svelte'

  export let icon: IconDefinition
  export let title: string
  export let tagline: string
  export let content: string
  export let linkText: string
  export let linkURL: string
</script>

<div class="px-[75px] pt-[75px] pb-[75px]">
  <div class="mb-12">
    <FeatureIcon {icon} />
  </div>

  <h3 class="text-green-400 uppercase font-bold mb-2">{title}</h3>

  <p class="text-white font-bold text-3xl mb-4">{tagline}</p>

  <p class="mb-12">{content}</p>

  <PrimaryButton text={linkText} url={linkURL} icon={faArrowRight} />
</div>
