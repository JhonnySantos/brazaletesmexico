<script>
    import { onMount } from 'svelte'
    import { apiHost } from '../../stores/stores.js'

    import Template from "../ui/Template.svelte"

    export let slug = ''
    
    let brazalete = {}

    let modal;

    let cantidad = 1
    let estados = []
    let municipios = []
    let customCantidad = null
    let disabledCustomCantidad = true

    let medida = 18
    
    let cotizacion = {
        cantidad: 0,
        medida: 0,
        nombre: "",
        email: "",
        direccion: "",
        telefono: "",
        estado: -1,
        municipio: -1,
        codigoPostal: "",
        imagen: "",
        informacionAdicional: ""
    }

    $:cotizacion.cantidad = cantidad === -1 ?  cantidad : customCantidad
    $:disabledCustomCantidad = cantidad === -1 ?  false : true
    $:cotizacion.medida = medida

    // $: if (cotizacion.estado === -1) {
    //     municipios = []
    // } else {
    //     fetch('https://raw.githubusercontent.com/martinciscap/json-estados-municipios-mexico/master/estados-municipios.json')
    //     .then((response) => response.json())
    //     .then((data) => {
    //         console.log(data)
    //         console.log(cotizacion.estado)
    //     });
    // }

    const handleSubmit = () => {

    }

    const handleCotizacionModal = () => {
        const bsModal = new bootstrap.Modal(modal, {
            backdrop: 'static',
            keyboard: false
        })

        bsModal.show()
    }

    onMount(async () => {
        let response = await fetch(`${$apiHost}/brazaletes/one/${slug}`)
        brazalete = await response.json()

        // response = await fetch('https://raw.githubusercontent.com/martinciscap/json-estados-municipios-mexico/master/estados.json')
        // estados = await response.json()
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
                    <div class="row row-cols-auto g-3">
                        <div class="col">
                            <input type="radio" bind:group="{cantidad}" class="btn-check" name="paquetes" id="option1" autocomplete="off" checked value={1}>
                            <label class="btn btn-sm btn-outline-primary px-1 px-md-2 px-lg-3" for="option1">1 pieza</label>
                        </div>

                        <div class="col">
                            <input type="radio" bind:group="{cantidad}" class="btn-check" name="paquetes" id="option2" autocomplete="off" value={10} >
                            <label class="btn btn-sm btn-outline-primary px-1 px-md-2 px-lg-3" for="option2">10 piezas</label>
                        </div>

                        <div class="col">
                            <input type="radio" bind:group="{cantidad}" class="btn-check" name="paquetes" id="option3" autocomplete="off" value={100} >
                            <label class="btn btn-sm btn-outline-primary px-1 px-md-2 px-lg-3" for="option3">100 piezas</label>
                        </div>

                        <div class="col">
                            <input type="radio" bind:group="{cantidad}" class="btn-check" name="paquetes" id="option4" autocomplete="off" value={-1} >
                            <label class="btn btn-sm btn-outline-primary px-1 px-md-2 px-lg-3" for="option4">OTROS</label>
                        </div>

                        <div class="col-md-3">
                            <input
                                type="number"
                                bind:value={customCantidad}
                                name="cantidad"
                                id="cantidad"
                                class="form-control form-control-sm text-center border-3"
                                class:border-primary={!disabledCustomCantidad}
                                disabled={disabledCustomCantidad}
                            />
                        </div>
                    </div>
                </div>
                
                <div class="mb-5">
                    <label for="tallas" class="form-label d-block">Talla:</label>
                    <div class="row row-cols-auto g-2">
                        <div class="col">
                            <input type="radio" bind:group="{medida}" value={18} class="btn-check" name="tallas" id="option6" checked autocomplete="off">
                            <label class="btn btn-sm btn-outline-info px-1 px-md-2 px-lg-3" for="option6">18 cm</label>
                        </div>

                        <div class="col">
                            <input type="radio" bind:group="{medida}" value={23} class="btn-check" name="tallas" id="option7" autocomplete="off">
                            <label class="btn btn-sm btn-outline-info px-1 px-md-2 px-lg-3" for="option7">23 cm</label>
                        </div>
                    </div>
                </div>

                <div>
                    <div class="col-12 col-sm-12 col-md-3 d-grid">
                        <button class="btn btn-secondary px-5" on:click="{handleCotizacionModal}">
                            Cotizar
                        </button>
                    </div>
                </div>
            </div>
        </div>

        <div class="modal" bind:this={modal}>
            <div class="modal-dialog modal-lg">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="m-0">Formulario de cotización</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true"></span>
                        </button>
                    </div>

                    <div class="modal-body">
                        <form on:submit|preventDefault={handleSubmit}>
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="mb-3">
                                        <label class="form-label" for="nombre">Nombre *</label>
                                        <input type="text" name="nombre" id="nombre" class="form-control form-control-sm text-center" bind={cotizacion.email}>
                                    </div>
                
                                    <div class="mb-3">
                                        <label class="form-label" for="email">Email *</label>
                                        <input type="text" name="email" id="email" class="form-control form-control-sm text-center" bind={cotizacion.email}>
                                    </div>

                                    <div class="mb-3">
                                        <label class="form-label" for="imagen">Imagen de impresión</label>
                                        <input type="file" name="imagen" id="imagen" class="form-control form-control-sm" bind={cotizacion.imagen}>
                                    </div>
                
                                    <div class="mb-3">
                                        <label class="form-label" for="adicional">Información adicional</label>
                                        <textarea name="adicional" id="adicional" rows="5" class="form-control form-control-sm text-center" bind={cotizacion.informacionAdicional}></textarea>
                                    </div>
                                </div>

                                <div class="col-md-6">
                                    <div class="mb-3">
                                        <label class="form-label" for="direccion">Dirección *</label>
                                        <input type="text" name="direccion" id="direccion" class="form-control form-control-sm text-center" bind={cotizacion.direccion}>
                                    </div>
                
                                    <div class="mb-3">
                                        <label class="form-label" for="telefono">Teléfono *</label>
                                        <input type="text" name="telefono" id="telefono" class="form-control form-control-sm text-center" bind={cotizacion.telefono}>
                                    </div>
                
                                    <div class="mb-3">
                                        <label class="form-label" for="estado">Estado *</label>
                                        <input type="text" name="estado" id="estado" class="form-control form-control-sm">
                                        <!-- <select name="estado" class="form-select  form-select-sm" bind:value="{cotizacion.estado}">
                                            <option value="-1">Seleccionar estado</option>
                                            {#each estados as estado (estado.clave)}
                                                <option value="{estado.nombre}">{estado.nombre}</option>
                                            {/each}
                                        </select>                                         -->
                                    </div>

                                    <div class="mb-3">
                                        <label class="form-label" for="ciudad">Ciudad *</label>
                                        <input type="text" name="ciudad" id="ciudad" class="form-control form-control-sm">
                                        <!-- <select name="municipio" class="form-select form-select-sm" bind:value={cotizacion.municipio}>
                                            <option value="-1"> Seleccionar municipio </option>
                                            {#each municipios as municipio (municipio.clave)}
                                                <option value="{municipio.nombre}">{municipio.nombre}</option>
                                            {/each}
                                        </select> -->
                                    </div>
                
                                    <div class="mb-3">
                                        <label class="form-label" for="cp">Código Postal *</label>
                                        <input type="text" name="cp" id="cp" class="form-control form-control-sm text-center" bind={cotizacion.codigoPostal}>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="text-end">
                                <button type="submit" class="btn btn-primary">Enviar</button>
                            </div>
                        </form>
                    </div>
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