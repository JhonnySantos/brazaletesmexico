<script>
    import { Link } from 'svelte-routing';

    export let brazalete = {};
</script>

<div id={brazalete.id} class="col">
    <Link class="nav-link p-0" to={brazalete.slug}>
        <div class="card card-tipo-brazalete">    
            <div class="card-body">
                <h5 class="card-title text-center">{brazalete.descripcion}</h5>
                <!-- <h6 class="card-subtitle text-center text-muted">{descripcion}</h6> -->
            </div>
        
            <img src="{brazalete.img}" alt="{brazalete.descripcion}">
        </div>
    </Link>
</div>