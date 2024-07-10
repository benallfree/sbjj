<script lang="ts">
  import type { Meta } from '$src/meta'
  import FAQItem from './FAQItem.svelte'

  export let faqs: Meta['faqs']
</script>

<div class="mx-auto max-w-7xl divide-y divide-gray-500">
  <h2 class="text-2xl font-bold leading-10 tracking-tight">
    Frequently asked questions
  </h2>

  <dl class="mt-10 space-y-8 divide-y divide-gray-500">
    {#each faqs as { question, answer }}
      <FAQItem {question}>{@html answer}</FAQItem>
    {/each}
  </dl>
</div>
