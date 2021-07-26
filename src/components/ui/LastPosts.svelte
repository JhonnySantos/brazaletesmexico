<script>
  import { Link } from "svelte-routing";
  export let ultimosPosts = [];
  export let maxPosts = 5;
</script>

{#if ultimosPosts.length > 0}
  <div class="p-4 shadow-sm">
    <h4>Entradas recientes</h4>
    <ol class="list-unstyled mb-0">
      {#each ultimosPosts.slice(0, maxPosts) as post, i}
        <li>
          <Link class="text-decoration-none" to="/blog/post/{post.slug}">{post.titulo}</Link>
        </li>
      {/each}
    </ol>
  </div>
{/if}