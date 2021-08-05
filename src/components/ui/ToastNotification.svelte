<script>
  import { onMount } from "svelte";
  export let notificacion = {};

  onMount(() => {
    const toastElement = document.querySelector(".toast");
    const bsToast = new bootstrap.Toast(toastElement, {});

    toastElement.addEventListener("hidden.bs.toast", () =>
      toastElement.parentElement.parentElement.remove()
    );
    bsToast.show();
  });
</script>

<div class="fixed-top">
  <div class="toast-container position-absolute end-0 p-3 {notificacion.margen ? "mt-9" : ""}">
    <div
      class="toast bg-{notificacion.colorFondo} border-{notificacion.colorBorde} border-2 d-flex align-items-center p-3"
      role="alert"
      aria-live="assertive"
      aria-atomic="true"
    >
      <div class="text-center text-{notificacion.colorTexto} mx-2 mb-0">
        <i class="fas {notificacion.icono} fa-3x" />
      </div>
      <div class="toast-body mb-0 fw-bold text-{notificacion.colorTexto}">
        {notificacion.mensaje}
      </div>
    </div>
  </div>
</div>

<style>
  .mt-9 {
    margin-top: 9rem !important;
  }
</style>
