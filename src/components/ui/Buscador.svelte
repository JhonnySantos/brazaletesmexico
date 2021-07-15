<script>
  import { navigate } from "svelte-routing";

  let inputSearch = "";

  const handleKeydownSearch = () => {
    console.log( inputSearch )
    inputSearch.length > 3 && console.log( "Show results" );
  };

  const navigateToSearchResults = () => {
    navigate("/search", { replace: false });
  };
</script>

<div class="input-group input-group-sm">
  <input
    type="text"
    class="form-control border-secondary"
    placeholder="Búsqueda"
    aria-label="Búsqueda"
    aria-describedby="button-addon-search"
    bind:value={inputSearch}
    on:change={ handleKeydownSearch }
  />
  <button class="btn btn-secondary" type="button" id="button-addon-search" on:click={ navigateToSearchResults }>
    Buscar
  </button>
</div>