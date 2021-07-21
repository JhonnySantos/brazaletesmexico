<script>
  import { navigate } from "svelte-routing";
  import { apiHost } from "../../stores/stores";
  import ListBusqueda from "./ListBusqueda.svelte";

  let showListResults = false;
  export let inputSearch = "";
  export let resultadosBusqueda = [];

  const handleKeyupSearch = async ( event ) => {
    
      if (inputSearch.length > 3) {
        if ( (event.keyCode >= 65 && event.keyCode <= 90) || event.keyCode == 192 ) {
          resultadosBusqueda = await obtenerBusqueda();
          showListResults = true;
        }
      } else {
        showListResults = false;
        resultadosBusqueda = [];
      }
  };

  const handleKeypressSearch = ( event ) => {
    if ( !( event.keyCode == 192 || (event.keyCode >= 65 && event.keyCode <= 90) || (event.keyCode >= 37 && event.keyCode <= 40) || event.keyCode == 8 || event.keyCode == 13 || event.keyCode == 16 || event.keyCode == 46 ) ) {
      event.preventDefault();
    }
  }

  const obtenerBusqueda = async () => {
    let response = await fetch(`${$apiHost}/busqueda/${inputSearch}`);

    if (response.ok) {
      return await response.json();
    } else {
      console.warn( `Error: ${response.statusText}` );
      return [];
    }
  };

  const navigateToResultadosBusqueda = () => {
    navigate(`/search/${inputSearch}`, { replace: false });
    showListResults = false;
    inputSearch = "";
  };
</script>

<form class="position-relative" on:submit|preventDefault={resultadosBusqueda}>
  <div class="input-group input-group-sm">
    <input
      type="text"
      class="form-control border-secondary"
      placeholder="Búsqueda"
      aria-label="Búsqueda"
      aria-describedby="button-addon-search"
      bind:value={inputSearch}
      on:keyup={ handleKeyupSearch }
      on:keydown={ handleKeypressSearch }
    />
    <button class="btn btn-secondary" type="submit" id="button-addon-search" on:click={ inputSearch.length > 3 && navigateToResultadosBusqueda }>
      Buscar
    </button>
  </div>

  {#if showListResults}
    <div class="position-absolute top-100 start-0 w-100 shadow bring-to-front">
      <ListBusqueda {resultadosBusqueda} on:showMore={navigateToResultadosBusqueda} />
    </div>
  {/if}
</form>

<style>
  .bring-to-front {
    z-index: 1081 !important;
  }
</style>