<script>
    import {
        currentSection,
        currentIdTipo,
        apiHost,
    } from "../../stores/stores";

    import Loading from "../ui/Loading.svelte";
    import Template from "../ui/Template.svelte";
    import Jumbotron from "../ui/Jumbotron.svelte";
    import GridBrazaletes from "../ui/GridBrazaletes.svelte";
    import GridTiposBrazaletes from "../ui/GridTiposBrazaletes.svelte";

    export let tipo = null;
    export let location;

    $currentSection = 1;

    let titulo = "";
    let promise = null;
    let tipoBrazalete = {};

    const updateIdTipo = (event) => {
        $currentIdTipo = event.detail;
        localStorage.setItem("currentIdTipo", event.detail);
    };

    const obtenerBusqueda = async () => {
        let response = null;
        let products = null;

        if (tipo !== null) {
            products = await fetch(`${$apiHost}/brazaletes/all/${tipo}`);

            response = await fetch(`${$apiHost}/tipos/one/${tipo}`);
            tipoBrazalete = await response.json();

            titulo = tipoBrazalete.descripcion.toUpperCase();
        } else {
            products = await fetch(`${$apiHost}/tipos/all/${$currentSection}`);
            titulo = "Brazaletes México";
        }

        return await products.json();
    };

    $: if (window.location.pathname || tipo) {
        window.scrollTo(0, 0);
        promise = obtenerBusqueda();
    }
</script>

<svelte:head>
    <title>Brazaletes México | Brazaletes para todo tipo de eventos</title>
</svelte:head>

<Template>
    {#await promise}
        <Loading />
    {:then data}
        <h1 class="text-center my-5">{titulo}</h1>

        {#if Object.keys(tipoBrazalete).length > 0}
            <div class="container mb-5">
                <Jumbotron {tipoBrazalete} />
            </div>
        {/if}

        <div class="container my-5">
            {#if tipo !== null}
                <GridBrazaletes brazaletes={data} />
            {:else}
                <GridTiposBrazaletes
                    on:updateIdTipo={updateIdTipo}
                    tipos={data}
                />
            {/if}
        </div>
    {:catch error}
        <p>{error}</p>
    {/await}
</Template>
