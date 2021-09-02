<script>
    import CardTipoBrazalete from "./CardTipoBrazalete.svelte";
    export let tipos = [];

    console.log(tipos);

    const position = tipos.length > 4 ? "start" : "center";
</script>

<div
    class="row row-cols-2 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 justify-content-{position} g-3"
>
    {#each tipos as tipo, i}
        <CardTipoBrazalete on:updateIdTipo {tipo} />
    {/each}
</div>
