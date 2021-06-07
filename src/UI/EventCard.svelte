<script>
    export let id = null;
    export let descripcion = null;
    export let img = null;
    export let url = null;
    export let orden = null;
</script>

<div class="col">
    <div class="card event-card margin-0" style="background-image: url({img});">
        <button class='btn btn-primary'>{descripcion}</button>
    </div>
</div>

<style>
    .event-card {
        min-height: 300px;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
    }
</style>