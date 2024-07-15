<script>
  import AuthGuard from '$components/AuthGuard.svelte'
</script>

<dialog id="auth_modal" class="modal">
  <div class="modal-box">
    <h3 class="text-lg font-bold">Login</h3>
    <AuthGuard />
    <div class="modal-action">
      <form method="dialog">
        <button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
          >✕</button
        >
      </form>
    </div>
  </div>
</dialog>
