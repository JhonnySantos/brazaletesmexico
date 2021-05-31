<script>
    import Template from '../UI/Template.svelte';
    import Carousel from '../UI/Carousel.svelte';
    import EventsGrid from '../UI/EventsGrid.svelte';

    const eventCards = [
        {
            id: '5a3f079edff3ca232965258f52272477',
            title: 'Hoteles & Resort',
            url: 'https://www.brazaletesmexico.com/wp-content/uploads/viaje_playa_brazalete.jpg',
        },
        {
            id: 'f49e3bf0c0c1cafb64a419e52d3d3c18',
            title: 'Hoteles & Resort',
            url: 'https://www.brazaletesmexico.com/wp-content/uploads/viaje_playa_brazalete.jpg',
        },
        {
            id: 'bf55d5cbced1a36cd44b64d1eec88490',
            title: 'Hoteles & Resort',
            url: 'https://www.brazaletesmexico.com/wp-content/uploads/viaje_playa_brazalete.jpg',
        },
        {
            id: '69a1b1cd95e75b7280096929f800b314',
            title: 'Hoteles & Resort',
            url: 'https://www.brazaletesmexico.com/wp-content/uploads/viaje_playa_brazalete.jpg',
        },
    ];
</script>

<Template>
    <div>
        <Carousel />
        <EventsGrid eventCards={eventCards} />
    </div>
</Template>