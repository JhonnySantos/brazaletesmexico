<script>
  import { link } from "svelte-routing";
  import FormSuscribirse from "./FormSuscribirse.svelte";
  const currentYear = new Date().getFullYear();
</script>

<footer class="border-top border-2 pt-3">
  <div class="container">
    <div class="row px-3">
      <div class="col-12 col-sm-12 col-md-12 col-lg-4 mb-5 mb-lg-3">
        <p><strong class="fw-bold">BRAZALETES MÉXICO</strong></p>
        <address class="small mb-3">
          Supermanzana 301, Manzana 4, Lote 5, Central de Abastos, 77536,
          Cancún, Quintana Roo
        </address>
        <div
          class="row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-1 g-3"
        >
          <div class="col">
            <small><strong class="d-block fw-bold">Cancún</strong></small>
            <span>
              Oficina: <a
                class="link-dark text-decoration-none"
                href="tel:9982068980">(998) 206-8980</a
              >
            </span>
            <span class="d-block">
              WhatsApp: <a
                class="link-dark text-decoration-none"
                target="_blank"
                href="https://wa.me/529982404801?text=Estoy%20interesado%20en%20los%20brazaletes"
                >(998) 240-4801</a
              >
            </span>
          </div>
          <div class="col">
            <small><strong class="d-block fw-bold">CDMX</strong></small>
            <span class="d-block">
              Oficina: <a
                class="link-dark text-decoration-none"
                href="tel:5552929108">(55) 529-29108</a
              >
            </span>
            <span class="d-block">
              WhatsApp: <a
                class="link-dark text-decoration-none"
                target="_blank"
                href="https://wa.me/525518081015?text=Estoy%20interesado%20en%20los%20brazaletes"
                >(551) 808-1015</a
              >
            </span>
          </div>
        </div>
      </div>

      <div class="col-12 col-sm-12 col-md-6 col-lg-3 mb-0">
        <p><strong class="fw-bold">SÍGUENOS</strong></p>
        <ul class="list-unstyled">
          <li class="mb-2 small">
            <a
              class="link-dark text-decoration-none"
              target="_blank"
              href="https://www.facebook.com/brazaletesmex/"
            >
              <i class="fab fa-facebook-f fa-lg" /> @brazaletesmex
            </a>
          </li>
          <li class="mb-2 small">
            <a
              class="link-dark text-decoration-none"
              target="_blank"
              href="https://www.instagram.com/brazaletesmexico/"
            >
              <i class="fab fa-instagram fa-lg" /> @brazaletesmexico
            </a>
          </li>
          <li class="mb-2 small">
            <a
              class="link-dark text-decoration-none"
              target="_blank"
              href="https://mx.linkedin.com/company/brazaletes-mexico"
            >
              <i class="fab fa-linkedin fa-lg" /> Brazaletes México
            </a>
          </li>
          <li class="mb-4 small">
            <a
              class="link-dark text-decoration-none"
              target="_blank"
              href="https://www.youtube.com/channel/UCljRrLXh0Ajd9ib0WYcb29A"
            >
              <i class="fab fa-youtube fa-lg" /> Brazaletes México SA DE CV
            </a>
          </li>
          <li class="small">
            <FormSuscribirse />
          </li>
        </ul>
      </div>

      <div
        class="col-12 col-sm-12 col-md-4 col-lg-3 d-none d-sm-none d-md-block mb-3 ps-3 ps-xl-5"
      >
        <p><strong class="fw-bold">VÍNCULOS DE INTERÉS</strong></p>
        <ul class="list-unstyled">
          <li class="mb-2 small">
            <a
              href="/brazaletes"
              use:link
              class="link-dark text-decoration-none">Brazalete</a
            >
          </li>
          <li class="mb-2 small">
            <a href="/rfid" use:link class="link-dark text-decoration-none"
              >Soluciones RFID</a
            >
          </li>
          <li class="mb-2 small">
            <a
              href="/ecofriendly"
              use:link
              class="link-dark text-decoration-none">Ecofriendly</a
            >
          </li>
          <li class="mb-2 small">
            <a
              href="/hologramas"
              use:link
              class="link-dark text-decoration-none">Hologramas</a
            >
          </li>
          <li class="mb-2 small">
            <a
              href="/promocionales"
              use:link
              class="link-dark text-decoration-none">Promocionales</a
            >
          </li>
        </ul>
      </div>

      <div class="col-12 col-sm-12 col-md-12 col-lg-2 mb-3 d-none d-lg-block">
        <p><strong class="fw-bold">PAGUE CON</strong></p>
        <div>
          <a href="/npago/home.php" class="hover-link">
            <i class="fab fa-2x fa-cc-visa me-2" />
          </a>
          <a href="/npago/home.php" class="hover-link">
            <i class="fab fa-2x fa-cc-mastercard" />
          </a>
        </div>
      </div>
    </div>
  </div>

  <nav class="bg-primary text-white py-3">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-12 col-md-12 col-lg-7">
          <div class="row row-cols-1 g-1 mb-2 mb-md-3 mb-lg-1">
            <div class="col text-center text-lg-start">
              <ul class="list-inline mb-0">
                <li class="list-inline-item small">
                  <a href="/" class="link-light text-decoration-none" use:link
                    >Inicio</a
                  >
                </li>
                <li class="list-inline-item small">
                  <a
                    href="/nosotros"
                    class="link-light text-decoration-none"
                    use:link>Nosotros</a
                  >
                </li>
                <li class="list-inline-item small">
                  <a
                    href="/tienda"
                    class="link-light text-decoration-none"
                    use:link>Tienda</a
                  >
                </li>
                <li class="list-inline-item small">
                  <a
                    href="/blog"
                    class="link-light text-decoration-none"
                    use:link>Blog</a
                  >
                </li>
                <li class="list-inline-item small">
                  <a
                    href="/contacto"
                    class="link-light text-decoration-none"
                    use:link>Contacto</a
                  >
                </li>
                <li class="list-inline-item small d-lg-none">
                  <a
                    href="/aviso-de-privacidad"
                    class="link-light text-decoration-none"
                    use:link>Privacidad</a
                  >
                </li>
                <li class="list-inline-item small d-lg-none">
                  <a
                    href="/terminos-de-uso-y-condiciones"
                    class="link-light text-decoration-none"
                    use:link>Términos de uso</a
                  >
                </li>
              </ul>
            </div>
            <div class="col text-center text-lg-start">
              <small class="d-inline-block texto-light"
                >Todos los Derechos Reservados {currentYear}
              </small>
              <small class="d-inline-block"
                >© <strong>Brazaletes México S.A. de C.V.</strong></small
              >
            </div>
          </div>
        </div>
        <div class="col text-center text-lg-end">
          <ul class="list-inline mb-0">
            <li class="list-inline-item align-middle d-none d-lg-inline">
              <a
                href="/aviso-de-privacidad"
                class="link-light text-decoration-none"
                use:link>Privacidad</a
              >
            </li>
            <li class="list-inline-item align-middle d-none d-lg-inline">
              <a
                href="/terminos-de-uso-y-condiciones"
                class="link-light text-decoration-none"
                use:link>Términos de uso</a
              >
            </li>
            <li class="list-inline-item align-middle">
              <i class="fab fa-2x fa-cc-visa link-light" />
            </li>
            <li class="list-inline-item align-middle">
              <i class="fab fa-2x fa-cc-mastercard link-light" />
            </li>
            <li class="list-inline-item align-middle">
              <i class="fab fa-2x fa-cc-amex link-light" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
</footer>

<style>
  .texto-light {
    color: rgba(255, 255, 255, 0.75);
  }

  .link-dark:hover,
  .link-dark:focus {
    font-weight: 400 !important;
  }

  .hover-link {
    color: #55595c !important;
  }

  .hover-link:hover,
  .hover-link:focus {
    color: #919aa1 !important;
  }
</style>
