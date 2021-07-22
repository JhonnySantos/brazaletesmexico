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
    <Section name="Aviso de privacidad" />
    <div class="row">
      <div class="col">
        <p>
          Este <strong>Aviso de Privacidad</strong> forma parte del uso del
          sitio web <strong>www.brazaletesmexico.com</strong>
        </p>
        <p>
          <strong>RESPONSABLE</strong><br />
          <strong>Brazaletes México S.A. de C.V</strong>. es una Sociedad
          Anónima de Capital Variable y estamos ubicados en
          <strong>Cancún, Quintana Roo</strong>. Nuestro teléfono es:
          <strong>01 800 832 9681</strong><br />
          Nuestro Responsable de Protección de Datos y se ubica en el mismo domicilio,
          usted podrá contactarlo en el correo electrónico:
          <strong>ventas@brazaletesmexico.com</strong>
        </p>
        <p>
          Una de las prioridades de <strong
            >Brazaletes México S.A. de C.V</strong
          >
          es respetar la <strong>privacidad</strong> de sus usuarios y mantener segura
          la información y los datos personales que recolecta.
        </p>
        <p>
          Asimismo, <strong>Brazaletes México S.A. de C.V</strong> informará al usuario
          qué tipo de datos recolecta, cómo los almacena, la finalidad del archivo,
          cómo los protege, el alcance de su compromiso de confidencialidad y los
          derechos que éste posee como titular de la información.
        </p>
        <p>
          <strong>DATOS PERSONALES</strong><br />
          En <strong>Brazaletes México S.A. de C.V</strong> recogemos
          información desde varias áreas de nuestros sitio web
          <strong>www.brazaletesmexico.com</strong>
          la información que se solicita es distinta y se almacena en bases de
          datos separadas.<br />
          La información deberá ser veraz y completa.
          <strong>El usuario</strong>
          responderá en todo momento por los datos proporcionados y en ningún
          caso <strong>Brazaletes México S.A. de C.V</strong> será responsable de
          los mismos.
        </p>
        <p>
          Entre la información solicitada al usuario en el <strong
            >www.brazaletesmexico.com</strong
          > se encuentra:
        </p>
        <p>
          En el formulario de Contacto se solicitan los siguientes datos:<br />
          <strong>Nombre completo</strong>:<br />
          <strong>Teléfono</strong>:<br />
          <strong>Dirección de Entrega</strong>:<br />
          <strong>Correo Electrónico</strong>:<br />
          <strong>Ciudad</strong>:<br />
          <strong>Estado</strong>:
        </p>
        <p>
          En el formulario de compras (Carrito de Compras) se solicitan los
          siguientes datos:<br />
          <strong>Nombre</strong>:<br />
          <strong>Apellidos</strong>:<br />
          <strong>Nombre de Empresa</strong>:<br />
          <strong>País</strong>:<br />
          <strong>Dirección</strong>:<br />
          <strong>Localidad/Ciudad</strong>:<br />
          <strong>Región/Provincia</strong>:<br />
          <strong>Código Postal</strong>:<br />
          <strong>Teléfono</strong>:<br />
          <strong>Correo Electrónico</strong>:
        </p>
        <p><strong>QUÉ SON LOS COOKIES Y CÓMO SE UTILIZAN</strong></p>
        <p>
          Los <strong>cookies</strong> son pequeñas piezas de información que
          son enviadas por el sitio Web a su navegador y se almacenan en el
          disco duro de su equipo y se utilizan para determinar sus preferencias
          cuando se conecta a los <strong>servicio de nuestro sitio</strong>,
          así como para rastrear determinados comportamientos o actividades
          llevadas a cabo por usted dentro de nuestros sitios.
        </p>
        <p>
          En algunas secciones de nuestro sitio requerimos que el <strong
            >cliente</strong
          >
          tenga habilitados los <strong>cookies</strong> ya que algunas de las
          funcionalidades requieren de éstas para trabajar. Las
          <strong>cookies</strong>
          nos permiten: <strong>a</strong>) reconocerlo al momento de entrar a
          nuestro sitio y ofrecerle una experiencia personalizada,
          <strong>b</strong>) conocer la configuración personal del sitio
          especificada por usted, por ejemplo, las <strong>cookies</strong> nos
          permiten detectar el ancho de banda que usted ha seleccionado al
          momento de ingresar a la página principal de nuestro sitio, de tal
          forma que sabemos qué tipo de información es aconsejable descargar,
          <strong>c</strong>) calcular el tamaño de nuestra audiencia y medir
          algunos parámetros de tráfico, pues cada navegador que obtiene acceso
          a nuestro sitio adquiere un <strong>cookie</strong> que se usa para
          determinar la frecuencia de uso y las secciones de los sitios
          visitados, reflejando así sus hábitos y preferencias, información que
          nos es útil para mejorar el contenido, los titulares y las promociones
          para los usuarios. Las <strong>cookies</strong> también nos ayudan a
          rastrear algunas actividades, por ejemplo, en algunas de las encuestas
          que lanzamos en línea, podemos utilizar <strong>cookies</strong> para
          detectar si el usuario ya ha llenado la encuesta y evitar desplegarla
          nuevamente, en caso de que lo haya hecho. Sin embargo, las
          <strong>cookies</strong> le permitirán tomar ventaja de las características
          más benéficas que le ofrecemos, por lo que le recomendamos que las deje
          activadas.
        </p>
        <p>
          La utilización de <strong>cookies</strong> no será utilizada para identificar
          a los usuarios, con excepción de los casos en que se investiguen posibles
          actividades fraudulentas.
        </p>
        <p><strong>USO DE LA INFORMACIÓN</strong></p>
        <p>
          La información solicitada permite a <strong
            >Brazaletes México S.A. de C.V</strong
          >
          contactar a los usuarios y potenciales clientes, cuando sea necesario
          para completar los procedimientos de contratación, así como contactar
          a los usuarios.<br />
          Asimismo <strong>Brazaletes México S.A. de C.V</strong> utilizará la información
          obtenida para:
        </p>
        <p>
          <strong>Procurar un servicio eficiente</strong><br />
          <strong
            >Informar sobre nuevos productos relacionados con el adquirido por
            el cliente</strong
          ><br />
          <strong
            >Dar cumplimiento a obligaciones contraídas con nuestros clientes</strong
          ><br />
          <strong>Informar sobre cambios de nuestros productos</strong><br />
          <strong>Proveer una mejor atención al usuario</strong>.
        </p>
        <p><strong>LIMITACIÓN DE USO Y DIVULGACIÓN DE INFORMACIÓN</strong></p>
        <p>
          En nuestro programa de notificación de promociones, ofertas y
          servicios a través de correo electrónico, sólo <strong
            >Brazaletes México S.A. de C.V</strong
          >
          tiene acceso a la información recabada. Este tipo de
          <strong>publicidad</strong>
          se realiza mediante avisos y mensajes promocionales de
          <strong>correo electrónico</strong>, los cuales sólo serán enviados a
          usted y a aquellos contactos registrados para tal propósito, esta
          indicación podrá usted modificarla en cualquier momento. En los
          correos electrónicos enviados, pueden incluirse ocasionalmente
          <strong
            >ofertas de terceras partes que sean nuestros socios comerciales</strong
          >.<br />
          En el caso de empleo de <strong>cookies</strong>, el botón de “<strong
            >ayuda</strong
          >” que se encuentra en la barra de herramientas de la mayoría de los
          navegadores, le dirá cómo evitar aceptar nuevos
          <strong>cookies</strong>, cómo hacer que el navegador le notifique
          cuando recibe un nuevo <strong>cookie</strong> o cómo deshabilitar
          todos los <strong>cookies</strong>.
        </p>
        <p>
          <strong
            >DERECHOS ARCO (ACCESO, RECTIFICACIÓN, CANCELACIÓN Y OPOSICIÓN)</strong
          >
        </p>
        <p>
          Los <strong>datos personales</strong> proporcionados por el usuario
          formarán parte de un archivo que contendrá su perfil. El usuario puede
          acceder o modificar su perfil en cualquier momento utilizando su
          número de cliente o enviándonos un correo a
          <strong>ventas@brazaletesmexico.com</strong><br />
          Asimismo podrá notificarnos la cancelación del tratamiento de información
          y la cancelación de su expediente, por los mismos medios o comunicándose
          al teléfono: <strong>01 800 832 9681</strong>.<br />
          <strong>Brazaletes México S.A. de C.V</strong> aconseja al usuario que
          actualice sus datos cada vez que éstos sufran alguna modificación, ya que
          esto permitirá brindarle un servicio más personalizado.
        </p>
        <p><strong>TRANSFERENCIAS DE INFORMACIÓN CON TERCEROS</strong></p>
        <p>
          <strong>Brazaletes México S.A. de C.V</strong> únicamente realiza
          transferencias de información con las
          <strong>empresas de web hosting</strong> con las que mantiene una relación
          jurídica vigente para poder mantener, actualizar y administrar sus sitios
          web, a través de los que informa a sus contratantes y usuarios sobre actividades,
          promociones, eventos, estudios, e iniciativas de industria.
        </p>
        <p><strong>DATOS PERSONALES SENSIBLES</strong></p>
        <p>
          De acuerdo con el <strong>artículo 9 de la Ley</strong>, tratándose de
          <strong>datos personales sensibles</strong>, el responsable deberá
          obtener el consentimiento expreso y por escrito de su titular, a
          través de su firma autógrafa, firma electrónica o cualquier mecanismo
          de autenticación que al efecto se establezca.
        </p>
        <p><strong>Protección</strong></p>
        <p>
          La <strong>seguridad</strong> y la <strong>confidencialidad</strong>
          de los datos que los usuarios, proporcionen al contratar un servicio o
          comprar un producto en línea estarán protegidos por un
          <strong>servidor seguro</strong> bajo el protocolo Secure Socket Layer
          (SSL), de tal forma que los datos enviados se transmitirán encriptados
          para asegurar su resguardo.
        </p>
        <p>
          Para verificar que se encuentra en un entorno protegido asegúrese de
          que aparezca un <strong>candadito</strong> verde en la barra de
          navegación y una (<strong>S</strong>) en la dirección de búsqueda.
          Ejemplo: <strong>https://www.brazaletesmexico.com</strong>.
        </p>
        <p>
          Sin embargo, y a pesar de contar cada día con herramientas más
          seguras, la protección de los datos enviados a través de Internet no
          se puede garantizar al 100%; por lo que una vez recibidos, se hará
          todo lo posible por salvaguardar la información.
        </p>
        <p><strong>CAMBIOS EN EL AVISO DE PRIVACIDAD</strong></p>
        <p>
          Nos reservamos el derecho de efectuar en cualquier momento
          modificaciones o actualizaciones al presente aviso de <strong
            >privacidad</strong
          >, para la atención de novedades legislativas o jurisprudenciales,
          políticas internas, nuevos requerimientos para la prestación u
          ofrecimiento de nuestros servicios o productos y prácticas del
          mercado.
        </p>
        <p>
          Estas modificaciones estarán disponibles al público a través de los
          siguientes medios: (<strong>i</strong>) anuncios visibles en nuestros
          establecimientos o centros de atención a clientes; (<strong>ii</strong
          >) trípticos o folletos disponibles en nuestros establecimientos o
          centros de atención a clientes; (<strong>iii</strong>) en nuestra
          página de Internet
          <strong>https://www.brazaletesmexico.com/aviso-de-privacidad</strong
          >&nbsp;(i<strong>v</strong>) o se las haremos llegar al último correo
          electrónico que nos haya proporcionado.
        </p>
        <p>
          La fecha de la última actualización al presente <strong
            >aviso de privacidad</strong
          >:<br />
          <strong>10 / Enero / 2018</strong>
        </p>
        <p><strong>ACEPTACIÓN DE LOS TÉRMINOS</strong></p>
        <p>
          Esta declaración de Confidencialidad está sujeta a los términos y
          condiciones de todas las páginas de <strong
            >Brazaletes México S.A. de C.V</strong
          >
          antes descritos, lo cual constituye un acuerdo legal entre el usuario
          y <strong>Brazaletes México S.A. de C.V</strong>.
        </p>
        <p>
          Si el <strong>usuario</strong> utiliza los servicios en cualquiera de
          las páginas de <strong>Brazaletes México S.A. de C.V</strong> ,
          significa que ha leído, entendido y acordado los términos antes
          expuestos. Si no está de acuerdo con ellos, el usuario no deberá
          proporcionar ninguna información personal, ni utilizar los servicios
          del sitio web <strong>www.brazaletesmexico.com</strong> o
          <strong>Brazaletes México S.A. de C.V</strong>
        </p>
        <p>Fecha de la última actualización.</p>
        <p>
          Estimado <strong>usuario</strong>, se le notifica que el
          <strong>Aviso de Privacidad</strong> ha sido modificado el día 10 de enero
          de 2018
        </p>
      </div>
    </div>
  </div>
</Template>
