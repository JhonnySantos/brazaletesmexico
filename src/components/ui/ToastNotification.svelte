<script>
  import { onMount } from "svelte";
<<<<<<< HEAD

  onMount(() => {
    var toastElList = [].slice.call(document.querySelectorAll(".toast"));
    var toastList = toastElList.map(function (toastEl) {
      return new bootstrap.Toast(toastEl, {});
    });

    toastList.forEach((popup) => {
      popup.show();
    });
=======
  export let notificacion = {};

  onMount(() => {
    const toastElement = document.querySelector(".toast");
    const bsToast = new bootstrap.Toast(toastElement, {});

    toastElement.addEventListener("hidden.bs.toast", () =>
      toastElement.parentElement.parentElement.remove()
    );
    bsToast.show();
>>>>>>> ba9bbf3ffde394e81d16a6973057dd3ad0b44aae
  });
</script>

<div class="fixed-top">
<<<<<<< HEAD

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
=======
  <div class="toast-container position-absolute end-0 p-3 mt-9">
    <div
      class="toast border-{notificacion.colorFondo} border-2 d-flex align-items-center p-3"
      role="alert"
      aria-live="assertive"
      aria-atomic="true"
    >
      <p class="text-center text-{notificacion.colorTexto} mx-2 mb-0">
        <i class="fas {notificacion.icono} fa-4x" />
      </p>
      <div class="toast-body mb-0 fw-bold text-{notificacion.colorTexto}">
        <p>{notificacion.mensaje}</p>
      </div>
    </div>
  </div>
</div>

<style>
  .mt-9 {
    margin-top: 9rem !important;
>>>>>>> ba9bbf3ffde394e81d16a6973057dd3ad0b44aae
  }
</style>
