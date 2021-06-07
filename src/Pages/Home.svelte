<script>
    import {onMount} from 'svelte'
    import Template from '../UI/Template.svelte';
    import Carousel from '../UI/Carousel.svelte';
    import EventsGrid from '../UI/EventsGrid.svelte';
    import QuotationGrid from '../UI/QuotationGrid.svelte';
    import BenefitsGrid from '../UI/BenefitsGrid.svelte';
    import Section from '../UI/Section.svelte';

    let eventos = [];
    let cotizaciones = [];

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
        let response = await fetch('http://localhost:3000/api/v1/eventos/all/');
        eventos = await response.json();

        response = await fetch('http://localhost:3000/api/v1/tipos/all/1');
        cotizaciones = await response.json();
    });
</script>

<Template>
    <div>
        <Carousel />

        <Section name='BRAZALETES POR COTIZACIÓN' />

        <QuotationGrid {cotizaciones} />

        <Section name='BRAZALETES PARA CADA OCASIÓN' />

        <EventsGrid eventos={eventos} />

        <Section name='NUESTRAS VENTAJAS' />

        <BenefitsGrid {benefits} />

        <!-- <Section name='ÚLTIMOS ARTÍCULOS EN EL BLOG' /> -->
    </div>
</Template>