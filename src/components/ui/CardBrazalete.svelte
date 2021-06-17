<script>
    import { Link } from 'svelte-routing';

    export let brazalete = {};
</script>

<div id={brazalete.id} class="col">
    <Link class="nav-link p-0 h-100" to={brazalete.route}>
        <div class="card card-tipo-brazalete h-100">    
            <div class="card-body pb-0">
                <h5 class="card-title text-center fw-bold">{brazalete.descripcion}</h5>
            </div>
        
            <img 
                src="{brazalete.img}" 
                class="card-img-bottom" 
                alt="{brazalete.descripcion}"
            >
        </div>
    </Link>
</div>