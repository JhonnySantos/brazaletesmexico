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
      solicitarSuscripcion()
      .then((res) => {
        console.log(res);
        actualizarSuscripcion();
      })
      .catch((err) => {
        console.log(err);
      });
    }
  };

  const solicitarSuscripcion = async () => {
    const data = {email: inputEmail};
    const response = await fetch(`${$apiHost}/suscribirse`, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      }
    });
    if (response.ok) {
      return await response.text();
    } else {
      throw response.statusText;
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