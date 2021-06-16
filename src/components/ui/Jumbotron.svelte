<script>
    export let tipoBrazalete = {};
</script>

<div class="container">
    <div class="position-relative">
        <div class="col-4">
            <img 
                src="{tipoBrazalete.img}" 
                alt="{tipoBrazalete.descripcion}"
                class="img-fluid"
            />
        </div>
        <div class="w-100 h-100 position-absolute top-50 start-50 translate-middle d-flex align-items-center bring-to-bottom">
            <div class="col-9 h-100 ms-auto d-flex align-items-center">
                <div class="card h-75 bg-primary border-primary text-white">
                    <div class="card-body d-flex align-items-center">
                        <div class="offset-1 ps-5">
                            {tipoBrazalete.descripcion}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<style>
    .bring-to-bottom{
        z-index: -1 !important;
    }
</style>