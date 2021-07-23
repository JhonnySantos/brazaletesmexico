<script>
  import { link, Link } from "svelte-routing";
  import BlogTags from "../ui/BlogTags.svelte";
  import Template from "../ui/Template.svelte";
  import LastPosts from "../ui/LastPosts.svelte";

  let entradasBlog = [
    {
      id: 1,
      autor: "Miguel",
      fecha: "10 Julio, 2021",
      slug: "/blog/post/sample-post",
      titulo: "Lorem ipsum dolor sit amet",
      imagen:
        "https://www.brazaletesmexico.com/wp-content/uploads/Blog_Imagen_RFID_Funcion_Utilidad_Tarjeta-1536x1026.jpg",
      contenido:
        "This blog post shows a few different types of content that’s supported and styled with Bootstrap. Basic typography, lists, tables, images, code, and more are all supported as expected. This is some additional paragraph placeholder content. It has been written to fill the available space and show how a longer snippet of text affects the surrounding content.",
    },
    {
      id: 1,
      imagen: "",
      autor: "Miguel",
      fecha: "10 Julio, 2021",
      slug: "/blog/post/sample-post",
      titulo: "This blog post shows",
      contenido:
        "This blog post shows a few different types of content that’s supported and styled with Bootstrap. Basic typography, lists, tables, images, code, and more are all supported as expected. This is some additional paragraph placeholder content. It has been written to fill the available space and show how a longer snippet of text affects the surrounding content.",
    },
    {
      id: 1,
      imagen: "",
      autor: "Miguel",
      fecha: "10 Julio, 2021",
      slug: "/blog/post/sample-post",
      titulo: "Lorem ipsum dolor sit amet",
      contenido:
        "This blog post shows a few different types of content that’s supported and styled with Bootstrap. Basic typography, lists, tables, images, code, and more are all supported as expected. This is some additional paragraph placeholder content. It has been written to fill the available space and show how a longer snippet of text affects the surrounding content.",
    },
    {
      id: 1,
      imagen: "",
      autor: "Miguel",
      fecha: "10 Julio, 2021",
      slug: "/blog/post/sample-post",
      titulo: "Lorem ipsum dolor sit amet",
      contenido:
        "This blog post shows a few different types of content that’s supported and styled with Bootstrap. Basic typography, lists, tables, images, code, and more are all supported as expected. This is some additional paragraph placeholder content. It has been written to fill the available space and show how a longer snippet of text affects the surrounding content.",
    },
    {
      id: 1,
      imagen: "",
      autor: "Miguel",
      fecha: "10 Julio, 2021",
      slug: "/blog/post/sample-post",
      titulo: "Lorem ipsum dolor sit amet",
      contenido:
        "This blog post shows a few different types of content that’s supported and styled with Bootstrap. Basic typography, lists, tables, images, code, and more are all supported as expected. This is some additional paragraph placeholder content. It has been written to fill the available space and show how a longer snippet of text affects the surrounding content.",
    },
    {
      id: 1,
      imagen: "",
      autor: "Miguel",
      fecha: "10 Julio, 2021",
      slug: "/blog/post/sample-post",
      titulo: "Lorem ipsum dolor sit amet",
      contenido:
        "This blog post shows a few different types of content that’s supported and styled with Bootstrap. Basic typography, lists, tables, images, code, and more are all supported as expected. This is some additional paragraph placeholder content. It has been written to fill the available space and show how a longer snippet of text affects the surrounding content.",
    },
  ];
  let etiquetasBlog = [
    "Lorem",
    "ipsum",
    "dolor",
    "sit",
    "amet",
    "consectetur",
    "adipisicing",
    "elit",
    "Eum",
    "laboriosam",
    "facere",
    "doloremque",
    "minima",
    "nihil",
    "atque",
    "explicabo",
    "ut",
    "enim",
    "repellendus",
    "vero",
    "corrupti",
    "quod",
    "eaque",
    "assumenda",
    "deleniti",
    "maxime",
    "voluptate",
    "ex",
    "provident",
    "officia",
  ];

  let post = {
    id: 1,
    autor: "Miguel",
    fecha: "10 Julio, 2021",
    slug: "/blog/post/sample-post",
    titulo: "Lorem ipsum dolor sit amet",
    contenido: `<img class="img-fluid my-3"src="https://www.brazaletesmexico.com/wp-content/uploads/Blog_Imagen_RFID_Funcion_Utilidad_Tarjeta-1024x684.jpg"alt="" /><p>RFID son las siglas en inglés como Radio Frequency Identification,lo cual significa identificación por radiofrecuencia.</p><p>Se trata de un sistema de identificación, almacenamiento ytransmisión de datos remotos que utiliza dispositivos llamadosetiquetas (tags), tarjetas o transponders RFID activos.</p><p>Esta tecnología identifica a través de un lector, sin contacto y adistancia, una tarjeta o etiqueta (tag). Su función principal estransmitir la identidad de un objeto por medio de ondas de radio.</p><img class="img-fluid my-3"src="https://www.brazaletesmexico.com/wp-content/uploads/Blog_Imagen_RFID_Funcion_chip-1024x588.jpg" alt="" /><p>Uno de los sectores que se ven altamente beneficiados es elhotelero, el cual ha ido experimentando una transformación digitalpara poder adaptarse a las necesidades de los clientes con el finde mejorar la experiencia del usuario y, asimismo, poderincrementar su rentabilidad. La tecnología RFID llega a loshoteles para logra la digitalización de la empresa hotelera con elfin de aumentar el número de huéspedes, conseguir un mayor controly aumentar los ingresos.</p><h6 class="mb-3">¿Cómo funciona RFID?</h6><p>A través de una pulsera (o de otro soporte a preferencia delhotel), la identificación de cada cliente de forma individual ysegura permite a la compañía conocer y registrar todos susmovimientos con el objetivo de mejorar la gestión de la actividadempresarial.</p><img class="img-fluid my-3"src="https://www.brazaletesmexico.com/wp-content/uploads/Blog_Imagen_RFID_Funcion_Utilidad_Brazalete-1024x683.jpg"alt="" /><p>Así, además de saber en qué número de habitación se hospedacualquier cliente, con esta innovadora herramienta podemos tenerdatos claves como qué perfiles tiene en redes sociales, cuál es subebida favorita o el gasto medio diario que este realiza, entremuchas otras cosas.</p><p>Asimismo, gracias al pago cashless, el hotel incrementa laseguridad en sus procesos de pago, pues la pulsera se convierte enun monedero virtual que puede recargarse a través de dispositivoscomo el móvil.</p><img class="img-fluid my-3"src="https://www.brazaletesmexico.com/wp-content/uploads/Blog_Imagen_RFID_Funcion_Utilidad_Tarjeta-1024x684.jpg"alt="" /><p>El control de accesos, asignando permisos a las diferentes áreasdel hotel y obteniendo un registro de actividad del huésped, asícomo el de afluencias y reservas son otros de los procesos quepueden controlarse de una manera óptima. Y es que la tecnologíaRFID permite eliminar el fraude debido al control de stock depulseras y de material.Es un hecho que el sector del turismoseguirá cambiando, pero gracias a la transformación digital, laadaptación a las necesidades de los huéspedes es mucho más fácil ymás rápida.</p><h5 class="my-4">¿Qué productos ofrecen RFID?</h5><h6 class="mb-3">Tarjeta de PVC con RFID</h6><p>La tarjetas de Brazaletes México son elaboradas de PVC(Cloruro dePolivinilo) unos de los plásticos más resistentes o también puedenser de madera.</p><img class="img-fluid my-3"src="https://www.brazaletesmexico.com/wp-content/uploads/Blog_Imagen_RFID_Funcion_Tarjeta_RFID-1024x684.jpg"alt="" /><p>Ambas cuentan con el chip RFID integrado garantizando el usoprolongado de las tarjetas, esto para poder otorgar al huéspedcomodidad durante sus estancias y los dos materiales son muyresistentes y son resistentes al agua, calor y uso rudo.</p><p>Además de trabajar con una gran variedad de cerraduras: Onity,Salto Systems, Assa Abloy, Dormakaba y BTVMX.</p><h6 class="mb-3">Brazalete de Tyvek con RFID</h6><p>El brazalete de Tyvek se utiliza para eventos masivos, parquesacuáticos, festivales, entre muchos otros, ahora bien al agregarleel chip RFID lo vuelve un brazalete inteligente que convierte elacceso en cualquier evento rápido.</p><img class="img-fluid my-3"src="https://www.brazaletesmexico.com/wp-content/uploads/Blog_Imagen_RFID_Funcion_Utilidad_Tyvek_RFID-1024x684.jpg"alt="" /><p>Además de poder realizar el cargo al Chip que tiene el brazaletecon el sistema Cashless, este modelo es ideal para clientes quetienen eventos recurrentes de 1 a 2 días, siendo estospersonalizables al 100% y pueden ir impresos desde a 1 tinta,hasta impresión full color con imágenes.</p><p>Y puedes adicionarle otros medios de control y seguridad: Folioconsecutivo, Código de barras variable, Códigos QR variables,Tinta invisible y Holograma de Seguridad (tonalidad dorada oplateada).</p><h6 class="mb-3">Brazalete de vinil con RFID</h6><p>Este brazalete llegar a ser una manera rápida, cómoda y fácil deidentificar para grandes grupos de personas. Uno de sus métodos deaplicación para el RFID es para eventos y festivales para definiráreas y aplicar el sistema Cashless.</p><img class="img-fluid my-3"src="https://www.brazaletesmexico.com/wp-content/uploads/Blog_Imagen_RFID_Funcion_Utilidad_brazalete_vinil-1024x684.jpg"alt="" /><p>Nuestros brazaletes con chip integrado son resistentes a cualquiertipo de actividad a la intemperie y/o actividades acuáticas(incluyendo buceo). Cuentan con Broche de seguridad inviolable debotón. Al ser cerrado, únicamente se puede retirar rompiendo ocortando el brazalete y está disponible en más de 65 tonalidadesde colores.</p><h6 class="mb-3">Brazaletes artesanales con RFID</h6><p>Estos son elaborados a mano con chip RFID integrado, es unaexcelente opción para hoteles, festivales y eventos que quieranresaltar la imagen del lugar otorgando un brazalete llamativo yque sirve como recuerdo.</p><img class="img-fluid my-3"src="https://www.brazaletesmexico.com/wp-content/uploads/Blog_Imagen_RFID_Funcion_Utilidad_Brazalete_Artesanal-1024x684.jpg"alt="" /><p>Con materiales que pueden ir desde madera, bambo, acrílico ocartón comprimido, lo que las hace altamente resistentes, tambiénpueden personalizarse en grabado o con impresión a full color.</p><p>Este mismo incluye una tela resistente para combinar el brazaleteconvencional de Chip RFID con uno artesanal, además, cuenta conBroche de Seguridad unidireccional para evitar que los asistentesde los eventos puedan quitárselo.</p><p><small>Esta entrada fue publicada en Blog, Tecnologia RFID y etiquetadaBarazaletes, Brazaletes Mexico, Brazaletes para Hoteles,Brazaletes RFID, Hoteles, RFID.</small></p>`,
    etiquetas: [
      "laboriosam",
      "facere",
      "doloremque",
      "minima",
      "nihil",
      "atque",
      "explicabo",
    ],
  };
  window.scrollTo(0, 0);
</script>

<Template>
  <div class="container my-5">
    <div class="row g-5">
      <div class="col-md-8">
        <article class="post">
          <h2 class="post-title">{post.titulo}</h2>
          <p class="post-meta">
            {post.fecha} por <Link to="/blog/autor/{post.autor.toLowerCase()}">{post.autor}</Link>
          </p>

          <div class="post-content">
            {@html post.contenido}
          </div>
          <div
            class="post-footer small border-top border-bottom py-3 text-muted"
          >
            <p class="m-0">
              Esta entrada fue publicada en
              <Link class="text-decoration-none" to="/blog">Blog</Link>
              y etiquetada con {post.etiquetas.join(", ")}.
            </p>
          </div>
        </article>
      </div>

      <div class="col-md-4">
        <div class="position-sticky" style="top: 2rem;">
          <LastPosts {entradasBlog} />

          <BlogTags {etiquetasBlog} />
        </div>
      </div>
    </div>
  </div>
</Template>

<style>
  .post {
    margin-bottom: 1rem !important;
  }
  .post-title {
    margin-bottom: 0;
  }
  .post-meta {
    margin-bottom: 0.75rem !important;
    color: #727272;
  }
</style>
