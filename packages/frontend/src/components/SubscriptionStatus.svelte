<script lang="ts">
  import { meta } from '$meta'
  import { userSubscriptionType } from '$store/user'

  export let handleClick: any = () => {}

  type PlanSlug = keyof typeof meta.plans
  let type: PlanSlug
  $: type = $userSubscriptionType as PlanSlug
  $: plan = meta.plans[type]
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
