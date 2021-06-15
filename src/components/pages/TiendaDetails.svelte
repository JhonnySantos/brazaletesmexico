<script>
    // import { onMount } from "svelte";
    // import { Link } from 'svelte-routing';
    // import { apiHost } from '../stores/stores';

    import Template from "../ui/Template.svelte";

    let brazalete = [];

    // onMount(async () => {
    //     const response = await fetch(`${$apiHost}/brazaletes/all/`);
        
    //     brazaletes = await response.json();
    //     brazaletes = brazaletes.filter(brazalete => brazalete.precio_min > 0);
    // });
</script>

<Template>
    <div class="container my-5">
        <div class="row">
            <div class="col-5">
                <img 
                    src="https://www.brazaletesmexico.com/wp-content/uploads/brazalete-con-gel-antibacterial-amarillo-tramsparente-1.jpg" 
                    alt="Brazalete con gel antibacterial Amarillo Transparente sin impresión"
                    class="img-fluid"
                >
            </div>
            <div class="col-7">

                <h4 class="fw-bold mb-1">Brazalete con gel antibacterial Amarillo Transparente sin impresión</h4>
                <h6 class="mb-3"><strong class="fw-bold">SKU:</strong> BGA-AMA-1823-0001</h6>
                <p class="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, at! Voluptas illum minima exercitationem numquam, ipsa excepturi quasi, quis temporibus similique culpa sed accusamus quos sunt sint error, suscipit provident!</p>
                <h5 class="fw-bold my-4">$200.00 - $1,000.00</h5>

                <hr>

                <div class="mb-3">
                    <label for="paquetes" class="form-label d-block">Paquete de:</label>

                    <input type="radio" class="btn-check" name="paquetes" id="option1" autocomplete="off" checked>
                    <label class="btn btn-sm btn-outline-primary" for="option1">1 pieza</label>

                    <input type="radio" class="btn-check" name="paquetes" id="option2" autocomplete="off">
                    <label class="btn btn-sm btn-outline-primary" for="option2">10 piezas</label>

                    <input type="radio" class="btn-check" name="paquetes" id="option3" autocomplete="off" disabled>
                    <label class="btn btn-sm btn-outline-primary" for="option3">100 piezas</label>

                    <input type="radio" class="btn-check" name="paquetes" id="option4" autocomplete="off">
                    <label class="btn btn-sm btn-outline-primary" for="option4">1000 piezas</label>

                </div>

                <div class="mb-5">
                    <label for="tallas" class="form-label d-block">Talla:</label>

                    <input type="radio" class="btn-check" name="tallas" id="option6" autocomplete="off" checked>
                    <label class="btn btn-sm btn-outline-info" for="option6">18 cm</label>

                    <input type="radio" class="btn-check" name="tallas" id="option7" autocomplete="off">
                    <label class="btn btn-sm btn-outline-info" for="option7">23 cm</label>
                </div>

                <div class="row">
                    <div class="col-auto">
                        <div class="input-group input-group-sm">
                            <button class="btn btn-outline-secondary border border-secondary" type="button" id="button-addon1"> - </button>
                            <input type="number" class="form-control ps-3 pe-0 text-center border border-secondary" min="1" max="99" aria-label="Example text with button addon" aria-describedby="button-addon1" value="1">
                            <button class="btn btn-outline-secondary border border-secondary" type="button" id="button-addon2"> + </button>
                        </div>
                    </div>
                    <div class="col">
                        <button class="btn btn-sm btn-secondary border border-secondary px-5">Cotizar</button>
                    </div>
                </div>

            </div>
        </div>
    </div>
</Template>