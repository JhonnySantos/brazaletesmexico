<script>
    import { onMount } from 'svelte'
    import { currentSection, currentIdTipo, apiHost } from "../../stores/stores"
    
    import Template from '../ui/Template.svelte'
    import GridBrazaletes from '../ui/GridBrazaletes.svelte'
    import GridTiposBrazaletes from "../ui/GridTiposBrazaletes.svelte"
    import Jumbotron from '../ui/Jumbotron.svelte'

    export let tipo = null
    export let location

    $currentSection = 1

    let tipos = []
    let brazaletes = []
    let titulo = ''

    const updateIdTipo = (event) => {
        $currentIdTipo = event.detail
        localStorage.setItem('currentIdTipo', event.detail)
    }

    onMount(async () => {
        if (tipo !== null) {
            let response = await fetch(`${$apiHost}/brazaletes/all/${tipo}`)
            brazaletes = await response.json()

            response = await fetch(`${$apiHost}/tipos/one/${$currentIdTipo}`)
            
            titulo = await response.json()
            titulo = titulo.descripcion.toUpperCase()
        } else {
            const response = await fetch(`${$apiHost}/tipos/all/${$currentSection}`)
            tipos = await response.json()
            titulo = 'Brazaletes México'
        }
    })
</script>

<svelte:head>
    <title> Brazaletes México | Brazaletes para todo tipo de eventos </title>
</svelte:head>

<Template>
    <h1 class='text-center my-5'> {titulo} </h1>

    <div class="container mb-5">
        <Jumbotron />
    </div>

    <div class="container my-5">
            {#if tipo !== null}
                <GridBrazaletes {brazaletes} />
            {:else}
                <GridTiposBrazaletes on:updateIdTipo={updateIdTipo} {tipos} />
            {/if}
    </div>
</Template>