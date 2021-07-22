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
    <Section name="Acerca de nosotros" />
    <div class="row">
      <div class="col">
        <div class="clearfix">
          <div class="col-md-5 float-md-end mx-0 mx-lg-3 mb-3">
            <img
              src="https://www.brazaletesmexico.com/wp-content/uploads/pulseras-y-brazaletes-en-mexico.jpg"
              class="img-fluid"
              alt="https://www.brazaletesmexico.com/wp-content/uploads/pulseras-y-brazaletes-en-mexico.jpg"
            />
          </div>
          <h3 class="mb-4">Brazaletes México</h3>
          <p class="mb-4">
            Somos una <strong>empresa mexicana </strong> especializada en la
            fabricación, importación, exportación y distribución de
            <strong>brazaletes de identificación y control de acceso</strong>.
          </p>
          <p class="mb-4">
            El brazalete de identificación se ha convertido en un producto
            noble, necesario, indispensable y muy contemporáneo que cumple con
            los deseos muy particulares de cada persona. De una forma muy peculiar 
            cumple su función al indicar ya sea por <strong>colores, claves, 
            codigo de barras, o diseños</strong> lo que solamente quien lo implementa
            quiere y puede identificar. Actualmente se usan como invitaciones, 
            distintivos, decorativos, promocionales y un sinfín de ocasiones además 
            de ofrecer un gran beneficio económico,así como organización para los usuarios.
          </p>
          <p>
            En Brazaletes México trabajamos día a día especializándonos cada vez
            más en este medio de identificación para cumplir con las mayores
            exigencias de seguridad que cada cliente requiere y así mantenernos
            a la vanguardia.
          </p>
        </div>
      </div>
    </div>
  </div>
</Template>