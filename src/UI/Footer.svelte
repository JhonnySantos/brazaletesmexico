<script>
    import { link } from 'svelte-routing';
import Ecofriendly from '../pages/secciones/Ecofriendly.svelte';
</script>

<footer class="bg-primary text-white pt-3 mt-5">
    <div class="container">
    <div class="row">
        <div class="col pl-5">
            <p><strong>BRAZALETES MÉXICO</strong></p>
            <address class="small">
                <span class="d-block mb-3">Sm 301, Mza 4, Lote 5, Central de Abastos, 77536, Cancún, Q.R.</span>
                <strong class="d-block">Cancún</strong>
                <span>
                    Oficina: <a class="text-white" href="tel:9982068980">(998) 206-8980</a>
                </span>
                <span class="d-block mb-3">
                    WhatsApp: <a class="text-white" target="_blank" href="https://wa.me/9982404801?text=Estoy%20interesado%20en%20los%20brazaletes">(998) 240-4801</a>
                </span>
                <strong class="d-block">CDMX</strong>
                <span class="d-block">
                    Oficina: <a class="text-white" href="tel:5552929108">(55) 529-29108</a>
                </span>
                <span class="d-block">
                    WhatsApp:  <a class="text-white" target="_blank" href="https://wa.me/5518081015?text=Estoy%20interesado%20en%20los%20brazaletes">(551) 808-1015</a>
                </span>
            </address>
        </div>

        <div class="col">
        <p><strong>VÍNCULOS DE INTERÉS</strong></p>
        <ul class="list-unstyled">
            <li class="mb-2 small">
                <a href='/brazaletes' use:link class="link-light text-white">Brazalete</a>
            </li>
            <li class="mb-2 small">
                <a href='/rfid' use:link class="link-light text-white">Soluciones RFID</a>
            </li>
            <li class="mb-2 small">
                <a href='/ecofriendly' use:link class="link-light text-white">Ecofriendly</a>
            </li>
            <li class="mb-2 small">
                <a href='/hologramas' use:link class="link-light text-white">Hologramas</a>
            </li>
            <li class="mb-2 small">
                <a href='/promocionales' use:link class="link-light text-white">Promocionales</a>
            </li>
            <!-- <li class="small">
                <a class="link-light text-white" href>Shipping</a>
            </li> -->
        </ul>
        </div>
        
        <div class="col">
        <p><strong>SÍGUENOS</strong></p>
        <ul class="list-unstyled">
            <li class="mb-2 small">
                <a class="text-white" target="_blank" href="https://twitter.com/BrazaletesMex">
                    <i class="fab fa-twitter-square fa-lg"></i> @BrazaletesMex
                </a>
            </li>
            <li class="mb-2 small">
                <a class="text-white" target="_blank" href="https://www.facebook.com/brazaletesmex/">
                    <i class="fab fa-facebook-square fa-lg"></i> @brazaletesmex
                </a>
            </li>
            <li class="mb-2 small">
                <a class="text-white" target="_blank" href="https://www.instagram.com/brazaletesmexico/">
                    <i class="fab fa-instagram-square fa-lg"></i> @brazaletesmexico
                </a>
            </li>
            <li class="mb-2 small">
                <a class="text-white" target="_blank" href="https://www.youtube.com/channel/UCljRrLXh0Ajd9ib0WYcb29A">
                    <i class="fab fa-youtube-square fa-lg"></i> Brazaletes México SA DE CV
                </a>
            </li>
            <li class="small">
                <a class="text-white" target="_blank" href="https://mx.linkedin.com/company/brazaletes-mexico">
                    <i class="fab fa-linkedin fa-lg"></i> Brazaletes México
                </a>
            </li>
        </ul>
        </div>
    </div>
    </div>
</footer>