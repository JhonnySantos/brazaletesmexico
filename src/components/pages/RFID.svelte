<script>
    import { onMount } from 'svelte';
    import { currentSection, apiHost } from "../../stores/stores";
    
    import Template from '../ui/Template.svelte';
    import GridBrazaletes from '../ui/GridBrazaletes.svelte';
    import GridTiposBrazaletes from "../ui/GridTiposBrazaletes.svelte";

    // export let id;
    export let location;
    export let tipo = null;


    $currentSection = 2;

    let tipos = [];
    let brazaletes = [];
    let tipoBrazalete = {
        descripcion : "Soluciones RFID",
        img : "https://www.brazaletesmexico.com/wp-content/uploads/brazaletes-mexico-tyvek.png",
        descripcion_larga : "RFID son las siglas en inglés como Radio Frequency Identification, lo cual significa identificación por radiofrecuencia. Se trata de un sistema de identificación, almacenamiento y transmisión de datos remotos que utiliza dispositivos llamados etiquetas (tags), tarjetas o transponders RFID activos. Esta tecnología identifica a través de un lector, sin contacto y a distancia, una tarjeta o etiqueta (tag). Su función principal es transmitir la identidad de un objeto por medio de ondas de radio."
    };

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
    <title> Brazaletes México | {tipoBrazalete.descripcion} </title>
</svelte:head>

<Template>
    <h1 class='text-center my-5'>{tipoBrazalete.descripcion}</h1>

    <div class="container my-5">
            {#if tipo !== null}
                <GridBrazaletes {brazaletes} />
            {:else}
                <GridTiposBrazaletes {tipos} {location} />
            {/if}
    </div>
</Template>