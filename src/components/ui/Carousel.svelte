<div>
    <div
        id="carouselExampleControls"
        class="carousel slide"
        data-bs-ride="carousel"
    >
        <div class="carousel-inner">
            <div class="carousel-item active" data-bs-interval="10000">
                <img
                    src="https://www.brazaletesmexico.com/wp-content/uploads/brazaletes-en-mexico-de-seguridad-tyvek2.jpg"
                    class="card-img" 
                    alt=""
                />
                <div class="card-img-overlay container">
                    <div class="row h-100 align-items-center">
                        <div class="col-12 col-md-6 text-end bounce">
                            <img src="https://www.brazaletesmexico.com/wp-content/uploads/brazaletes-mexico-tyvek.png" class="img-fluid" alt="">
                        </div>
                        <div class="col-12 col-md-6 text-center text-md-start bounce">
                            <h1 class="display-3 text-primary fw-bold">Brazaletes <br> Full Color</h1>
                            <h5 class="fw-bold">Promociona tu evento mientras lo controlas...</h5>
                            <button class="btn btn-secondary shadow  mt-3">Ver más</button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="carousel-item" data-bs-interval="10000">
                <img
                    src="https://www.brazaletesmexico.com/wp-content/uploads/banner-tienda-en-linea.jpg"
                    class="card-img"
                    alt=""
                />
                <div class="card-img-overlay container px-3">
                    <div class="row h-100 align-items-center">
                        <div class="col-12 col-md-6 pe-lg-5 text-center text-md-start bounce">
                            <h1 class="display-4 text-primary fw-bold">Diseños preestablecidos</h1>
                            <h5 class="fw-bold">Rápidos tiempos de entrega</h5>
                            <button class="btn btn-secondary shadow mt-3">Comprar</button>
                        </div>
                        <div class="col-12 col-md-6 ps-md-5 ps-lg-3 bounce">
                            <img src="https://www.brazaletesmexico.com/wp-content/uploads/OBJETO-TIENDA-ONLINE.png" class="img-fluid" alt="">
                        </div>
                    </div>
                </div>
            </div>
            <div class="carousel-item" data-bs-interval="10000">
                <img
                    src="https://www.brazaletesmexico.com/wp-content/uploads/brazaletes-rfdi-en-mexico-seguridad.jpg"
                    class="card-img"
                    alt=""
                />
                <div class="card-img-overlay container px-3 px-md-7">
                    <div class="row h-100 align-items-center">
                        <div class="col-12 col-md-9 col-lg-8 bg-dark-transparent bounce">
                            <h1 class="display-4 text-white fw-bold">Brazaletes RFID</h1>
                            <h4 class="text-white">Tecnología en Radiofrecuencia como:</h4>
                            <ul class="text-white">
                                <li>Abrir cerraduras</li>
                                <li>Centro de consumo</li>
                                <li>Identificación de cliente</li>
                            </ul>
                            <div class="text-center mb-3">
                                <button class="btn btn-secondary shadow">Ver más</button>
                            </div>
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

</style>