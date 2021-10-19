<script>
    import { imagesPath } from '../../stores/stores';
    import {link} from 'svelte-routing';
</script>

<div>
    <div
        id="carouselExampleControls"
        class="carousel slide"
        data-bs-ride="carousel"
    >
        <div class="carousel-inner">
            <div class="carousel-item active" data-bs-interval="10000">
                <img
                    src={`${$imagesPath}/carousel-bg-1.jpg`}
                    class="card-img" 
                    alt=""
                />
                <div class="card-img-overlay container">
                    <div class="row h-100 align-items-center">
                        <div class="col-12 col-md-6 text-end fade-left">
                            <img src={`${$imagesPath}/carousel-image-1.png`} class="img-fluid" alt="brazaletes-mexico-tyvek">
                        </div>
                        <div class="col-12 col-md-6 text-center text-md-start">
                            <h1 class="display-3 text-primary fw-bold fade-right fade-right-1">Brazaletes <br> Full Color</h1>
                            <h5 class="fw-bold fade-right">Promociona tu evento mientras lo controlas...</h5>
                            <a href="/brazaletes/tyvek" class="btn btn-secondary shadow mt-3 fade-right" use:link>
                                Ver más
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="carousel-item" data-bs-interval="10000">
                <img
                    src={`${$imagesPath}/carousel-bg-2.jpg`}
                    class="card-img"
                    alt="cotizaciones-en-linea"
                />
                <div class="card-img-overlay container-lg px-3 px-md-5">
                    <div class="row h-100 align-items-center">
                        <div class="col-12 col-md-6 pe-lg-5 text-center text-md-start">
                            <h1 class="display-4 text-primary fw-bold fade-left fade-left-1">Diseños preestablecidos</h1>
                            <h5 class="fw-bold fade-left">Rápidos tiempos de entrega</h5>
                            <a href="/tienda" class="btn btn-secondary shadow mt-3 fade-left" use:link>
                                Comprar
                            </a>
                        </div>
                        <div class="col-12 col-md-6 ps-md-5 ps-lg-3 fade-right">
                            <img src={`${$imagesPath}/carousel-image-2.png`} class="img-fluid" alt="cotizaciones-online">
                        </div>
                    </div>
                </div>
            </div>
            <div class="carousel-item" data-bs-interval="10000">
                <img
                    src={`${$imagesPath}/carousel-bg-3.jpg`}
                    class="card-img"
                    alt="brazaletes-rfdi-en-mexico-seguridad"
                />
                <div class="card-img-overlay container-lg px-3 px-md-5">
                    <div class="row h-100 align-items-center bg-dark-transparent">
                            <div class="col-12 col-md-6 fade-left">
                                <h1 class="display-4 text-white fw-bold">Brazaletes RFID</h1>
                                <h4 class="text-white">Tecnología en Radiofrecuencia como:</h4>
                                <ul class="text-white">
                                    <li>Abrir cerraduras</li>
                                    <li>Centro de consumo</li>
                                    <li>Identificación de cliente</li>
                                </ul>
                                <div class="text-center">
                                    <a href="/rfid" class="btn btn-secondary shadow my-1" use:link>
                                        Ver más
                                    </a>
                                </div>
                            </div>
                            <div class="col-12 col-md-6 px-5 fade-right">
                                <img src={`${$imagesPath}/carousel-image-3.png`} class="img-fluid" alt="cotizaciones-online">
                            </div>
                    </div>
                </div>
            </div>
            <div class="carousel-item" data-bs-interval="10000">
                <img
                    src={`${$imagesPath}/carousel-bg-4.jpg`}
                    class="card-img" 
                    alt=""
                />
                <div class="card-img-overlay container">
                    <div class="row h-100 align-items-center justify-content-center">
                        <div class="col-6 px-5 px-lg-3 text-end fade-left">
                            <img src={`${$imagesPath}/carousel-image-4.png`} class="img-fluid" alt="brazaletes-mexico-tyvek">
                        </div>

                        <div class="w-100 d-block d-md-none"></div>

                        <div class="col-12 col-md-6 text-center text-md-start">
                            <h1 class="display-3 text-primary fw-bold fade-right fade-right-1">Brazalete Artesanal</h1>
                            <div class="col-12 col-md-9 col-lg-8 bg-dark-transparent p-4">
                                <h5 class="fw-bold text-white fade-right">Promociona de una manera diferente</h5>
                                <h6 class="text-white-50">Opcional: Chip de Radiofrecuencia</h6>
                            </div>
                            <a href="/brazaletes/artesanales" class="btn btn-secondary shadow mt-3 fade-right" use:link>
                                Ver más
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="carousel-item" data-bs-interval="10000">
                <img
                    src={`${$imagesPath}/carousel-bg-5.jpg`}
                    class="card-img" 
                    alt=""
                />
                <div class="card-img-overlay container">
                    <div class="row h-100 align-items-center">
                        <div class="col-12 col-md-6 ps-lg-5 text-center text-md-start">
                            <h1 class="display-3 text-primary fw-bold fade-right fade-right-1">Tarjetas de PVC</h1>
                            <div class="col-12 col-md-9 col-lg-8 bg-dark-transparent p-4">
                                <h5 class="fw-bold text-white fade-right">Impresión de alta calidad, duraderas, flexibles</h5>
                            </div>
                            <a href="/brazaletes/pvc" class="btn btn-secondary shadow my-1 fade-right" use:link>
                                Ver más
                            </a>
                        </div>
                        <div class="col-12 col-md-6 px-5 px-lg-3 fade-left">
                            <img src={`${$imagesPath}/carousel-image-5.png`} class="img-fluid" alt="brazaletes-mexico-tyvek">
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <button
            class="carousel-control-prev w-5"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="prev"
        >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden d-none">Previous</span>
        </button>
        <button
            class="carousel-control-next w-5"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="next"
        >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden d-none">Next</span>
        </button>
    </div>
</div>

<style>
    .bg-dark-transparent {
        background-color: rgba(0, 0, 0, 0.6) !important;
    }

    .w-5 {
        width: 5% !important;
    }

    /* from 0 up to sm */
    @media (min-width: 0px) and (max-width: 767.98px) {
        .carousel {
            min-height: calc(100vh - 207px) !important;
        }

        .carousel-inner {
            min-height: calc(100vh - 207px) !important;
        }

        .carousel-item {
            min-height: calc(100vh - 207px) !important;
        }

        .carousel-item > img {
            min-height: calc(100vh - 207px) !important;
            object-fit: cover;
        }
    }

    /* from md up to xl */
    @media (min-width: 768px) and (max-width: 1199.98px) {
        .px-md-7 {
            padding-right: 3.5rem !important;
            padding-left: 3.5rem !important;
        }
    }

    .bounce {
        -webkit-animation-name: bounce;
        animation-name: bounce;
        -webkit-animation-duration: 1s;
        animation-duration: 1s; 
    }

    @keyframes bounce {
        0% {transform: translateY(-25%);}
        20% {transform: translateY(15%);}
        40% {transform: translateY(-15%);}
        60% {transform: translateY(5%);}
        80% {transform: translateY(-5%);}
        100% {transform: translateY(0%);}
    }

    .fade-left {
        -webkit-animation-duration: 0.7s;
        -webkit-animation-name: fadeleft;
        -webkit-animation-timing-function: ease-in;
        position: relative;
        animation-name: fadeleft;
        animation-duration: 0.7s;
        animation-timing-function: ease-in;
    }

    .fade-left-1 {
        -webkit-animation-duration: 1s !important;
        -webkit-animation-timing-function: linear;
        animation-duration: 1s !important;
        animation-timing-function: linear;
    }
    @keyframes fadeleft {
        from {
            left: -500px;
            opacity: 0;
        }
        to {
            left: 0;
            opacity: 1;
        }
    }

    .fade-right {
        -webkit-animation-duration: 0.7s;
        -webkit-animation-name: faderight;
        -webkit-animation-timing-function: ease-in;
        position: relative;
        animation-name: faderight;
        animation-duration: 0.7s;
        animation-timing-function: ease-in;
    }

    .fade-right-1 {
        -webkit-animation-duration: 1s !important;
        -webkit-animation-timing-function: linear;
        animation-duration: 1s !important;
        animation-timing-function: linear;
    }
    @keyframes faderight {
        from {
            right: -500px;
            opacity: 0;
        }
        to {
            right: 0;
            opacity: 1;
        }
    }

</style>