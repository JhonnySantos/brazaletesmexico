<script>
    import { Link } from 'svelte-routing';
    import { createEventDispatcher } from 'svelte';
    
    export let tipo = {};

    const dispatch = createEventDispatcher();

    const enviarTitulo = () => {
        dispatch('updateTitulo', tipo.descripcion);
    }
</script>

<div id={tipo.id} class="col">
    <Link class="nav-link p-0" to={tipo.slug} on:click={enviarTitulo}>
        <div class="card card-tipo-brazalete">    
            <div class="card-body">
                <h5 class="card-title text-center">{tipo.descripcion}</h5>
                <!-- <h6 class="card-subtitle text-center text-muted">{descripcion}</h6> -->
            </div>
        
            <img src="{tipo.img}" alt="{tipo.descripcion}">
        </div>
    </Link>
</div>