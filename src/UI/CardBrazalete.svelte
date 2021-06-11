<script>
    import { Link } from 'svelte-routing';

    export let brazalete = {};
</script>

<div id={brazalete.id} class="col mb-3">
    <Link class="nav-link p-0" to={brazalete.route}>
        <div class="card card-tipo-brazalete">    
            <div class="card-body">
                <h5 class="card-title text-center fw-bold">{brazalete.descripcion}</h5>
            </div>
        
            <img src="{brazalete.img}" alt="{brazalete.descripcion}">
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