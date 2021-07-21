<script>
  import { Link } from "svelte-routing";
  export let resultadosBusqueda = [];
  export let inputSearch = "";
</script>

<div class="list-group list-group-flush">
  {#if resultadosBusqueda.length <= 0}

    <button class="list-group-item list-group-item-action link-resultado-buscador disabled" tabindex="-1" aria-disabled="true">
      <h6 class="mb-0 py-2">
        No se encontraron resultados
      </h6>
    </button>

  {:else if resultadosBusqueda.length > 0 && resultadosBusqueda.length <= 5}

    {#each resultadosBusqueda.slice(0,5) as {tipo, img, slug, titulo, descripcion}, i}
      {#if tipo == "brazalete"}
        <Link class="list-group-item list-group-item-action link-resultado-buscador" to={slug}>
          {#if img}
              <div class="d-flex align-items-center">
                <div class="flex-shrink-0">
                  <img
                    src={img}
                    alt={img}
                    class="bg-dark rounded img-resultado-buscador"
                  />
                </div>
                <div class="flex-grow-1 ms-3">
                  <h6 class="mb-0">{titulo}</h6>
                  <small class="text-muted">{  descripcion.length <= 50 ? descripcion : descripcion.substring(0, 50) + "..." }</small>
                </div>
              </div>
          {:else}
              <h6 class="mb-0">{titulo}</h6>
              <small class="text-muted">{  descripcion.length <= 50 ? descripcion : descripcion.substring(0, 50) + "..." }</small>
          {/if}
        </Link>
      {:else}
        <Link class="list-group-item list-group-item-action link-resultado-buscador" to={slug}>
          <h6 class="mb-0 py-2">{titulo}</h6>
        </Link>
      {/if}
    {/each}

  {:else}
 
    {#each resultadosBusqueda.slice(0,5) as {tipo, img, slug, titulo, descripcion}, i}
      {#if tipo == "brazalete"}
        <Link class="list-group-item list-group-item-action link-resultado-buscador" to={slug}>
          {#if img}
              <div class="d-flex align-items-center">
                <div class="flex-shrink-0">
                  <img
                    src={img}
                    alt={img}
                    class="bg-dark rounded img-resultado-buscador"
                  />
                </div>
                <div class="flex-grow-1 ms-3">
                  <h6 class="mb-0">{titulo}</h6>
                  <small class="text-muted">{  descripcion.length <= 50 ? descripcion : descripcion.substring(0, 50) + "..." }</small>
                </div>
              </div>
          {:else}
              <h6 class="mb-0">{titulo}</h6>
              <small class="text-muted">{  descripcion.length <= 50 ? descripcion : descripcion.substring(0, 50) + "..." }</small>
          {/if}
        </Link>
      {:else}
        <Link class="list-group-item list-group-item-action link-resultado-buscador" to={slug}>
          <h6 class="mb-0 py-2">{titulo}</h6>
        </Link>
      {/if}
    {/each}
    <Link class="list-group-item list-group-item-action link-resultado-buscador" to={ `/search/${inputSearch}` }>
      <h6 class="mb-0 py-2">
        Ver más resultados ({ resultadosBusqueda.length }) <i class="fas fa-angle-double-right"></i>
      </h6>
    </Link>

  {/if}
</div>

<style>
  .img-resultado-buscador {
    min-width: 50px !important;
    max-width: 50px !important;
  }
</style>