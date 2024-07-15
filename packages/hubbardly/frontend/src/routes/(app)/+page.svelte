<script lang="ts">
  import UserLoggedIn from '$src/components/UserLoggedIn.svelte'
  import UserLoggedOut from '$src/components/UserLoggedOut.svelte'
  import LoggedOutLander from './LoggedOutLander.svelte'
  import Empty from './Empty.svx'
</script>

<UserLoggedIn>
  <article class="prose lg:prose-xl m-4">
    <Empty />
  </article>
</UserLoggedIn>
<UserLoggedOut>
  <LoggedOutLander />
</UserLoggedOut>
