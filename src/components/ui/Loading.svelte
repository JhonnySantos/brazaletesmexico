<script>
    export let modalBox = false;
    export let message = "Cargando...";
    export let icon = "fas fa-spinner fa-pulse fa-4x";
</script>

<div class="container-fluid">
    <div
        class="row {modalBox
            ? 'modal-box'
            : 'loading-box'} align-items-center justify-content-center"
    >
        <div class="col-auto">
            <h5 class="text-center">
                <i class="{icon} mb-5" />

                <span class="d-block"> {message} </span>
            </h5>
        </div>
    </div>
</div>

<style>
    .loading-box {
        min-height: 480px;
        opacity: 0.3;
    }

    .modal-box {
        min-height: 240px;
    }
</style>
