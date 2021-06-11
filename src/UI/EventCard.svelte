<script>
    import { Link } from 'svelte-routing';
    export let evento = null;
</script>

<Link class='nav-link'>
    <div class="col">
        <div class="card event-card margin-0" style="background-image: url({evento.img});">
            <!-- <h3 class="card-header bg-dark text-center text-white">{evento.descripcion}</h3> -->
            <button class='btn btn-info'>{evento.descripcion}</button>
        </div>
    </div>
</Link>


<style>
    .event-card {
        min-height: 350px;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
    }
</style>