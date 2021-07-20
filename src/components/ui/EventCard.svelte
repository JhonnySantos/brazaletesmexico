<script>
  import { link } from 'svelte-routing';
  export let evento = null;
</script>

<div class="col">
    <div class="card justify-content-end event-card border-info" style="background-image: url({evento.img});">
        <a href={evento.route} class='btn btn-secondary mx-auto' use:link>
            {evento.descripcion}
        </a>
    </div>
</div>


<style>
    .event-card {
        min-height: 280px;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
    }

    .event-card a {
        width: 50%;
        margin-bottom: 25px;
    }
</style>