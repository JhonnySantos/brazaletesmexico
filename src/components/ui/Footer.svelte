<script>
    import { link } from 'svelte-routing';
</script>

<footer class="bg-primary text-white pt-3 mt-5">
    <div class="container">
    <div class="row px-3">
        <div class="col-12 col-sm-12 col-md-12 col-lg-4 mb-3">
            <p><strong class="fw-bold">BRAZALETES MÉXICO</strong></p>
            <address class="small mb-3">
                Supermanzana 301, Manzana 4, Lote 5, Central de Abastos, 77536, Cancún, Quintana Roo
            </address>
            <div class="row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-1 g-3">
                <div class="col">
                    <strong class="d-block fw-bold">Cancún</strong>
                    <span>
                        Oficina: <a class="link-light text-decoration-none" href="tel:9982068980">(998) 206-8980</a>
                    </span>
                    <span class="d-block">
                        WhatsApp: <a class="link-light text-decoration-none" target="_blank" href="https://wa.me/529982404801?text=Estoy%20interesado%20en%20los%20brazaletes">(998) 240-4801</a>
                    </span>
                </div>
                <div class="col">
                    <strong class="d-block fw-bold">CDMX</strong>
                    <span class="d-block">
                        Oficina: <a class="link-light text-decoration-none" href="tel:5552929108">(55) 529-29108</a>
                    </span>
                    <span class="d-block">
                        WhatsApp:  <a class="link-light text-decoration-none" target="_blank" href="https://wa.me/525518081015?text=Estoy%20interesado%20en%20los%20brazaletes">(551) 808-1015</a>
                    </span>
                </div>
            </div>
        </div>

        <div class="col-12 col-sm-12 col-md-6 col-lg-4 mb-3">
            <p><strong class="fw-bold">VÍNCULOS DE INTERÉS</strong></p>
            <ul class="list-unstyled">
                <li class="mb-2 small">
                    <a href='/brazaletes' use:link class="link-light text-decoration-none">Brazalete</a>
                </li>
                <li class="mb-2 small">
                    <a href='/rfid' use:link class="link-light text-decoration-none">Soluciones RFID</a>
                </li>
                <li class="mb-2 small">
                    <a href='/ecofriendly' use:link class="link-light text-decoration-none">Ecofriendly</a>
                </li>
                <li class="mb-2 small">
                    <a href='/hologramas' use:link class="link-light text-decoration-none">Hologramas</a>
                </li>
                <li class="mb-2 small">
                    <a href='/promocionales' use:link class="link-light text-decoration-none">Promocionales</a>
                </li>
            </ul>
        </div>
        
        <div class="col-12 col-sm-12 col-md-6 col-lg-4 mb-3">
            <p><strong class="fw-bold">SÍGUENOS</strong></p>
            <ul class="list-unstyled">
                <li class="mb-2 small">
                    <a class="link-light text-decoration-none" target="_blank" href="https://twitter.com/BrazaletesMex">
                        <i class="fab fa-twitter-square fa-lg"></i> @BrazaletesMex
                    </a>
                </li>
                <li class="mb-2 small">
                    <a class="link-light text-decoration-none" target="_blank" href="https://www.facebook.com/brazaletesmex/">
                        <i class="fab fa-facebook-square fa-lg"></i> @brazaletesmex
                    </a>
                </li>
                <li class="mb-2 small">
                    <a class="link-light text-decoration-none" target="_blank" href="https://www.instagram.com/brazaletesmexico/">
                        <i class="fab fa-instagram-square fa-lg"></i> @brazaletesmexico
                    </a>
                </li>
                <li class="mb-2 small">
                    <a class="link-light text-decoration-none" target="_blank" href="https://www.youtube.com/channel/UCljRrLXh0Ajd9ib0WYcb29A">
                        <i class="fab fa-youtube-square fa-lg"></i> Brazaletes México SA DE CV
                    </a>
                </li>
                <li class="small">
                    <a class="link-light text-decoration-none" target="_blank" href="https://mx.linkedin.com/company/brazaletes-mexico">
                        <i class="fab fa-linkedin fa-lg"></i> Brazaletes México
                    </a>
                </li>
            </ul>
        </div>
    </div>
    </div>
</footer>