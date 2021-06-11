<script>
    export let id = null;
    export let id_seccion = null;
    export let descripcion = null;
    export let slug = null;
    export let img = null;
    export let orden = null;
</script>

<div id={id} class="col">
    <div class="card quotation-card">    
        <div class="card-body">
            <h5 class="card-title text-center">{descripcion}</h5>
            <!-- <h6 class="card-subtitle text-center text-muted">{descripcion}</h6> -->
        </div>
    
        <img src="{img}" alt="{descripcion}">
    </div>
</div>

<style>
    .quotation-card{
        min-height: 300px;
        cursor: pointer;
    }
</style>