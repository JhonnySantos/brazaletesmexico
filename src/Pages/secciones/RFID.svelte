<script>
    import { onMount } from 'svelte';
    import Template from '../../UI/Template.svelte';
    import GridBrazaletes from '../../UI/GridBrazaletes.svelte';
    import { currentSection, apiHost } from "../../stores/stores";
    import GridTiposBrazaletes from "../../UI/GridTiposBrazaletes.svelte";

    // export let id;
    export let tipo = null;
    export let location;

    $currentSection = 2;

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
    <title> Brazaletes México | Soluciones RFID </title>
</svelte:head>

<Template>
    <h1 class='text-center my-5'>Soluciones RFID</h1>

    <div class="container my-5">
            {#if tipo !== null}
                <GridBrazaletes {brazaletes} />
            {:else}
                <GridTiposBrazaletes {tipos} />
            {/if}
    </div>
</Template>