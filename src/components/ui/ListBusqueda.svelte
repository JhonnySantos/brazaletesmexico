<script>
  import { Link } from "svelte-routing";

  export let ResultadosBusqueda = [];
</script>

<div class="list-group">
  {#if ResultadosBusqueda.length <= 0}
    <button class="list-group-item list-group-item-action link-resultado-buscador disabled" tabindex="-1" aria-disabled="true">
      <h6 class="mb-0 py-2">
        No se encontraron resultados
      </h6>
    </button>
  {:else if ResultadosBusqueda.length > 6}
    {#each ResultadosBusqueda as resultado (resultado.id)}
      {#if resultado.type == "brazalete"}
        <Link class="list-group-item list-group-item-action link-resultado-buscador" to={resultado.slug}>
          {#if resultado.image}
              <div class="d-flex align-items-center">
                <div class="flex-shrink-0">
                  <img
                    src={resultado.image}
                    alt={resultado.image}
                    class="bg-dark rounded"
                    style="min-width: 50px !important; min-height: 50px !important;"
                  />
                </div>
                <div class="flex-grow-1 ms-3">
                  <h6 class="mb-0">{resultado.title}</h6>
                  <small class="text-muted">{  resultado.description.length <= 50 ? resultado.description : resultado.description.substring(0, 50) + "..." }</small>
                </div>
              </div>
          {:else}
              <h6 class="mb-0">{resultado.title}</h6>
              <small class="text-muted">{  resultado.description.length <= 50 ? resultado.description : resultado.description.substring(0, 50) + "..." }</small>
          {/if}
        </Link>
      {:else}
        <Link class="list-group-item list-group-item-action link-resultado-buscador" to={resultado.slug}>
          <h6 class="mb-0 py-2">
            Nosotros
          </h6>
        </Link>
      {/if}
    {/each}
    <Link class="list-group-item list-group-item-action link-resultado-buscador" to={ `/search/cancun` }>
      <h6 class="mb-0 py-2">
        Ver más resultados ({ ResultadosBusqueda.length }) <i class="fas fa-angle-double-right"></i>
      </h6>
    </Link>
  {:else}
    {#each ResultadosBusqueda as resultado (resultado.id)}
      {#if resultado.type == "brazalete"}
        <Link class="list-group-item list-group-item-action link-resultado-buscador" to={resultado.slug}>
          {#if resultado.image}
              <div class="d-flex align-items-center">
                <div class="flex-shrink-0">
                  <img
                    src={resultado.image}
                    alt={resultado.image}
                    class="bg-dark rounded"
                    style="min-width: 50px !important; min-height: 50px !important;"
                  />
                </div>
                <div class="flex-grow-1 ms-3">
                  <h6 class="mb-0">{resultado.title}</h6>
                  <small class="text-muted">{  resultado.description.length <= 50 ? resultado.description : resultado.description.substring(0, 50) + "..." }</small>
                </div>
              </div>
          {:else}
              <h6 class="mb-0">{resultado.title}</h6>
              <small class="text-muted">{  resultado.description.length <= 50 ? resultado.description : resultado.description.substring(0, 50) + "..." }</small>
          {/if}
        </Link>
      {:else}
        <Link class="list-group-item list-group-item-action link-resultado-buscador" to={resultado.slug}>
          <h6 class="mb-0 py-2">
            Nosotros
          </h6>
        </Link>
      {/if}
    {/each}
  {/if}
</div>