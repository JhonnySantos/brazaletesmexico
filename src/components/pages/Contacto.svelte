<script>
  import { onMount } from "svelte";
  import { currentSection } from "../../stores/stores";

  import Section from "../ui/Section.svelte";
  import Template from "../ui/Template.svelte";

  $currentSection = null;

  onMount(() => {
    window.scrollTo(0, 0);
  });
</script>

<Template>
  <div class="container my-5">

    <Section name="Contáctanos" />

    <div class="row mb-3">

      <div class="col-12 col-sm-12 col-md-6 col-lg-6 mb-3">
        <div class="card h-100">
          <div class="card-body py-4">
            <h5 class="card-title mb-3">Sucursal Cancún</h5>
            <div class="row">
              <div class="col-12 col-lg-6 mb-3">
                <p class="card-text mb-1">
                  Oficina: <a class="link-dark text-decoration-none" href="tel:9982068980"><strong>(998) 206-8980</strong></a>
                </p>
                <p class="card-text mb-1">
                  WhatsApp: <a class="link-dark text-decoration-none" target="_blank" href="https://wa.me/529982404801?text=Estoy%20interesado%20en%20los%20brazaletes"><strong>(998) 240-4801</strong></a>
                </p>
              </div>
              <div class="col-12 col-lg-6">
                <p class="card-text mb-0">Abiertos de Lunes – Viernes</p>
                <p class="card-text">9 a.m. – 6:00 p.m.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="col-12 col-sm-12 col-md-6 col-lg-6 mb-3">
        <div class="card h-100">
          <div class="card-body py-4">
            <h5 class="card-title mb-3">Sucursal Ciudad de México</h5>
            <div class="row">
              <div class="col-12 col-lg-6 mb-3">
                <p class="card-text mb-1">
                  Oficina: <a class="link-dark text-decoration-none" href="tel:5552929108"><strong>(55) 529-29108</strong></a>
                </p>
                <p class="card-text mb-1">
                  WhatsApp:  <a class="link-dark text-decoration-none" target="_blank" href="https://wa.me/525518081015?text=Estoy%20interesado%20en%20los%20brazaletes"><strong>(551) 808-1015</strong></a>
                </p>
              </div>
              <div class="col-12 col-lg-6">
                <p class="card-text mb-0">Abiertos de Lunes – Viernes</p>
                <p class="card-text">9 a.m. – 6:00 p.m.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>

    <div class="row">
      <div class="col">
        <div class="card shadow">
          <div class="card-body px-3 px-lg-5 py-5">
            <form class="row">

                <div class="col-md-6">

                  <div class="mb-3">
                    <label class="form-label" for="nombre">Nombre *</label>
                    <input
                      type="text"
                      required
                      name="nombre"
                      id="nombre"
                      class="form-control form-control-sm text-center"
                    />
                  </div>

                  <div class="mb-3">
                    <label class="form-label" for="telefono">Teléfono *</label>
                    <input
                      type="text"
                      required
                      name="telefono"
                      id="telefono"
                      class="form-control form-control-sm text-center"
                    />
                  </div>

                  <div class="mb-3">
                    <label class="form-label" for="email">Email *</label>
                    <input
                      type="text"
                      required
                      name="email"
                      id="email"
                      class="form-control form-control-sm text-center"
                    />
                  </div>

                  <div class="mb-3">
                    <label class="form-label" for="adicional"
                      >Información adicional</label
                    >
                    <textarea
                      name="informacionAdicional"
                      id="informacionAdicional"
                      rows="5"
                      class="form-control form-control-sm"
                    />
                  </div>

                  <div class="mb-3">
                    <label class="form-label" for="imagen"
                      >Imagen de impresión</label
                    >
                    <input
                      type="file"
                      name="imagenImpresion"
                      id="imagenImpresion"
                      class="form-control form-control-sm"
                    />
                  </div>

                </div>

                <div class="col-md-6">

                  <div class="mb-3">
                    <label for="interes" class="form-label">Tipo de brazalete *</label>
                    <select class="form-select form-select-sm" name="interes" id="interes" required>
                      <option disabled selected value="">Seleccione un tipo</option>
                      <option value="1">Brazaletes de Tyvek</option>
                      <option value="2">Brazaletes de Vinil</option>
                      <option value="3">Brazaletes Holográficos</option>
                      <option value="4">Brazaletes Hospitalarios</option>
                      <option value="5">Brazaletes de Silicón</option>
                      <option value="6">Brazaletes de Tela</option>
                      <option value="7">Brazaletes Artesanales</option>
                    </select>
                  </div>

                  <div class="mb-3">
                    <label for="origen" class="form-label">Origen *</label>
                    <select class="form-select form-select-sm" name="origen" id="origen" required>
                      <option disabled selected value="">¿Cómo llegó a nosotros?</option>
                      <option value="google">Google</option>
                      <option value="facebook">Facebook</option>
                      <option value="instagram">Instagram</option>
                      <option value="twitter">Twitter</option>
                      <option value="internet">Internet</option>
                      <option value="conocido">Un conocido</option>
                      <option value="otro">Otro</option>
                    </select>
                  </div>

                  <div class="mb-3">
                    <label class="form-label" for="estado">Estado *</label>
                    <select class="form-select form-select-sm" name="estado" id="estado" required>
                      <option value="" selected disabled>Seleccione</option>
                      <option value="AGS">AGUASCALIENTES</option>
                      <option value="BC">BAJA CALIFORNIA</option>
                      <option value="BCS">BAJA CALIFORNIA SUR</option>
                      <option value="CHI">CHIHUAHUA</option>
                      <option value="CHS">CHIAPAS</option>
                      <option value="CMP">CAMPECHE</option>
                      <option value="CMX">CIUDAD DE MEXICO</option>
                      <option value="COA">COAHUILA</option>
                      <option value="COL">COLIMA</option>
                      <option value="DGO">DURANGO</option>
                      <option value="GRO">GUERRERO</option>
                      <option value="GTO">GUANAJUATO</option>
                      <option value="HGO">HIDALGO</option>
                      <option value="JAL">JALISCO</option>
                      <option value="MCH">MICHOACAN</option>
                      <option value="MEX">ESTADO DE MEXICO</option>
                      <option value="MOR">MORELOS</option>
                      <option value="NAY">NAYARIT</option>
                      <option value="NL">NUEVO LEON</option>
                      <option value="OAX">OAXACA</option>
                      <option value="PUE">PUEBLA</option>
                      <option value="QR">QUINTANA ROO</option>
                      <option value="QRO">QUERETARO</option>
                      <option value="SIN">SINALOA</option>
                      <option value="SLP">SAN LUIS POTOSI</option>
                      <option value="SON">SONORA</option>
                      <option value="TAB">TABASCO</option>
                      <option value="TLX">TLAXCALA</option>
                      <option value="TMS">TAMAULIPAS</option>
                      <option value="VER">VERACRUZ</option>
                      <option value="YUC">YUCATAN</option>
                      <option value="ZAC">ZACATECAS</option>
                    </select>
                  </div>

                  <div class="mb-3">
                    <label class="form-label" for="ciudad">Ciudad *</label>
                    <input
                      type="text"
                      required
                      name="ciudad"
                      id="ciudad"
                      class="form-control form-control-sm text-center"
                    />
                  </div>

                  <div class="mb-3">
                    <label class="form-label" for="cp">Código Postal *</label>
                    <input
                      type="text"
                      required
                      name="codigoPostal"
                      id="codigoPostal"
                      class="form-control form-control-sm text-center"
                    />
                  </div>

                  <div class="mb-3">
                    <label class="form-label" for="direccion">Dirección *</label
                    >
                    <input
                      type="text"
                      required
                      name="direccion"
                      id="direccion"
                      class="form-control form-control-sm text-center"
                    />
                  </div>

                </div>

                <div>
                  <button type="submit" class="btn btn-primary px-5">Enviar</button>
                </div>

            </form>
          </div>
        </div>
      </div>
    </div>

  </div>
</Template>

<style>
  .link-dark:hover, .link-dark:focus {
    font-weight: 400 !important;
  }
</style>