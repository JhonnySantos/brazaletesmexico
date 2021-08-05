<script>
    import { onMount } from "svelte";
    import { apiHost } from "../../stores/stores.js";

    import Template from "../ui/Template.svelte";
    import Loading from "../ui/Loading.svelte";

    export let slug = "";

    let brazalete = {};

    let bsModal;
    let htmlModal;
    let formCotizacion = null;

    let errorParams = false;
    let customCantidad = null;
    let cotizacionEnviada = false;
    let cotizacionFallida = false;
    let enviandoCotizacion = false;
    let disabledCustomCantidad = false;

    let medida = 18;
    let cantidad = 100;
    let imagenImpresion = null;
    let informacionAdicional = null;
    let nombre = localStorage.getItem("nombre") ?? "";
    let email = localStorage.getItem("email") ?? "";
    let direccion = localStorage.getItem("direccion") ?? "";
    let telefono = localStorage.getItem("telefono") ?? "";
    let estado = localStorage.getItem("estado") ?? "";
    let ciudad = localStorage.getItem("ciudad") ?? "";
    let codigoPostal = localStorage.getItem("codigoPostal") ?? "";

    $: disabledCustomCantidad = cantidad === -1 ? false : true;
    $: cantidad !== -1 && (customCantidad = null);

    const handleSubmit = async () => {
        try {
            enviandoCotizacion = true;

            const params = {
                cantidad: +cantidad === -1 ? customCantidad : cantidad,
                medida,
                nombre,
                email,
                direccion,
                telefono,
                estado,
                ciudad,
                codigoPostal,
            };

            errorParams = Object.values(params).some((value) => {
                [null, undefined, "", 0].includes(value) && console.log(value);
                return [null, undefined, "", 0].includes(value);
            });

            if (!errorParams) {
                setLocalStorageParams(params);
                const fd = obtenerFormDataCotizacion(params);

                const response = await fetch(`${$apiHost}/cotizaciones/`, {
                    method: "POST",
                    body: fd,
                });

                const { error } = await response.json();

                cotizacionFallida = error;
                cotizacionEnviada = !error;
            }
        } catch (error) {
            console.log(error);
        }

        setTimeout(() => {
            cotizacionEnviada && bsModal.hide();

            errorParams = false;
            cotizacionEnviada = false;
            cotizacionFallida = false;
            enviandoCotizacion = false;
        }, 3000);
    };

    const obtenerFormDataCotizacion = (params) => {
        const fd = new FormData(formCotizacion);

        Object.keys(params).forEach((key) => {
            !fd.has(key) && fd.append(`${key}`, params[key]);
        });

        return fd;
    };

    const setLocalStorageParams = (params) => {
        Object.keys(params).forEach((key) => {
            localStorage.setItem(`${key}`, params[key]);
        });
    };

    const handleModalCotizacion = () => {
        bsModal = new bootstrap.Modal(htmlModal, {
            backdrop: "static",
            keyboard: false,
        });

        bsModal.show();
    };

    const obtenerBrazalete = async () => {
        let response = await fetch(`${$apiHost}/brazaletes/one/${slug}`);

        if (response.ok) {
            return await response.json();
        } else {
            throw new Error("Se ha producido un error interno.");
        }
    };

    onMount(() => {
        brazalete = obtenerBrazalete();
    });
</script>

<Template>
    {#await brazalete}
        <Loading />
    {:then brazalete}
        <div class="container my-5">
            <div class="row">
                <div class="col-12 col-sm-12 col-md-5">
                    <img
                        src={brazalete.img}
                        alt="Brazalete con gel antibacterial Amarillo Transparente sin impresión"
                        class="img-fluid"
                    />
                </div>
                <div class="col-12 col-sm-12 col-md-7">
                    <h4 class="fw-bold mb-1">{brazalete.descripcion}</h4>
                    <h6 class="mb-3 text-muted">
                        {#if brazalete.sku}
                            <strong class="fw-bold">SKU:</strong>{brazalete.sku}
                        {/if}
                    </h6>
                    <p>
                        {@html brazalete.descripcion_larga}
                    </p>
                    <h5 class="fw-bold my-4 text-primary">
                        ${brazalete.precio_min} + I.V.A
                    </h5>
                    <hr />
                    <div class="mb-3">
                        <label for="paquetes" class="form-label d-block"
                            >Paquete de:</label
                        >
                        <div class="row row-cols-auto g-3">
                            <div class="col">
                                <input
                                    type="radio"
                                    bind:group={cantidad}
                                    class="btn-check"
                                    name="paquetes"
                                    id="option1"
                                    autocomplete="off"
                                    checked
                                    value={100}
                                />
                                <label
                                    class="btn btn-sm btn-outline-primary px-1 px-md-2 px-lg-3"
                                    for="option1">100 pieza</label
                                >
                            </div>

                            <div class="col">
                                <input
                                    type="radio"
                                    bind:group={cantidad}
                                    class="btn-check"
                                    name="paquetes"
                                    id="option2"
                                    autocomplete="off"
                                    value={1000}
                                />
                                <label
                                    class="btn btn-sm btn-outline-primary px-1 px-md-2 px-lg-3"
                                    for="option2">1,000 piezas</label
                                >
                            </div>

                            <div class="col">
                                <input
                                    type="radio"
                                    bind:group={cantidad}
                                    class="btn-check"
                                    name="paquetes"
                                    id="option3"
                                    autocomplete="off"
                                    value={10000}
                                />
                                <label
                                    class="btn btn-sm btn-outline-primary px-1 px-md-2 px-lg-3"
                                    for="option3">10,000 piezas</label
                                >
                            </div>

                            <div class="col">
                                <input
                                    type="radio"
                                    bind:group={cantidad}
                                    class="btn-check"
                                    name="paquetes"
                                    id="option4"
                                    autocomplete="off"
                                    value={-1}
                                />
                                <label
                                    class="btn btn-sm btn-outline-primary px-1 px-md-2 px-lg-3"
                                    for="option4">OTROS</label
                                >
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
                        <label for="tallas" class="form-label d-block"
                            >Talla:</label
                        >
                        <div class="row row-cols-auto g-2">
                            <div class="col">
                                <input
                                    type="radio"
                                    bind:group={medida}
                                    value={18}
                                    class="btn-check"
                                    name="tallas"
                                    id="option6"
                                    checked
                                    autocomplete="off"
                                />
                                <label
                                    class="btn btn-sm btn-outline-info px-1 px-md-2 px-lg-3"
                                    for="option6">18 cm</label
                                >
                            </div>

                            <div class="col">
                                <input
                                    type="radio"
                                    bind:group={medida}
                                    value={23}
                                    class="btn-check"
                                    name="tallas"
                                    id="option7"
                                    autocomplete="off"
                                />
                                <label
                                    class="btn btn-sm btn-outline-info px-1 px-md-2 px-lg-3"
                                    for="option7">23 cm</label
                                >
                            </div>
                        </div>
                    </div>

                    <div>
                        <div class="col-12 col-sm-12 col-md-3 d-grid">
                            <button
                                class="btn btn-secondary px-5"
                                on:click={handleModalCotizacion}
                            >
                                Cotizar
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div class="modal" bind:this={htmlModal}>
                <div class="modal-dialog modal-dialog-centered modal-lg">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="m-0">Formulario de cotización</h5>
                            <button
                                type="button"
                                class="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            >
                                <span aria-hidden="true" />
                            </button>
                        </div>

                        <div class="modal-body">
                            <form
                                bind:this={formCotizacion}
                                class:d-none={enviandoCotizacion}
                                on:submit|preventDefault={handleSubmit}
                            >
                                <div class="row">
                                    <div class="col-md-6">
                                        <div class="mb-3">
                                            <label
                                                class="form-label"
                                                for="nombre">Nombre *</label
                                            >
                                            <input
                                                type="text"
                                                required
                                                name="nombre"
                                                id="nombre"
                                                class="form-control form-control-sm text-center"
                                                bind:value={nombre}
                                            />
                                        </div>

                                        <div class="mb-3">
                                            <label
                                                class="form-label"
                                                for="email">Email *</label
                                            >
                                            <input
                                                type="text"
                                                required
                                                name="email"
                                                id="email"
                                                class="form-control form-control-sm text-center"
                                                bind:value={email}
                                            />
                                        </div>

                                        <div class="mb-3">
                                            <label
                                                class="form-label"
                                                for="imagen"
                                                >Imagen de impresión</label
                                            >
                                            <input
                                                type="file"
                                                name="imagenImpresion"
                                                id="imagenImpresion"
                                                class="form-control form-control-sm"
                                                bind:value={imagenImpresion}
                                            />
                                        </div>

                                        <div class="mb-3">
                                            <label
                                                class="form-label"
                                                for="adicional"
                                                >Información adicional</label
                                            >
                                            <textarea
                                                name="informacionAdicional"
                                                id="informacionAdicional"
                                                rows="5"
                                                class="form-control form-control-sm"
                                                bind:value={informacionAdicional}
                                            />
                                        </div>
                                    </div>

                                    <div class="col-md-6">
                                        <div class="mb-3">
                                            <label
                                                class="form-label"
                                                for="direccion"
                                                >Dirección *</label
                                            >
                                            <input
                                                type="text"
                                                required
                                                name="direccion"
                                                id="direccion"
                                                class="form-control form-control-sm text-center"
                                                bind:value={direccion}
                                            />
                                        </div>

                                        <div class="mb-3">
                                            <label
                                                class="form-label"
                                                for="telefono">Teléfono *</label
                                            >
                                            <input
                                                type="text"
                                                required
                                                name="telefono"
                                                id="telefono"
                                                class="form-control form-control-sm text-center"
                                                bind:value={telefono}
                                            />
                                        </div>

                                        <div class="mb-3">
                                            <label
                                                class="form-label"
                                                for="estado">Estado *</label
                                            >
                                            <input
                                                type="text"
                                                required
                                                name="estado"
                                                id="estado"
                                                class="form-control form-control-sm text-center"
                                                bind:value={estado}
                                            />
                                        </div>

                                        <div class="mb-3">
                                            <label
                                                class="form-label"
                                                for="ciudad">Ciudad *</label
                                            >
                                            <input
                                                type="text"
                                                required
                                                name="ciudad"
                                                id="ciudad"
                                                class="form-control form-control-sm text-center"
                                                bind:value={ciudad}
                                            />
                                        </div>

                                        <div class="mb-3">
                                            <label class="form-label" for="cp"
                                                >Código Postal *</label
                                            >
                                            <input
                                                type="text"
                                                required
                                                name="codigoPostal"
                                                id="codigoPostal"
                                                class="form-control form-control-sm text-center"
                                                bind:value={codigoPostal}
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div class="text-end">
                                    <button
                                        type="submit"
                                        class="btn btn-primary">Enviar</button
                                    >
                                </div>
                            </form>

                            <div class:d-none={!enviandoCotizacion}>
                                {#if cotizacionEnviada}
                                    <Loading
                                        modalBox
                                        icon="fas fa-check-circle fa-4x text-success"
                                        message="Su cotización ha sido enviada. En breve nos pondremos en contacto con usted."
                                    />
                                {:else if cotizacionFallida}
                                    <Loading
                                        modalBox
                                        icon="far fa-times-circle fa-4x text-danger"
                                        message="Ha ocurrido un error al realizar el envio de su cotizacion. Favor de intentarlo más tarde."
                                    />
                                {:else if errorParams}
                                    <Loading
                                        modalBox
                                        icon="far fa-times-circle fa-4x text-danger"
                                        message="Verificar los campos obligatorios (*)"
                                    />
                                {:else}
                                    <Loading
                                        modalBox
                                        icon="fas fa-spinner fa-spin fa-4x text-secondary"
                                        message="Enviando su solicitud de cotización..."
                                    />
                                {/if}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    {/await}
</Template>

<style>
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }

    input[type="number"] {
        -moz-appearance: textfield;
    }
</style>
