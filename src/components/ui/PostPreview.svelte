<script>
  import { Link } from "svelte-routing";
  export let post = {};
</script>

<article class="blog-post">
  <h3 class="blog-post-title">
    <Link class="text-decoration-none link-dark" to="/blog/post/{post.slug}"
      >{post.titulo}</Link
    >
  </h3>
  <p class="blog-post-meta">
    <small class="d-inline-block text-muted">
      <i class="far fa-clock"></i> {post.fecha}
    </small>
    <small class="d-inline-block text-muted">
      por <Link class="text-decoration-none me-1" to="/blog/autor/{post.autor.toLowerCase()}">{post.autor}</Link>
    </small>
  </p>
  {#if post.imagen}
    <div class="text-center">
      <Link to="/blog/post/{post.slug}">
        <img
          class="img-fluid w-100"
          src={post.imagen}
          alt={post.imagen}
        />
      </Link>
    </div>
  {/if}
  <p class="blog-cover-body my-3">
    {post.previa}
  </p>
  <div class="blog-cover-footer text-end">
    <Link class="btn btn-sm btn-primary" to="/blog/post/{post.slug}">
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