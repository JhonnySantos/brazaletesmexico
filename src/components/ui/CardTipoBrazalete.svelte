<script>
    import { Link } from 'svelte-routing';
    import { createEventDispatcher } from 'svelte';
    
    export let tipo = {};

    const dispatch = createEventDispatcher();

    const enviarIdTipo = () => {
        dispatch('updateIdTipo', tipo.id);
    };
</script>

<div id={tipo.id} class="col">
    <Link class="nav-link p-0" to={tipo.slug} on:click={enviarIdTipo}>
        <div class="card card-tipo-brazalete">    
            <div class="card-body">
                <h5 class="card-title text-center fw-bold">{tipo.descripcion}</h5>
            </div>
        
            <img src="{tipo.img}" alt="{tipo.descripcion}">
        </div>
    </Link>
</div>

<style>
    .card-tipo-brazalete:hover {
        opacity: 0.7;
    }

    .card-tipo-brazalete img {
        width: 230px !important;
        margin: 20px auto !important;
    }
</style>