<script>
  let inputEmail = "";
  let isSubscribed = sessionStorage.getItem("isSubscribed");

  const updateSubscription = () => {
    sessionStorage.setItem("isSubscribed", true);
    isSubscribed = sessionStorage.getItem("isSubscribed");
  };

  const handleSubmitForm = () => {
    const formulario = document.querySelector("form");
    if (formulario.checkValidity()) {
      updateSubscription();
    }
  };

  $: if ( isSubscribed === "true" ) {
    isSubscribed = sessionStorage.getItem("isSubscribed");
  }
</script>

{#if isSubscribed === "true"}
  <button class="btn btn-sm btn-success px-3" type="button" disabled>
    <i class="fas fa-check-circle fa-lg" /> suscrito
  </button>
{:else}
  <form on:submit|preventDefault={handleSubmitForm}>
    <div class="input-group input-group-sm">
      <input
        aria-describedby="button-subscribe"
        aria-label="Subscribe"
        bind:value={inputEmail}
        class="form-control border-secondary"
        placeholder="correo electrónico"
        required
        type="email"
      />
      <button class="btn btn-secondary" type="submit">Suscribirse</button>
    </div>
  </form>
{/if}