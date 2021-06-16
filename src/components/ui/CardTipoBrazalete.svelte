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
    <Link class="nav-link p-0 h-100" to={tipo.slug} on:click={enviarIdTipo}>
        <div class="card card-tipo-brazalete h-100">
            <div class="card-body pb-0">
                <h5 class="card-title text-center fw-bold">{tipo.descripcion}</h5>
            </div>
            <img 
                src="{tipo.img}" 
                class="card-img-bottom" 
                alt="{tipo.descripcion}"
            >
        </div>
    </Link>
</div>
