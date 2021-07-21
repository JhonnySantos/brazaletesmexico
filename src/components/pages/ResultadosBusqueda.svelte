<script>
  import { apiHost } from "../../stores/stores";
  import Template from "../ui/Template.svelte";
  import Loading from "../ui/Loading.svelte";
  import {fade} from 'svelte/transition';
  import { Link } from 'svelte-routing';

  export let search = "";
  let resultadosBusqueda = [];

  const obtenerBusqueda = async () => {
    let response = await fetch(`${$apiHost}/busqueda/${search}`);

    if (response.ok) {
        return await response.json();
    } else {
      throw new Error( `Error: ${response.statusText}` );
    }
  };

  $: if (search) {
    resultadosBusqueda = obtenerBusqueda();
  }
</script>

<Template>
  <div class="container-sm my-5" transition:fade>

    {#await resultadosBusqueda}

      <Loading />

    {:then resultadosBusqueda}

      <div class="row mb-5">
        <div class="col">
          <h4>Resultados de la búsqueda "<strong>{search}</strong>"</h4>
        </div>
      </div>

      {#if resultadosBusqueda.length > 0}

        <ul class="list-group list-group-flush">
          {#each resultadosBusqueda as {tipo, img, slug, titulo, descripcion}, i}

            {#if tipo == "brazalete"}

              <Link class="list-group-item list-group-item-action link-resultado-buscador py-4" to={slug}>

                {#if img}
                    <div class="d-flex">
                      <div class="flex-shrink-0">
                        <img
                          src={img}
                          alt={img}
                          class="border thumbnail-responsive"
                        />
                      </div>
                      <div class="flex-grow-1 ms-3">
                        <div class="d-flex w-100 justify-content-between">
                          <h5 class="mb-3">{titulo}</h5>
                          <i class="fas fa-angle-double-right fa-lg ms-3"></i>
                        </div>
                        <p>{  descripcion.length <= 150 ? descripcion : descripcion.substring(0, 150) + "..." }</p>
                      </div>
                    </div>
                {:else}

                    <div class="d-flex w-100 justify-content-between">
                      <h5 class="mb-3">{titulo}</h5>
                      <i class="fas fa-angle-double-right fa-lg ms-3"></i>
                    </div>
                    <p>{  descripcion.length <= 150 ? descripcion : descripcion.substring(0, 150) + "..." }</p>

                {/if}

              </Link>

            {:else}

              <Link class="list-group-item list-group-item-action link-resultado-buscador py-4" to={slug}>
                <div class="d-flex w-100 justify-content-between">
                  <h5 class="mb-3">{titulo}</h5>
                  <i class="fas fa-angle-double-right fa-lg ms-3"></i>
                </div>
              </Link>

            {/if}

          {/each}
        </ul>

      {:else}

        <div class="row mb-5">
          <div class="col-12">
            <div class="alert alert-warning" role="alert">
              No se encontraron resultados que concuerden con la búsqueda, intenta
              nuevamente.
            </div>
          </div>
        </div>

      {/if}

    {:catch}

      <div class="row mb-4">
        <div class="col">
          <h4>Resultados de la búsqueda "<strong>{search}</strong>"</h4>
        </div>
      </div>
      <div class="row mb-5">
        <div class="col-12">
          <div class="alert alert-warning" role="alert">
            No se encontraron resultados que concuerden con la búsqueda, intenta
            nuevamente.
          </div>
        </div>
      </div>

    {/await}

  </div>
</Template>

<style>
  .container-sm {
    min-height: calc(100vh - 400px) !important;
  }
  .thumbnail-responsive {
    min-width: 125px !important; 
    max-width: 125px !important; 
  }

</style>
