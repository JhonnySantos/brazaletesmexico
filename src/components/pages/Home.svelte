<script>
    import { onMount } from 'svelte'
    import { currentSection, apiHost } from "../../stores/stores";

    import Template from '../ui/Template.svelte';
    
    import Section from '../ui/Section.svelte';
    import Carousel from '../ui/Carousel.svelte';
    import EventsGrid from '../ui/EventsGrid.svelte';
    import BenefitsGrid from '../ui/BenefitsGrid.svelte';
    import GridTiposBrazaletes from '../ui/GridTiposBrazaletes.svelte';

    let tipos = [];
    let eventos = [];
    export let location = "";

    $currentSection = 0;

    const benefits = [
        {
            id      : 'd262634e6da1e487a1a3ff976b8fe0a2b0e83ff4',
            icon    : 'https://www.brazaletesmexico.com/wp-content/uploads/envios.svg',
            title   : 'ENVÍOS INMEDIATOS',
            text    : 'Tenemos envíos a todo el país con los mejores tiempos de entrega y monitoreo constante de su pedido.'
        },
        {
            id      : 'd262634e6da1e487a1a3fg976b8fe0a2b0e83ff4',
            icon    : 'https://www.brazaletesmexico.com/wp-content/uploads/calidad.svg',
            title   : 'EXCELENTE CALIDAD',
            text    : 'Estándares de calidad altos para así proporcionar un producto seguro y distintivo para el control y promoción de tus eventos.'
        },
        {
            id      : 'd262634e6da1e487a1a3fk976b8fe0a2b0e83ff4',
            icon    : 'https://www.brazaletesmexico.com/wp-content/uploads/precio.svg',
            title   : 'EL MEJOR PRECIO',
            text    : 'Nos enfocamos en ofrecer el mejor precio en el mercado basado en la calidad, tiempo de entrega y el servicio que ofrecemos.'
        },
    ];

    onMount(async () => {
        let response = await fetch(`${$apiHost}/eventos/all/`);
        eventos = await response.json();

        response = await fetch(`${$apiHost}/tipos/all/1`);
        tipos = await response.json();
    });
</script>

<svelte:head>
    <title> Brazaletes México | Home </title>
</svelte:head>

<Template>
    <div>
        <Carousel />

        <Section name='BRAZALETES POR COTIZACIÓN' />

        <div class="container my-4">
            <GridTiposBrazaletes {tipos} />
        </div>

        <Section name='BRAZALETES PARA CADA OCASIÓN' />

        <EventsGrid eventos={eventos} />

        <Section name='NUESTRAS VENTAJAS' />

        <BenefitsGrid {benefits} />
    </div>
</Template>