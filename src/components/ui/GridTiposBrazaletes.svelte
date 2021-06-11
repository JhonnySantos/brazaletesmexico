<script>
    import CardTipoBrazalete from '../UI/CardTipoBrazalete.svelte';
    export let tipos = [];
</script>

<div class="row row-cols-1 row-cols-md-4 justify-content-{tipos.length > 4 ? 'start' : 'center'} g-3">
    {#each tipos as tipo (tipo.id)}
        <CardTipoBrazalete on:updateIdTipo {tipo} />
    {/each}
</div>