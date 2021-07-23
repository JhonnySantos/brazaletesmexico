<script>
  import { Link } from "svelte-routing";
  export let post = {};
</script>

<article class="blog-post">
  <h3 class="blog-post-title">
    <Link class="text-decoration-none link-dark" to={post.slug}>{post.titulo}</Link>
  </h3>
  <p class="blog-post-meta">
    {post.fecha} por <Link to="/blog/autor/{ post.autor.toLowerCase() }">{post.autor}</Link>
  </p>
  {#if post.imagen}
    <Link to={post.slug}>
      <img
        class="img-fluid blog-cover-img"
        src={post.imagen}
        alt={post.imagen}
      />
    </Link>
  {/if}
  <p class="blog-cover-body">
    {post.contenido}
  </p>
  <div class="blog-cover-footer text-end">
    <Link class="btn btn-sm btn-outline-primary" to={post.slug}>
      Continuar leyendo <i class="fas fa-angle-double-right ms-1" />
    </Link>
  </div>
</article>

<style>
  .blog-post {
    margin-bottom: 1rem !important;
  }

  .blog-post-title {
    margin-bottom: 0;
  }
  .blog-post-meta {
    margin-bottom: 0.75rem !important;
    color: #727272;
  }
  .blog-cover-img {
    margin-top: 0.75rem !important;
    margin-bottom: 0.75rem !important;
  }
  .blog-cover-footer {
    padding-bottom: 1.5rem !important;
    border-bottom: 0.05rem solid #e5e5e5 !important;
  }
</style>