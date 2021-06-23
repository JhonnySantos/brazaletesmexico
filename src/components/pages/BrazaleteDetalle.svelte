<script>
    import { onMount } from 'svelte'

    import { apiHost } from '../../stores/stores.js'

    import Template from "../ui/Template.svelte"

    export let slug = ''
    let brazalete = {}

    onMount(async () => {
        const response = await fetch(`${$apiHost}/brazaletes/one/${slug}`)
        brazalete = await response.json()
    });
</script>

<Template>
    <div class="container my-5">
        <div class="row">
            <div class="col-12 col-sm-12 col-md-5">
                <img 
                    src="{brazalete.img}" 
                    alt="Brazalete con gel antibacterial Amarillo Transparente sin impresión"
                    class="img-fluid"
                >
            </div>
            <div class="col-12 col-sm-12 col-md-7">
                <h4 class="fw-bold mb-1">{brazalete.descripcion}</h4>
                <h6 class="mb-3 text-muted"><strong class="fw-bold">SKU:</strong> BGA-AMA-1823-0001</h6>
                <p class="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, at! Voluptas illum minima exercitationem numquam, ipsa excepturi quasi, quis temporibus similique culpa sed accusamus quos sunt sint error, suscipit provident!</p>
                <h5 class="fw-bold my-4 text-primary">${brazalete.precio_min} + I.V.A</h5>
                <hr>
                <div class="mb-3">
                    <label for="paquetes" class="form-label d-block">Paquete de:</label>
                    <div class="row row-cols-auto g-2">
                        <div class="col">
                            <input type="radio" class="btn-check" name="paquetes" id="option1" autocomplete="off" checked>
                            <label class="btn btn-sm btn-outline-primary h-100 px-1 px-md-2 px-lg-3" for="option1">1 pieza</label>
                        </div>

                        <div class="col">
                            <input type="radio" class="btn-check" name="paquetes" id="option2" autocomplete="off">
                            <label class="btn btn-sm btn-outline-primary h-100 px-1 px-md-2 px-lg-3" for="option2">10 piezas</label>
                        </div>

                        <div class="col">
                            <input type="radio" class="btn-check" name="paquetes" id="option3" autocomplete="off" disabled>
                            <label class="btn btn-sm btn-outline-primary h-100 px-1 px-md-2 px-lg-3" for="option3">100 piezas</label>
                        </div>

                        <div class="col">
                            <input type="radio" class="btn-check" name="paquetes" id="option4" autocomplete="off">
                            <label class="btn btn-sm btn-outline-primary h-100 px-1 px-md-2 px-lg-3" for="option4">1000 piezas</label>
                        </div>
                    </div>
                </div>
                <div class="mb-5">
                    <label for="tallas" class="form-label d-block">Talla:</label>
                    <div class="row row-cols-auto g-2">
                        <div class="col">
                            <input type="radio" class="btn-check" name="tallas" id="option6" autocomplete="off" checked>
                        <label class="btn btn-sm btn-outline-info h-100 px-1 px-md-2 px-lg-3" for="option6">18 cm</label>
                        </div>

                        <div class="col">
                            <input type="radio" class="btn-check" name="tallas" id="option7" autocomplete="off">
                        <label class="btn btn-sm btn-outline-info h-100 px-1 px-md-2 px-lg-3" for="option7">23 cm</label>
                        </div>
                    </div>
                </div>

                <div class="row g-3">
                    <div class="col-12 col-sm-12 col-md-auto">
                        <div class="input-group input-group-sm">
                            <button class="btn btn-outline-secondary border border-secondary" type="button" id="button-addon1"> - </button>
                            <input type="number" class="form-control text-center border border-secondary" min="1" max="99" aria-label="Example text with button addon" aria-describedby="button-addon1" value="1">
                            <button class="btn btn-outline-secondary border border-secondary" type="button" id="button-addon2"> + </button>
                        </div>
                    </div>
                    <div class="col-12 col-sm-12 col-md-4 d-grid">
                        <button class="btn btn-sm btn-secondary px-5">Cotizar</button>
                    </div>
                    <!-- <div class="col">
                        <button class="btn btn-sm btn-secondary border border-secondary px-5">Cotizar</button>
                    </div> -->
                </div>

            </div>
        </div>
    </div>
</Template>

<style>
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
    }

    input[type=number] {
    -moz-appearance: textfield;
    }
</style>