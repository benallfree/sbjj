<script lang="ts">
  import { meta, type Meta, type PlanSlug } from '$src/meta'
  import { userSubscriptionType } from '$src/stores'

  export let handleClick: any = () => {}

  const type = $userSubscriptionType as PlanSlug
  const plan = meta.plans[type]
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
    </div>
  </div>
</div>
