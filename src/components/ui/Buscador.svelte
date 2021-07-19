<script>
  import { navigate } from "svelte-routing";
  import ListBusqueda from "./ListBusqueda.svelte";

  let inputSearch = "";
  let showListResults = false;
  export let ResultadosBusqueda = [];

  const handleKeyupSearch = async () => {
    
    if (inputSearch.length > 3) {
      ResultadosBusqueda = await obtenerBusqueda();
      showListResults = true;
    }
    else {
      showListResults = false;
      ResultadosBusqueda = [];
    }
  };

  const obtenerBusqueda = async () => {
    // let response = await fetch(`${$apiHost}/search/all/${inputSearch}`);

    // if (response.ok) {
    //     return await response.json();
    // } else {
    //     throw new Error("Se ha producido un error interno.");
    // }
  };

  const navigateToResultadosBusqueda = () => {
    navigate(`/search/${inputSearch}`, { replace: false });
  };
</script>

<div class="position-relative">
  <div class="input-group input-group-sm">
    <input
      type="text"
      class="form-control border-secondary"
      placeholder="Búsqueda"
      aria-label="Búsqueda"
      aria-describedby="button-addon-search"
      bind:value={inputSearch}
      on:keyup={ handleKeyupSearch }
    />
    <button class="btn btn-secondary" type="button" id="button-addon-search" on:click={ inputSearch.length > 3 && navigateToResultadosBusqueda }>
      Buscar
    </button>
  </div>

  {#if showListResults}
    <div class="position-absolute top-100 start-0 w-100 shadow bring-to-front">
      <ListBusqueda {ResultadosBusqueda} />
    </div>
  {/if}
</div>

<style>
  .bring-to-front {
    z-index: 1081 !important;
  }
</style>