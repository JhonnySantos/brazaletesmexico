<script>
    import { onMount } from 'svelte';
    import { currentSection, apiHost } from "../../stores/stores";

    import Template from '../ui/Template.svelte';

    import GridBrazaletes from '../ui/GridBrazaletes.svelte';
    import GridTiposBrazaletes from "../ui/GridTiposBrazaletes.svelte";
    import Jumbotron from '../ui/Jumbotron.svelte';

    // export let id;
    export let location;
    export let tipo = null;

    console.log(location);

    $currentSection = 3;

    let tipos = [];
    let brazaletes = [];

    onMount(async () => {
        if (tipo !== null) {
            const response = await fetch(`${$apiHost}/brazaletes/all/${tipo}`);
            brazaletes = await response.json();
        } else {
            const response = await fetch(`${$apiHost}/tipos/all/${$currentSection}`);
            tipos = await response.json();
        }
    });
</script>

<svelte:head>
    <title> Brazaletes México | Brazaletes Ecofriendly </title>
</svelte:head>

<Template>
    <h1 class='text-center my-5'>Brazaletes Ecofriendly</h1>

    <div class="container mb-5">
        <Jumbotron />
    </div>

    <div class="container my-5">
            {#if tipo !== null}
                <GridBrazaletes {brazaletes} />
            {:else}
                <GridTiposBrazaletes {tipos} />
            {/if}
    </div>
</Template>