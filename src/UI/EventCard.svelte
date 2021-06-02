<script>
    export let url = null;
    export let eventType = null;
</script>

<div class="col">
    <div class="card event-card margin-0" style="background-image: url({url});">
        <button class='btn btn-primary'>{eventType}</button>
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