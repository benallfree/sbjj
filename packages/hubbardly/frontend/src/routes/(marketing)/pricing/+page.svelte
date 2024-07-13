<script lang="ts">
  import PricingCard from '$components/PricingCard.svelte'
  import Fa from 'svelte-fa'
  import { faMartiniGlass } from '@fortawesome/free-solid-svg-icons'
  import { meta, PRELAUNCH_NAME, type PlanSlug } from '$src/meta'

  export let data

  const {
    prelaunch,
    pages: {
      pricing: { title, tagline, content },
    },
    plans,
  } = meta
</script>

<main>
  <div class="mx-auto max-w-7xl p-2 md:px-6 lg:px-8">
    <div class="mx-auto max-w-4xl text-center">
      <h1 class="text-base font-semibold leading-7 text-primary">{title}</h1>
      <p class="mt-2 text-4xl font-bold tracking-tight text-white sm:text-5xl">
        {tagline}
      </p>
    </div>

    {#if prelaunch}
      <div class="flex justify-center">
        <div role="alert" class="alert alert-warning m-8 max-w-2xl">
          <Fa icon={faMartiniGlass} />
          <span
            >{meta.name} is currently in {PRELAUNCH_NAME} mode.
            <b>We are building features as funds are raised.</b> All subscription
            plans will remain locked until the official launch. In the meantime,
            you can join the waitlist by creating an account, or support the project
            by purchasing a Founder tier. As each tier sells out, new features will
            be unlocked.</span
          >
        </div>
      </div>
    {/if}

    <p
      class="mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-gray-300"
    ></p>

    <div
      class="mx-auto mt-10 grid max-w-md grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3"
    >
      {#each Object.entries(plans) as [slug, plan]}
        <PricingCard plan={slug} qtySold={data.soldCounts[slug] || 0} />
      {/each}
    </div>
  </div>
</main>
