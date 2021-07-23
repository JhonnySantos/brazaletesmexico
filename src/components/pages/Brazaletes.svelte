<script>
  import { currentSection, currentIdTipo, apiHost } from "../../stores/stores"
  
  import Loading from '../ui/Loading.svelte'
  import Template from '../ui/Template.svelte'
  import Jumbotron from '../ui/Jumbotron.svelte'
  import GridBrazaletes from '../ui/GridBrazaletes.svelte'
  import GridTiposBrazaletes from "../ui/GridTiposBrazaletes.svelte"

  export let tipo = null
  export let location

  $currentSection = 1

  let tipos = []
  let brazaletes = []
  let tipoBrazalete = {}
  let titulo = ''
  let busqueda = false;

  const updateIdTipo = (event) => {
    $currentIdTipo = event.detail
    localStorage.setItem('currentIdTipo', event.detail)
  }

  const obtenerBusqueda = async () => {
    if (tipo !== null) {
      let response = await fetch(`${$apiHost}/brazaletes/all/${tipo}`)
      brazaletes = await response.json()

      response = await fetch(`${$apiHost}/tipos/one/${tipo}`)
      tipoBrazalete = await response.json()
      titulo = tipoBrazalete.descripcion.toUpperCase()
    } else {
      const response = await fetch(`${$apiHost}/tipos/all/${$currentSection}`)
      tipos = await response.json()
      titulo = 'Brazaletes México'
    }
  };

  $: if (window.location.pathname || tipo) {
    window.scrollTo(0, 0);
    busqueda = obtenerBusqueda();
  }
</script>

<svelte:head>
  <title> Brazaletes México | Brazaletes para todo tipo de eventos </title>
</svelte:head>

<Template>

  {#await busqueda}
    <Loading />
  {:then busqueda}

    <h1 class='text-center my-5'> {titulo} </h1>

    {#if Object.keys(tipoBrazalete).length > 0 }
      <div class="container mb-5">
        <Jumbotron {tipoBrazalete} />
      </div>
    {/if}

    <div class="container my-5">
      {#if tipo !== null}
        <GridBrazaletes {brazaletes} />
      {:else}
        <GridTiposBrazaletes on:updateIdTipo={updateIdTipo} {tipos} />
      {/if}
    </div>

  {/await}

</Template>