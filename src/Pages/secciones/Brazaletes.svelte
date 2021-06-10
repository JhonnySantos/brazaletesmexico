<script>
    import { onMount } from 'svelte';
    import { currentSection, currentIdTipo } from "../../stores/stores";

    import Template from '../../UI/Template.svelte';
    import GridBrazaletes from '../../UI/GridBrazaletes.svelte';
    import GridTiposBrazaletes from "../../UI/GridTiposBrazaletes.svelte";

    export let tipo = null;
    export let location;

    $currentSection = 1;

    let tipos = [];
    let brazaletes = [];
    let titulo = 'Brazaletes México';

    const updateIdTipo = (event) => {
        $currentIdTipo = event.detail;
    };

    onMount(async () => {
        if (tipo !== null) {
            let response = await fetch(`http://localhost:3000/api/v1/brazaletes/all/${tipo}`);
            brazaletes = await response.json();

            response = await fetch(`http://localhost:3000/api/v1/tipos/one/${$currentIdTipo}`);
            
            titulo = await response.json();
            titulo = titulo.descripcion.toUpperCase();
        } else {
            const response = await fetch(`http://localhost:3000/api/v1/tipos/all/${$currentSection}`);
            tipos = await response.json();
        }
    });
</script>

<svelte:head>
    <title> Brazaletes México | Brazaletes para todo tipo de eventos </title>
</svelte:head>

<Template>
    <h1 class='text-center my-5'> {titulo} </h1>

    <div class="container my-5">
            {#if tipo !== null}
                <GridBrazaletes {brazaletes} />
            {:else}
                <GridTiposBrazaletes on:updateIdTipo={updateIdTipo} {tipos} />
            {/if}
    </div>
</Template>