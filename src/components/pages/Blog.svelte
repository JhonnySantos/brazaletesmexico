<script>
  import Section from "../ui/Section.svelte";
  import Template from "../ui/Template.svelte";
  import BlogTags from "../ui/BlogTags.svelte";
  import LastPosts from "../ui/LastPosts.svelte";
  import PostPreview from "../ui/PostPreview.svelte";

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

  window.scrollTo(0, 0);
</script>

<Template>

  <div class="container mb-5">

    <Section name="Blog" large/>

    <div class="row g-5">

      <div class="col-md-8">

        {#each entradasBlog as post, i }
          <PostPreview {post} />
        {/each}

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