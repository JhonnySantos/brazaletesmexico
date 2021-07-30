<script>
  import { fade } from 'svelte/transition';
  import { apiHost } from '../../stores/stores';
  import ToastNotification from './ToastNotification.svelte';

  let inputEmail = "";
  let isSubscribed = sessionStorage.getItem("isSubscribed");

  let datosNotificacion = {
    icono : "fa-check-circle",
    margen : true,
    mensaje : "Gracias por suscribirte",
    colorTexto : "white",
    colorFondo : "success",
    colorBorde : "success",
  };

  const actualizarSuscripcion = () => {
    sessionStorage.setItem("isSubscribed", true);
    isSubscribed = sessionStorage.getItem("isSubscribed");
  };

  const suscribirse = () => {
    const formulario = document.querySelector("form");
    if (formulario.checkValidity()) {
      actualizarSuscripcion();
    }
  };

  const solicitarSuscripcion = async () => {
    try {
      const response = await fetch(`${$apiHost}/suscribirse/${inputEmail}`, {
        method: "POST",
        body: new FormData( document.querySelector("form")[0] ),
      });

      if (response.ok) {
        return true;
      } else {
        console.warn( `Error: ${response.statusText}` );
        return false;
      }
    } catch (error) {
      console.warn( `Error: ${error}` );
    }
  };

  $: if ( isSubscribed === "true" ) {
    isSubscribed = sessionStorage.getItem("isSubscribed");
  }
</script>

{#if isSubscribed === "true"}
  <button class="btn btn-sm btn-success px-3" type="button" disabled transition:fade>
    <i class="fas fa-check-circle fa-lg" /> suscrito
  </button>
  <ToastNotification notificacion={datosNotificacion} />
{:else}
  <form on:submit|preventDefault={suscribirse}>
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