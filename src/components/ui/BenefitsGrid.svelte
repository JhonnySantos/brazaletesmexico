<script>
    import BenefitBlockquote from './BenefitBlockquote.svelte';
import Carousel from './Carousel.svelte';

    export let benefits = [];
</script>

<div class="container my-4">
    <div class="row row-cols-1 row-cols-md-3 g-3">
        {#each benefits as benefit (benefit.id)}
            <BenefitBlockquote {...benefit} />
        {/each}
    </div>
</div>