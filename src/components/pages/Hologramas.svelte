<script>
  import { currentSection, apiHost } from "../../stores/stores";

  import GridTiposBrazaletes from "../ui/GridTiposBrazaletes.svelte";
  import GridBrazaletes from "../ui/GridBrazaletes.svelte";
  import Template from "../ui/Template.svelte";
  import Loading from "../ui/Loading.svelte";

  $currentSection = 4;

  let promise;
  export let tipo = null;
  export let location = "";

  const obtenerHologramas = async () => {
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
    promise = obtenerHologramas();
  }
</script>

<svelte:head>
  <title>Brazaletes México | Brazaletes Holográficos</title>
</svelte:head>

<Template>
  {#await promise}
    <Loading />
  {:then data}
    <h1 class="text-center my-5">Brazaletes Holográficos</h1>
    <div class="container my-5">
      {#if tipo !== null}
        <GridBrazaletes brazaletes={data} />
      {:else}
        <GridTiposBrazaletes tipos={data} />
      {/if}
    </div>
  {/await}
</Template>