<script>
  import { fade } from "svelte/transition";
  import { apiHost } from "../../stores/stores";
  import ToastNotification from "./ToastNotification.svelte";

  let inputEmail = "";
  let isSubscribed = sessionStorage.getItem("isSubscribed");
  let notificacionData = {
    margen: true,
    show: false,
  };

  const handleSuscribe = async () => {
    const formulario = document.querySelector("form");

    if (formulario.checkValidity()) {
      const response = await fetch(`${$apiHost}/subscribe`, {
        method: "POST",
        body: JSON.stringify({ email: inputEmail }),
        headers: {
          "Content-Type": "application/json"
        }
      });

      if (response.ok) {
        const data = await response.json();
        if (data.done) {
          isSubscribed = true;
          document.querySelector("form").reset();
          sessionStorage.setItem("isSubscribed", true);
          document.querySelector("#subscribe-form").reset();
          notificacionData = {
            show: true,
            margen: true,
            icono: "fa-check",
            colorFondo: "success",
            colorBorde: "success",
            colorTexto: "white",
            mensaje: "¡Gracias por suscribirte!",
          };
        } else {
          isSubscribed = false;
          sessionStorage.setItem("isSubscribed", false);
          notificacionData = {
            show: true,
            margen: true,
            icono: "fa-check",
            colorFondo: "success",
            colorBorde: "success",
            colorTexto: "white",
            mensaje: "Ya te encuentras suscrito previamente.",
          };
        }
      } else {
        isSubscribed = false;
        sessionStorage.setItem("isSubscribed", false);
        notificacionData = {
            show: true,
            margen: false,
            icono: "fa-times",
            colorFondo: "danger",
            colorBorde: "danger",
            colorTexto: "white",
            mensaje: "No es posible suscribirte por el momento.",
          };
      }
    }
  };

  $: if ( notificacionData ) {
    setTimeout(() => {
      notificacionData.show = false;
    }, 4500);
  }

</script>

{#if isSubscribed == "true"}
  <button class="btn btn-sm btn-success px-3" type="button" disabled transition:fade>
    <i class="fas fa-check-circle fa-lg" /> suscrito
  </button>
{:else}
  <form on:submit|preventDefault={handleSuscribe}>
    <div class="input-group input-group-sm">
      <input
        aria-describedby="button-subscribe"
        aria-label="Subscribe"
        bind:value={inputEmail}
        class="form-control border-secondary"
        name="email"
        placeholder="correo electrónico"
        required
        type="email"
      />
      <button class="btn btn-secondary" type="submit">Suscribirse</button>
    </div>
  </form>
{/if}

{#if notificacionData.show}
  <ToastNotification notificacion={notificacionData} />
{/if}