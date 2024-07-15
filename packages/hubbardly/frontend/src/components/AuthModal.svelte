<script>
  import AuthGuard from '$components/AuthGuard.svelte'
</script>

<dialog id="my_modal_1" class="modal">
  <div class="modal-box">
    <h3 class="text-lg font-bold">Login</h3>
    <AuthGuard />
    <div class="modal-action">
      <form method="dialog">
        <!-- if there is a button in form, it will close the modal -->
        <button class="btn btm-sx">Cancel</button>
      </form>
    </div>
  </div>
</dialog>
