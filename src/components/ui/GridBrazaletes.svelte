<script>
    import CardBrazalete from "./CardBrazalete.svelte";

    export let brazaletes = [];
</script>

<div class="row row-cols-1 row-cols-sm-1 row-cols-md-3 row-cols-lg-4 justify-content-{brazaletes.length > 4 ? 'start' : 'center'} g-3">
    {#each brazaletes as brazalete (brazalete.id)}
        <CardBrazalete {brazalete} />
    {/each}
</div>