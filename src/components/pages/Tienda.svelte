<script>
    import { onMount } from "svelte";
    import { Link } from 'svelte-routing';
    import { apiHost, currentSection } from '../../stores/stores';
    import Template from "../ui/Template.svelte";

    let brazaletes = [];

    $currentSection = 6;

    onMount(async () => {
        const response = await fetch(`${$apiHost}/brazaletes/all/`);
        
        brazaletes = await response.json();
        brazaletes = brazaletes.filter(brazalete => brazalete.precio_min > 0);
    });
</script>

<Template>
    <h1 class="text-center my-5"> Tienda </h1>
    <div class="container">
        <div class="row row-cols-1 row-cols-md-3 row-cols-lg-4 justify-content-center g-4">
            {#each brazaletes as brazalete (brazalete.id)}
                <div id={brazalete.id} class="col">
                    <Link class="nav-link p-0 h-100" to="/tienda/{brazalete.slug}">
                        <div class="card card-brazalete border-0 h-100">
                            <div class="px-5">
                                <img src="{brazalete.img}" class="card-img-top" alt="">
                            </div>
                            <div class="card-body">
                                <h6 class="card-subtitle text-center text-muted">{brazalete.descripcion}</h6>
                                <h5 class="card-title text-center mt-2"> $ {brazalete.precio_min} <small class="text-muted"> + I.V.A </small> </h5>
                            </div>
                        </div>
                    </Link>
                </div>
            {/each}
        </div>
    </div>
</Template>

<style>
    .card-brazalete:hover {
        opacity: 0.97;
    }
</style>