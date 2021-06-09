<script>
    import { onMount } from 'svelte';
    import { currentSection } from "../../stores/stores";

    import Template from '../../UI/Template.svelte';
    import GridBrazaletes from '../../UI/GridBrazaletes.svelte';
    import GridTiposBrazaletes from "../../UI/GridTiposBrazaletes.svelte";

    // export let id;
    export let tipo = null;
    export let location;

    $currentSection = 4;

    let tipos = [];
    let brazaletes = [];

    onMount(async () => {
        if (tipo !== null) {
            const response = await fetch(`http://localhost:3000/api/v1/brazaletes/all/${tipo}`);
            brazaletes = await response.json();
        } else {
            const response = await fetch(`http://localhost:3000/api/v1/tipos/all/${$currentSection}`);
            tipos = await response.json();
        }
    });
</script>

<svelte:head>
    <title> Brazaletes México | Brazaletes Holográficos </title>
</svelte:head>

<Template>
    <h1 class='text-center my-5'>Brazaletes Holográficos</h1>

    <div class="container my-5">
            {#if tipo !== null}
                <GridBrazaletes {brazaletes} />
            {:else}
                <GridTiposBrazaletes {tipos} />
            {/if}
    </div>
</Template>