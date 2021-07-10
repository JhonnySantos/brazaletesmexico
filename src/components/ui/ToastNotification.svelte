<script>
  import { onMount } from "svelte";

  onMount(() => {
    var toastElList = [].slice.call(document.querySelectorAll(".toast"));
    var toastList = toastElList.map(function (toastEl) {
      return new bootstrap.Toast(toastEl, {});
    });

    toastList.forEach((popup) => {
      popup.show();
    });
  });
</script>

<div class="fixed-top">

<div class="toast-container position-absolute end-0 mt-10 p-3">

  <div
    class="toast border-primary border-2 d-flex align-items-center p-3"
    role="alert"
    aria-live="assertive"
    aria-atomic="true"
  >
    <p class="text-center mx-2 mb-0">
      <i class="fas fa-info-circle fa-4x"></i>
    </p>
    <div class="toast-body mb-0 fw-bold">
      <p>Hello, world! This is a toast message.</p>
    </div>
  </div>

</div>

</div>

<style>
  .top-20 {
    top: 20% !important;
  }

  .mt-10 {
    margin-top: 10rem !important;
  }
</style>
