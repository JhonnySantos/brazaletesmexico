<script>
  import { currentSection, apiHost } from "../../stores/stores";

  import GridTiposBrazaletes from "../ui/GridTiposBrazaletes.svelte";
  import GridBrazaletes from "../ui/GridBrazaletes.svelte";
  import Template from "../ui/Template.svelte";
  import Loading from "../ui/Loading.svelte";

  $currentSection = 2;

  let promise;
  export let tipo = null;
  export let location = "";

  const obtenerRFID = async () => {
    if (tipo !== null) {
      const response = await fetch(`${$apiHost}/brazaletes/all/${tipo}`);
      return await response.json();
    } else {
      const response = await fetch(`${$apiHost}/tipos/all/${$currentSection}`);
      return await response.json();
    }
  };

  $: if (location.pathname || tipo) {
    window.scrollTo(0, 0);
    promise = obtenerRFID();
  }
</script>

<svelte:head>
  <title>Brazaletes México | Soluciones RFID</title>
</svelte:head>

<Template>
  {#await promise}
    <Loading />
  {:then data}
    <h1 class="text-center my-5">Soluciones RFID</h1>

    <div class="container my-5">
      {#if tipo !== null}
        <GridBrazaletes brazaletes={data} />
      {:else}
        <GridTiposBrazaletes tipos={data} {location} />
      {/if}
    </div>
  {/await}
</Template>