<script lang="ts">
  import { meta, type Meta } from '$src/meta'
  import { userSubscriptionType } from '$src/stores'

  export let handleClick: any = () => {}

  const type = $userSubscriptionType as keyof Meta['plans']['tiers']
  const plan = meta.plans.tiers[type]
</script>

<div class=" flex flex-col gap-4 mb-4">
  <div class="card bg-accent shadow-xl rounded-lg overflow-hidden">
    <div class="card-body backdrop-blur-md text-white">
      <h2 class="card-title">
        {plan.name}
      </h2>

      <p>
        {plan.summary}
      </p>

      {#if plan.upgradable}
        <p>You can upgrade to a better plan at any time.</p>
      {/if}
    </div>
  </div>
</div>
