<script>
    import { Link } from 'svelte-routing';
    import Template from "../../UI/Template.svelte";
    import { onMount } from "svelte";

    let brazaletes = [];

    onMount(async () => {
        const response = await fetch('http://localhost:3000/api/v1/brazaletes/all/');
        
        brazaletes = await response.json(); console.log(brazaletes);
        brazaletes = brazaletes.filter(brazalete => brazalete.precio_min > 0);
    });
</script>

<Template>
    <h1 class="text-center my-5"> Tienda </h1>
    <div class="container">
        <div class="row row-cols-1 row-cols-md-3 row-cols-lg-4 justify-content-center g-3">
            {#each brazaletes as brazalete (brazalete.id)}
                <div id={brazalete.id} class="col">
                    <Link class="nav-link p-0">
                        <div class="card card-tipo-brazalete border-0">
                            <img src="{brazalete.img}" alt="">

                            <div class="card-body">
                                <h6 class="card-subtitle text-center text-muted">{brazalete.descripcion}</h6>
                                <h5 class="card-title text-center mt-2"> $ {brazalete.precio_min} - $ {brazalete.precio_max} <span class="text-muted"> + I.V.A </span> </h5>
                            </div>
                        </div>
                    </Link>
                </div>
            {/each}
        </div>
    </div>
</Template>

<style>
    .card-tipo-brazalete h5 + h6 {
        font-size: 12px !important;
    }

    .card-tipo-brazalete:hover {
        opacity: 0.7;
    }

    .card-tipo-brazalete img {
        width: 230px !important;
        margin: 20px auto !important;
    }
</style>