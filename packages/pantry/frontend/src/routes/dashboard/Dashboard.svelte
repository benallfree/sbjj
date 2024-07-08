<script lang="ts">
  import AuthStateGuard from '$components/helpers/AuthStateGuard.svelte'
</script>

<svelte:head>
  <title>Dashboard - PocketHost</title>
</svelte:head>

<AuthStateGuard>
  <div class="flex items-center justify-between mb-6">
    <h2 class="text-4xl text-base-content font-bold capitalize">Dashboard</h2>

    Start here
  </div>

</AuthStateGuard>
