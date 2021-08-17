<script>
    import { onMount } from 'svelte'
    import { Link } from 'svelte-routing';
    import { currentSection, apiHost, currentIdTipo, imagesPath } from "../../stores/stores";

    import Section from '../ui/Section.svelte';
    import Carousel from '../ui/Carousel.svelte';
    import Template from '../ui/Template.svelte';
    import EventsGrid from '../ui/EventsGrid.svelte';
    import BenefitsGrid from '../ui/BenefitsGrid.svelte';
    import BlogLastEntries from '../ui/BlogLastEntries.svelte';
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

    const staticTipos = [
        {
            "id": 1,
            "descripcion": "Brazaletes de Tyvek",
            "img": "jumbotron-tipo-1.png",
            "slug": "/brazaletes/tyvek"
        },
        {
            "id": 2,
            "descripcion": "Brazaletes de Vinil",
            "img": "jumbotron-tipo-2.png",
            "slug": "/brazaletes/vinil"
        },
        {
            "id": 3,
            "descripcion": "Brazaletes Holográficos",
            "img": "jumbotron-tipo-3.png",
            "slug": "/brazaletes/holograficos"
        },
        {
            "id": 4,
            "descripcion": "Brazaletes Hospitalarios",
            "img": "jumbotron-tipo-4.png",
            "slug": "/brazaletes/hospitalarios"
        },
        {
            "id": 5,
            "descripcion": "Brazaletes de Silicón",
            "img": "jumbotron-tipo-5.png",
            "slug": "/brazaletes/silicon"
        },
        {
            "id": 6,
            "descripcion": "Brazaletes de Tela",
            "img": "jumbotron-tipo-6.png",
            "slug": "/brazaletes/tela"
        },
        {
            "id": 7,
            "descripcion": "Brazaletes Artesanales",
            "img": "jumbotron-tipo-7.png",
            "slug": "/brazaletes/artesanales"
        },
        {
            "id": 21,
            "descripcion": "PVC",
            "img": "jumbotron-tipo-21.png",
            "slug": "/brazaletes/pvc"
        }
    ]

    const updateIdTipo = (event) => {
        $currentIdTipo = event.detail
        localStorage.setItem('currentIdTipo', event.detail)
    }

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

            <!-- <GridTiposBrazaletes on:updateIdTipo={updateIdTipo} {tipos} /> -->

            <div class="row row-cols-2 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 justify-content-'start' g-3">
                {#each staticTipos as tipo}
                    <div id={tipo.id} class="col">
                        <Link class="nav-link p-0 h-100" to={tipo.slug} on:click={updateIdTipo( {detail: tipo.id} )}>
                            <div class="card card-tipo-brazalete h-100">
                                <div class="card-body pb-0">
                                    <h5 class="card-title text-center fw-bold">{tipo.descripcion}</h5>
                                </div>
                                <img src={`${$imagesPath}/${tipo.img}`} class="card-img-bottom"  alt="{tipo.descripcion}">
                            </div>
                        </Link>
                    </div>
                {/each}
            </div>
        </div>

        <Section name='BRAZALETES PARA CADA OCASIÓN' />

        <EventsGrid eventos={eventos} />

        <Section name='NUESTRAS VENTAJAS' />

        <BenefitsGrid {benefits} />

        <BlogLastEntries />
    </div>
</Template>