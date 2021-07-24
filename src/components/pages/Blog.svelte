<script>
  import Loading from "../ui/Loading.svelte";
  import Section from "../ui/Section.svelte";
  import Template from "../ui/Template.svelte";
  import BlogTags from "../ui/BlogTags.svelte";
  import LastPosts from "../ui/LastPosts.svelte";
  import PostPreview from "../ui/PostPreview.svelte";

  export let slug = "";
  export let location = "";

  let promise = false;
  let maxLatestPosts = 5;

  const emulateBlogApi = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          entradasBlog: [
            {
              autor: "Marketing",
              fecha: "28 de Abril de 2021",
              slug: "que-es-la-tecnologia-rfid",
              titulo: "¿Qué es la tecnología RFID?",
              imagen: "https://www.brazaletesmexico.com/wp-content/uploads/Blog_Imagen_RFID_Funcion_Utilidad_Tarjeta-1024x684.jpg",
              previa: "RFID son las siglas en inglés como Radio Frequency Identification, lo cual significa identificación por radiofrecuencia. Se trata de un sistema de identificación, almacenamiento y transmisión de datos remotos que utiliza dispositivos llamados etiquetas (tags), tarjetas o transponders RFID activos.",
            },
            {
              autor: "Brazaletes México",
              fecha: "12 de Diciembre de 2020",
              slug: "Una-tarjeta-de-presentacion-dice-mas-que-mil-palabras",
              titulo: "Una tarjeta de presentación dice más que mil palabras",
              imagen: "https://www.brazaletesmexico.com/wp-content/uploads/una-tarjeta-duce-mas-que-mil-palabras.jpg",
              previa: "RFID son las siglas en inglés como Radio Frequency Identification, lo cual significa identificación por radiofrecuencia. Se trata de un sistema de identificación, almacenamiento y transmisión de datos remotos que utiliza dispositivos llamados etiquetas (tags), tarjetas o transponders RFID activos.",
            },
            {
              autor: "Brazaletes México",
              fecha: "30 de Noviembre de 2020",
              slug: "etiqueta-holograma-de-seguridad",
              titulo: "Etiqueta holograma de Seguridad",
              imagen: "https://www.brazaletesmexico.com/wp-content/uploads/etiqueta-holograma-seguridad.png",
              previa: "RFID son las siglas en inglés como Radio Frequency Identification, lo cual significa identificación por radiofrecuencia. Se trata de un sistema de identificación, almacenamiento y transmisión de datos remotos que utiliza dispositivos llamados etiquetas (tags), tarjetas o transponders RFID activos.",
            },
            {
              autor: "Brazaletes México",
              fecha: "26 Agosto de 2020",
              slug: "menu-qr-para-restaurantes",
              titulo: "Menú QR para Restaurantes",
              etiquetas: ["codigos qr", "menu digital", "menu qr"],
              imagen: "https://www.brazaletesmexico.com/wp-content/uploads/menu-qr-para-restaurantes.jpg",
              previa: "RFID son las siglas en inglés como Radio Frequency Identification, lo cual significa identificación por radiofrecuencia. Se trata de un sistema de identificación, almacenamiento y transmisión de datos remotos que utiliza dispositivos llamados etiquetas (tags), tarjetas o transponders RFID activos.",
            },
            {
              autor: "Brazaletes México",
              fecha: "9 Julio de 2020",
              slug: "brazalete-dispensador-de-gel-antibacterial",
              titulo: "Brazalete Dispensador de Gel Antibacterial",
              imagen: "https://www.brazaletesmexico.com/wp-content/uploads/brazaletes-dispensador-gel-antibacterial.png", 
              previa: "RFID son las siglas en inglés como Radio Frequency Identification, lo cual significa identificación por radiofrecuencia. Se trata de un sistema de identificación, almacenamiento y transmisión de datos remotos que utiliza dispositivos llamados etiquetas (tags), tarjetas o transponders RFID activos.", },
            {
              autor: "Brazaletes México",
              fecha: "3 Junio de 2019",
              slug: "pulseras-y-brazaletes-mexico-100-reciclables",
              titulo: "Pulseras y Brazaletes México 100% Reciclables",
              etiquetas: [],
              imagen: "https://www.brazaletesmexico.com/wp-content/uploads/ARTESANAL-1024x791.jpg", 
              previa: "RFID son las siglas en inglés como Radio Frequency Identification, lo cual significa identificación por radiofrecuencia. Se trata de un sistema de identificación, almacenamiento y transmisión de datos remotos que utiliza dispositivos llamados etiquetas (tags), tarjetas o transponders RFID activos.", },
            {
              autor: "Brazaletes México",
              fecha: "21 Mayo de 2018",
              slug: "pulseras-inteligentes-rfid-para-resorts,-Hoteles-y-parques-tematicos",
              titulo: "Pulseras inteligentes RFID para Resorts, Hoteles y Parques temáticos",
              imagen: "https://www.brazaletesmexico.com/wp-content/uploads/pulseras-inteligentes-rfid-hoteles-resorts-parques-1024x768.jpg", 
              previa: "RFID son las siglas en inglés como Radio Frequency Identification, lo cual significa identificación por radiofrecuencia. Se trata de un sistema de identificación, almacenamiento y transmisión de datos remotos que utiliza dispositivos llamados etiquetas (tags), tarjetas o transponders RFID activos.", 
            },
            {
              autor: "Brazaletes México",
              fecha: "16 Marzo de 2018",
              slug: "pulseras-artesanales-para-bodas",
              titulo: "Pulseras Artesanales para bodas",
              imagen: "", 
              previa:
                "RFID son las siglas en inglés como Radio Frequency Identification, lo cual significa identificación por radiofrecuencia. Se trata de un sistema de identificación, almacenamiento y transmisión de datos remotos que utiliza dispositivos llamados etiquetas (tags), tarjetas o transponders RFID activos.", },
            {
              autor: "Brazaletes México",
              fecha: "5 Enero de 2018",
              slug: "brazaletes-y-pulseras-promocionales",
              titulo: "Brazaletes y Pulseras Promocionales",
              imagen: "", 
              previa:
                "RFID son las siglas en inglés como Radio Frequency Identification, lo cual significa identificación por radiofrecuencia. Se trata de un sistema de identificación, almacenamiento y transmisión de datos remotos que utiliza dispositivos llamados etiquetas (tags), tarjetas o transponders RFID activos.", },
            {
              autor: "Brazaletes México",
              fecha: "5 Septiembre de 2017",
              slug: "brazaletes-y-pulseras-con-tecnologia-rfid",
              titulo: "Brazaletes y Pulseras con Tecnología RFID",
              imagen: "", 
              previa:
                "RFID son las siglas en inglés como Radio Frequency Identification, lo cual significa identificación por radiofrecuencia. Se trata de un sistema de identificación, almacenamiento y transmisión de datos remotos que utiliza dispositivos llamados etiquetas (tags), tarjetas o transponders RFID activos.", },
          ],
          etiquetasBlog: [
            "Barazaletes", 
            "Brazaletes Mexico", 
            "Brazaletes para Hoteles", 
            "Brazaletes RFID", 
            "Hoteles", 
            "RFID",
            "tarjetas de presentacion", 
            "tarjetas impresas", 
            "tarjetas pvc", 
            "tarjetas rfid",
            "etiqueta de seguridad", 
            "etiqueta holografica", 
            "holograma de seguridad",
            "codigos qr", 
            "menu digital", 
            "menu qr",
            "brazalete con gel antibacterial", 
            "brazalete sanitizante",
            "pulseras inteligentes rfid", 
            "Pulseras para Hoteles", 
            "pulseras rfid para resorts",
            "pulseras artesanales", 
            "pulseras de madera", 
            "pulseras para boda",
            "Brazaletes de Goma", 
            "brazaletes promocionales", 
            "Pulseras para Hoteles", 
            "pulseras promocionales", 
            "Pulseras Tyvek",
            "Brazaletes RFID", 
            "pulseras para hospitales", 
            "pulseras rfid", 
            "tecnologia rfid"
          ],
        });
      }, 2000);
    });
  };

  promise = emulateBlogApi();
  window.scrollTo(0, 0);
</script>

<Template>
  {#await promise}
    <Loading />
  {:then response}
    <div class="container mb-5">
      <Section name="Blog" large />
      <div class="row g-5">
        <div class="col-md-8">
          {#each response.entradasBlog as post, i}
            <PostPreview {post} />
          {/each}
        </div>
        <div class="col-md-4">
          <div class="position-sticky" style="top: 1rem;">
            <LastPosts ultimosPosts={response.entradasBlog} maxPosts={maxLatestPosts}/>
            <BlogTags etiquetasBlog={response.etiquetasBlog} />
          </div>
        </div>
      </div>
    </div>
  {/await}
</Template>