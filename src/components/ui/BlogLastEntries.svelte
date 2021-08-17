<script>
  import { Link } from "svelte-routing";

  const entradasBlog = [
    {
      autor: "Marketing",
      fecha: "28 de Abril de 2021",
      categoria: "TECNOLOGIA RFID",
      slug: "que-es-la-tecnologia-rfid",
      titulo: "¿Qué es la tecnología RFID?",
      imagen:
        "https://www.brazaletesmexico.com/wp-content/uploads/Blog_Imagen_RFID_Funcion_Utilidad_Tarjeta-1024x684.jpg",
      etiquetas: [
        "Barazaletes",
        "Brazaletes Mexico",
        "Brazaletes para Hoteles",
        "Brazaletes RFID",
        "Hoteles",
        "RFID",
      ],
      previa:
        "RFID son las siglas en inglés como Radio Frequency Identification, lo cual significa identificación por radiofrecuencia. Se trata de un sistema de identificación, almacenamiento y transmisión de datos remotos que utiliza dispositivos llamados etiquetas (tags), tarjetas o transponders RFID activos.",
    },
    {
      autor: "Brazaletes México",
      fecha: "12 de Diciembre de 2020",
      categoria: "TARJETAS DE PRESENTACIÓN",
      slug: "Una-tarjeta-de-presentacion-dice-mas-que-mil-palabras",
      titulo: "Una tarjeta de presentación dice más que mil palabras",
      imagen:
        "https://www.brazaletesmexico.com/wp-content/uploads/una-tarjeta-duce-mas-que-mil-palabras.jpg",
      etiquetas: [
        "tarjetas de presentacion",
        "tarjetas impresas",
        "tarjetas pvc",
        "tarjetas rfid",
      ],
      previa:
        "Las tarjetas de presentación nunca pasaran de moda solo evolucionan para convertirse en una herramienta más adecuada a la época, cumpliendo una función importante en el área de marketing y ventas.",
    },
    {
      autor: "Brazaletes México",
      fecha: "30 de Noviembre de 2020",
      categoria: "ETIQUETA HOLOGRAFICA",
      slug: "etiqueta-holograma-de-seguridad",
      titulo: "Etiqueta holograma de Seguridad",
      imagen:
        "https://www.brazaletesmexico.com/wp-content/uploads/etiqueta-holograma-seguridad.png",
      etiquetas: [
        "etiqueta de seguridad",
        "etiqueta holografica",
        "holograma de seguridad",
      ],
      previa:
        "¿Quieres combatir la manipulación de tus productos, brindar garantía, originalidad, calidad y prestigio? La solución: Etiqueta Holograma de Seguridad.",
    },
    {
      autor: "Brazaletes México",
      fecha: "26 Agosto de 2020",
      categoria: "MENU QR",
      slug: "menu-qr-para-restaurantes",
      titulo: "Menú QR para Restaurantes",
      etiquetas: ["codigos qr", "menu digital", "menu qr"],
      etiquetas: ["codigos qr", "menu digital", "menu qr"],
      imagen:
        "https://www.brazaletesmexico.com/wp-content/uploads/menu-qr-para-restaurantes.jpg",
      previa:
        "Los hábitos de consumo en los restaurantes han tenido un importante cambio en la forma de presentar sus productos y servicios al cliente de la mano de la tecnología.",
    },
    {
      autor: "Brazaletes México",
      fecha: "9 Julio de 2020",
      categoria: "NOTICIAS",
      slug: "brazalete-dispensador-de-gel-antibacterial",
      titulo: "Brazalete Dispensador de Gel Antibacterial",
      imagen:
        "https://www.brazaletesmexico.com/wp-content/uploads/brazaletes-dispensador-gel-antibacterial.png",
      etiquetas: ["brazalete con gel antibacterial", "brazalete sanitizante"],
      previa:
        "La nueva normalidad exige medidas de seguridad y cuidado para toda la familia, como el lavado de manos frecuentemente, uso de cubrebocas, guantes y gel Antibacterial.",
    },
    {
      autor: "Brazaletes México",
      fecha: "3 Junio de 2019",
      categoria: "EVENTOS",
      slug: "pulseras-y-brazaletes-mexico-100-reciclables",
      titulo: "Pulseras y Brazaletes México 100% Reciclables",
      etiquetas: [],
      etiquetas: [],
      imagen:
        "https://www.brazaletesmexico.com/wp-content/uploads/ARTESANAL-1024x791.jpg",
      previa:
        "Es común escuchar hoy en día a cerca del cambio climático, derretimiento de los glaciales, extinción masiva de especies, contaminación de ríos, todo debido a la acción del hombre, el planeta está sufriendo cambios drásticos.",
    },
    {
      autor: "Brazaletes México",
      fecha: "21 Mayo de 2018",
      categoria: "BLOG",
      slug: "pulseras-inteligentes-rfid-para-resorts,-Hoteles-y-parques-tematicos",
      titulo:
        "Pulseras inteligentes RFID para Resorts, Hoteles y Parques temáticos",
      imagen:
        "https://www.brazaletesmexico.com/wp-content/uploads/pulseras-inteligentes-rfid-hoteles-resorts-parques-1024x768.jpg",
      etiquetas: [
        "pulseras inteligentes rfid",
        "Pulseras para Hoteles",
        "pulseras rfid para resorts",
      ],
      previa:
        "El uso de pulseras inteligentes RFID para Resorts, Hoteles y Parques temáticos ha crecido significativamente en los últimos años, desde que uno de los principales parques temáticos adopto la tecnología RFID y desplazo las anticuadas pulseras y boletos de papel, estos han sido reemplazados por pases sin contacto, en forma de pulseras electrónicas.",
    },
    {
      autor: "Brazaletes México",
      fecha: "16 Marzo de 2018",
      categoria: "BLOG",
      slug: "pulseras-artesanales-para-bodas",
      titulo: "Pulseras Artesanales para bodas",
      imagen:
        "https://www.brazaletesmexico.com/wp-content/uploads/pulseras-artesanales-para-boda.jpg",
      etiquetas: [
        "pulseras artesanales",
        "pulseras de madera",
        "pulseras para boda",
      ],
      previa:
        "La boda sin lugar a duda uno de los eventos más especiales, donde tienen que elegir vestido, los arreglos, las flores, la locación, el pastel, las invitaciones.",
    },
    {
      autor: "Brazaletes México",
      fecha: "5 Enero de 2018",
      categoria: "NOTICIAS",
      slug: "brazaletes-y-pulseras-promocionales",
      titulo: "Brazaletes y Pulseras Promocionales",
      imagen:
        "https://www.brazaletesmexico.com/wp-content/uploads/brazaletes-pulseras-promocionales-mexico.png",
      etiquetas: [
        "Brazaletes de Goma",
        "brazaletes promocionales",
        "Pulseras para Hoteles",
        "pulseras promocionales",
        "Pulseras Tyvek",
      ],
      previa:
        "Personalizar una fiesta con brazaletes o pulseras es una idea original, creativa e innovadora, si se agrega tecnología de Radio Frecuencia (RFID) puede reconocer a sus invitados de una forma personal y única.",
    },
    {
      autor: "Brazaletes México",
      fecha: "5 Septiembre de 2017",
      categoria: "BLOG",
      slug: "brazaletes-y-pulseras-con-tecnologia-rfid",
      titulo: "Brazaletes y Pulseras con Tecnología RFID",
      imagen:
        "https://www.brazaletesmexico.com/wp-content/uploads/brazaletes-pulseras-con-tecnologia-rfid.png",
      etiquetas: [
        "Brazaletes RFID",
        "pulseras para hospitales",
        "pulseras rfid",
        "tecnologia rfid",
      ],
      previa:
        "La tecnología avanza cada día más, y los brazaletes con tecnología RFID son una realidad hoy, debido a su versatilidad y fácil manejo son utilizados para múltiples tareas desde control de acceso para eventos, hasta control de natalidad en hospitales y seguimiento de paquetes.",
    },
  ];
</script>

<div class="container my-5">
  <div class="row row-cols-1 row-cols-md-3 g-3">
    {#each entradasBlog.slice(0,3) as entry, i}
      <Link class="nav-link" to="/blog/post/{entry.slug}">
        <div class="col">
          <div class="text-center mb-3">
            <img class="img-fluid w-75" src={entry.imagen} alt="">
          </div>
          <h6>{entry.titulo}</h6>
          <p class="text-dark">
            {entry.previa.slice(0, 100)}[...]
          </p>
        </div>
      </Link>
    {/each}
  </div>
</div>
