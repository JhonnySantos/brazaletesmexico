<script>
  import GridTiposBrazaletes from "../ui/GridTiposBrazaletes.svelte";
  import { apiHost, imagesPath } from "../../stores/stores";
  import NotFoundPage from "./NotFoundPage.svelte";
  import Template from "../ui/Template.svelte";
  import Loading from "../ui/Loading.svelte";
  import Section from "../ui/Section.svelte";
  import { onMount } from "svelte";
  export let slug = "";
  let ocasion = {};
  let tipos = [];

  const obtenerOcasion = async () => {
    window.scrollTo(0, 0);
    let response = await fetch(`${$apiHost}/tipos/all/1`);
    tipos = await response.json();

    response = await fetch(`${$apiHost}/eventos/one/${slug}`);
    return await response.json();

  };

  onMount( async () => {
    ocasion = obtenerOcasion();
  });

</script>

{#await ocasion}

<Template>
  <Loading />
</Template>
  
{:then ocasion}

{#if ocasion.route}

  <Template>

    <div class="container-fluid bg-light bg-gradient border-0 shadow">
      <div class="row align-items-center">
        <div class="col-12 col-md-6 p-0">
          <img
            src={`${$imagesPath}/${ocasion.img}`}
            class="img-fluid w-100"
            alt={ocasion.encabezado}
          />
        </div>
        <div class="col-12 col-md-6 px-3">
          <h2 class="mt-3 mb-3 mt-md-0">{ocasion.titulo}</h2>
          <p class="mb-4 mb-md-0">
            {ocasion.descripcion}
          </p>
        </div>
      </div>
    </div>

    <Section name={ocasion.encabezado} />

    <div class="container my-7">
      <GridTiposBrazaletes {tipos} />
    </div>

  </Template>

  {:else}

  <NotFoundPage />

{/if}

{/await}

<style>
  .bg-light {
    background-color: #f8f9fa !important;
  }

  .my-7 {
    margin-bottom: 5rem !important;
    margin-top: 5rem !important;
  }
</style>
