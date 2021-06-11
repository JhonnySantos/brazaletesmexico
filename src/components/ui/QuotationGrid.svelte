<script>
    import QuotationCard from './QuotationCard.svelte';

    export let cotizaciones = [];
</script>

<div class="container my-4">
    <div class="row row-cols-1 row-cols-md-4 g-3">
        {#each cotizaciones as cotizacion (cotizacion.id)}
            <QuotationCard {...cotizacion} />
        {/each}
    </div>
</div>