<script>
  import { link, Link } from "svelte-routing";

  import Template from "../ui/Template.svelte";
  import BlogPreview from "../ui/BlogPreview.svelte";

  let entradasBlog = [
    {
      id: 1,
      autor: "Miguel",
      fecha: "10 Julio, 2021",
      slug: "/blog/post/sample-post",
      titulo: "Lorem ipsum dolor sit amet",
      imagen: "https://www.brazaletesmexico.com/wp-content/uploads/Blog_Imagen_RFID_Funcion_Utilidad_Tarjeta-1536x1026.jpg",
      contenido: "This blog post shows a few different types of content that’s supported and styled with Bootstrap. Basic typography, lists, tables, images, code, and more are all supported as expected. This is some additional paragraph placeholder content. It has been written to fill the available space and show how a longer snippet of text affects the surrounding content.",
    },
    {
      id: 1,
      imagen: "",
      autor: "Miguel",
      fecha: "10 Julio, 2021",
      slug: "/blog/post/sample-post",
      titulo: "This blog post shows",
      contenido: "This blog post shows a few different types of content that’s supported and styled with Bootstrap. Basic typography, lists, tables, images, code, and more are all supported as expected. This is some additional paragraph placeholder content. It has been written to fill the available space and show how a longer snippet of text affects the surrounding content.",
    },
    {
      id: 1,
      imagen: "",
      autor: "Miguel",
      fecha: "10 Julio, 2021",
      slug: "/blog/post/sample-post",
      titulo: "Lorem ipsum dolor sit amet",
      contenido: "This blog post shows a few different types of content that’s supported and styled with Bootstrap. Basic typography, lists, tables, images, code, and more are all supported as expected. This is some additional paragraph placeholder content. It has been written to fill the available space and show how a longer snippet of text affects the surrounding content.",
    },
    {
      id: 1,
      imagen: "",
      autor: "Miguel",
      fecha: "10 Julio, 2021",
      slug: "/blog/post/sample-post",
      titulo: "Lorem ipsum dolor sit amet",
      contenido: "This blog post shows a few different types of content that’s supported and styled with Bootstrap. Basic typography, lists, tables, images, code, and more are all supported as expected. This is some additional paragraph placeholder content. It has been written to fill the available space and show how a longer snippet of text affects the surrounding content.",
    },
    {
      id: 1,
      imagen: "",
      autor: "Miguel",
      fecha: "10 Julio, 2021",
      slug: "/blog/post/sample-post",
      titulo: "Lorem ipsum dolor sit amet",
      contenido: "This blog post shows a few different types of content that’s supported and styled with Bootstrap. Basic typography, lists, tables, images, code, and more are all supported as expected. This is some additional paragraph placeholder content. It has been written to fill the available space and show how a longer snippet of text affects the surrounding content.",
    },
    {
      id: 1,
      imagen: "",
      autor: "Miguel",
      fecha: "10 Julio, 2021",
      slug: "/blog/post/sample-post",
      titulo: "Lorem ipsum dolor sit amet",
      contenido: "This blog post shows a few different types of content that’s supported and styled with Bootstrap. Basic typography, lists, tables, images, code, and more are all supported as expected. This is some additional paragraph placeholder content. It has been written to fill the available space and show how a longer snippet of text affects the surrounding content.",
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
</script>

<Template>

  <div class="container mb-5">

    <div class="p-4 p-md-5 mb-4 border border-5">
      <div class="col-md-6 px-0">
        <h1 class="display-4 text-primary">
          <strong>Blog</strong>
        </h1>
      </div>
    </div>

    <div class="row g-5">

      <div class="col-md-8">

        {#each entradasBlog as post, i }
          <BlogPreview {post} />
        {/each}

      </div>

      <div class="col-md-4">

        <div class="position-sticky" style="top: 2rem;">

          <div class="p-4 mb-3 bg-light rounded">
            <h4>Entradas recientes</h4>
            <ol class="list-unstyled mb-0">
              {#each entradasBlog.slice(0, 6) as post, i }
                <li>
                  <Link class="text-decoration-none" to={post.slug}>{post.titulo}</Link>
                </li>
              {/each}
            </ol>
          </div>

          <div class="p-4">
            <h4>Etiquetas</h4>
            <p class="mb-0">
              {#each etiquetasBlog as etiqueta, i }
                <a href="/blog/tag/{etiqueta}" class="tag tag-outline-info rounded text-decoration-none m-1" use:link>{etiqueta}</a>
              {/each}
            </p>
          </div>

        </div>

      </div>
    </div>
  </div>

</Template>

<style>
  .tag {
    padding: 0.5em;
    line-height: 1;
    font-size: 0.75em;
    text-align: center;
    display: inline-block;
    vertical-align: baseline;
    white-space: normal !important;
    margin-bottom: 0.25rem !important;
  }

  .tag:hover, .tag:focus {
    cursor: pointer !important;
  }

  .tag-outline-info {
    color: #446084;
    border: 1px solid #446084 !important;
  }

  .tag-outline-info:hover, .tag-outline-info:focus {
    color: #fff;
    background-color: #446084;
    border-color: #446084;
  }
</style>