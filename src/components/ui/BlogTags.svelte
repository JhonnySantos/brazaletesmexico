<script>
  import { link } from "svelte-routing";
  export let etiquetasBlog = [];
  export let maxEtiquetas = 20;
</script>

{#if etiquetasBlog.length > 0}
  <div class="p-4">
    <h4>Etiquetas</h4>
    {#each etiquetasBlog.slice(0, maxEtiquetas) as etiqueta, i}
      <a href="/blog/etiqueta/{etiqueta.toLowerCase().replace(/\s/g, '-')}" class="tag tag-outline-info rounded text-decoration-none m-1" use:link>
        {etiqueta}
      </a>
    {/each}
  </div>
{/if}

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

  .tag:hover,
  .tag:focus {
    cursor: pointer !important;
  }

  .tag-outline-info {
    color: #446084;
    border: 1px solid #446084 !important;
  }

  .tag-outline-info:hover,
  .tag-outline-info:focus {
    color: #fff;
    background-color: #446084;
    border-color: #446084;
  }
</style>