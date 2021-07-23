<script>
    import { currentSection, apiHost } from "../../stores/stores";

    import GridTiposBrazaletes from "../ui/GridTiposBrazaletes.svelte";
    import GridBrazaletes from '../ui/GridBrazaletes.svelte';
    import Template from '../ui/Template.svelte';
    import Loading from '../ui/Loading.svelte';

    // export let id;
    export let location;
    export let tipo = null;

    $currentSection = 4;

    let promise;
    let tipos = [];
    let brazaletes = [];
    let tipoBrazalete = {
        descripcion : "Brazaletes Holográficos",
        img : "https://www.brazaletesmexico.com/wp-content/uploads/brazaletes-mexico-tyvek.png",
        descripcion_larga : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit veniam ad itaque, quia quidem similique ratione, odio numquam eum provident facilis qui quis natus perspiciatis deserunt. Deserunt sequi iusto temporibus!"
    };

    const obtenerHologramas = async () => {
        if (tipo !== null) {
            const response = await fetch(`${$apiHost}/brazaletes/all/${tipo}`);
            brazaletes = await response.json();
        } else {
            const response = await fetch(`${$apiHost}/tipos/all/${$currentSection}`);
            tipos = await response.json();
        }
    };

  $: if (window.location.pathname || tipo) {
    window.scrollTo(0, 0);
    promise = obtenerHologramas();
    console.log(location)
  }
</script>

<svelte:head>
    <title> Brazaletes México | {tipoBrazalete.descripcion} </title>
</svelte:head>

<Template>
  {#await promise}
    <Loading />
  {:then promise} 
        
    <h1 class='text-center my-5'>{tipoBrazalete.descripcion}</h1>

    <div class="container my-5">
            {#if tipo !== null}
                <GridBrazaletes {brazaletes} />
            {:else}
                <GridTiposBrazaletes {tipos} />
            {/if}
    </div>
  {/await}
</Template>