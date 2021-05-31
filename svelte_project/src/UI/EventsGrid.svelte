<script>
    import EventCard from '../UI/EventCard.svelte';

    export let eventCards = [];
</script>

<div class="container my-4">
    <div class="row row-cols-1 row-cols-md-2 g-3">
        {#each eventCards as eventCard (eventCard.id)}
            <EventCard url={eventCard.url} />
        {/each}
    </div>
</div>