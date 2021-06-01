<script>
import QuotationCard from '../UI/QuotationCard.svelte';

    import EventCard from '../UI/QuotationCard.svelte';
import Carousel from './Carousel.svelte';

    export let quotationCards = [];
</script>

<div class="container my-4">
    <div class="row row-cols-1 row-cols-md-4 g-3">
        {#each quotationCards as quotationCard (quotationCard.id)}
            <EventCard {...quotationCard} />
        {/each}
    </div>
</div>