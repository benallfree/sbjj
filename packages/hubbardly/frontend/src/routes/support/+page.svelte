<script lang="ts">
  import FaqSection from './FAQSection.svelte'
  export let data
  const { meta } = data
</script>

<div class="container mx-auto py-8 px-4">
  <h1 class="text-4xl mb-8 font-bold">Support</h1>

  All support is handled through our Discord server. If you need private
  support, you can DM any of the admins.
  <div class="mt-10 pb-10">
    <a class="btn btn-primary" href={meta.support.discord.url} target="_blank"
      >Discord server</a
    >
  </div>
  <FaqSection />
</div>
