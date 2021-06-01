<script>
    import Template from '../UI/Template.svelte';
    import Carousel from '../UI/Carousel.svelte';
    import EventsGrid from '../UI/EventsGrid.svelte';
    import QuotationGrid from '../UI/QuotationGrid.svelte';
    import BenefitsGrid from '../UI/BenefitsGrid.svelte';
    import Section from '../UI/Section.svelte';

    const eventCards = [
        {
            id: '5a3f079edff3ca232965258f52272477',
            title: 'Hoteles & Resort',
            url: 'https://www.brazaletesmexico.com/wp-content/uploads/viaje_playa_brazalete.jpg',
        },
        {
            id: 'f49e3bf0c0c1cafb64a419e52d3d3c18',
            title: 'Eventos',
            url: 'https://www.brazaletesmexico.com/wp-content/uploads/festival_concert_wristbands.jpg',
        },
        {
            id: 'bf55d5cbced1a36cd44b64d1eec88490',
            title: 'Hospitalarios',
            url: 'https://www.brazaletesmexico.com/wp-content/uploads/paciente-con-brazalete.jpg',
        },
        {
            id: '69a1b1cd95e75b7280096929f800b314',
            title: 'Hoteles & Resort',
            url: 'https://www.brazaletesmexico.com/wp-content/uploads/parques-acuaticos-brazaletes-1024x731.jpg',
        },
    ];

    const quotationCards = [
        {
            id: '1b2e445a75417b67edf363b37362ca680303f80a',
            category: 'SEGURIDAD',
            subcategory: 'Brazaletes de Tyvek',
            url: 'https://www.brazaletesmexico.com/wp-content/uploads/brazaletes-de-tyvek-barcode-de-seguridad.jpg',
            route: 'https://www.brazaletesmexico.com/portfolio-featured-item/brazaletes-de-tyvek/'
        },
        {
            id: 'd0d92833a22c744079df9e9e3b0ba6db27cb5ead',
            category: 'SEGURIDAD',
            subcategory: 'Brazaletes de Vinil',
            url: 'https://www.brazaletesmexico.com/wp-content/uploads/VINIL-1-2-1-1.jpg',
            route: 'https://www.brazaletesmexico.com/portfolio-featured-item/brazaletes-de-vinil/'
        },
        {
            id: 'ffdeefca6c39c0df010c92155d6118e6124e2db9',
            category: 'SEGURIDAD',
            subcategory: 'Brazaletes Holográficos',
            url: 'https://www.brazaletesmexico.com/wp-content/uploads/brazaletes-en-mexico-de-seguridad-holograficos.jpg',
            route: 'https://www.brazaletesmexico.com/featured-item/brazaletes-holograficos/'
        },
        {
            id: '0cd67fdc9e0819d8fa5708835acc70bbff4e1c53',
            category: 'SEGURIDAD',
            subcategory: 'Brazaletes Hospitalarios',
            url: 'https://www.brazaletesmexico.com/wp-content/uploads/brazaletes-de-vinil-seguridad-hospitalario-e1612977809635.jpg',
            route: 'https://www.brazaletesmexico.com/portfolio-featured-item/brazaletes-hospitalarios/'
        },
        {
            id: 'c90414a5195d0234365848421b85f991de10ae23',
            category: 'SEGURIDAD',
            subcategory: 'Brazaletes de Tyvek',
            url: 'https://www.brazaletesmexico.com/wp-content/uploads/Brazaletes-de-silicon-grabado.jpg',
            route: ''
        },
        {
            id: 'd262634e6da1e487a1a3fc976b8fe0a2b0e83ff9',
            category: 'SEGURIDAD',
            subcategory: 'Brazaletes de Tyvek',
            url: 'https://www.brazaletesmexico.com/wp-content/uploads/brazaletes-promocionales-de-tela-bm-200.jpg',
            route: ''
        },
        {
            id: 'd262634e6da1e487a1a3fc976b8fe0a2b0e83ff4',
            category: 'SEGURIDAD',
            subcategory: 'Brazaletes de Tyvek',
            url: 'https://www.brazaletesmexico.com/wp-content/uploads/madera_RFID.jpg',
            route: ''
        },
        {
            id: 'd262634e6da1e487a1a3fc976h8fe0a2b0e83ff9',
            category: 'SEGURIDAD',
            subcategory: 'Brazaletes de Tyvek',
            url: 'https://www.brazaletesmexico.com/wp-content/uploads/tarjetas-impresas-de-pvc.jpg',
            route: ''
        },
    ];

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
</script>

<Template>
    <div>
        <Carousel />

        <Section name='BRAZALETES POR COTIZACIÓN' />

        <QuotationGrid {quotationCards} />

        <Section name='BRAZALETES PARA CADA OCASIÓN' />

        <EventsGrid eventCards={eventCards} />

        <Section name='NUESTRAS VENTAJAS' />

        <BenefitsGrid {benefits} />

        <!-- <Section name='ÚLTIMOS ARTÍCULOS EN EL BLOG' /> -->
    </div>
</Template>