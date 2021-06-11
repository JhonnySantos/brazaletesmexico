<script>
    import EventCard from '../UI/EventCard.svelte';

    export let eventos = [];
</script>

<div class="container my-4">
    <div class="row row-cols-1 row-cols-md-2 justify-content-center g-3">
        {#each eventos as evento (evento.id)}
            <EventCard {evento} />
        {/each}
    </div>
</div>