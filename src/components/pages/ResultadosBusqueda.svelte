<script>
  import CardBrazalete from "../ui/CardBrazalete.svelte";
  import Template from "../ui/Template.svelte";
  import Section from "../ui/Section.svelte";
  import Loading from "../ui/Loading.svelte";

  let params;
  let searchText = "cancún";
  let ResultadosBusqueda = [
    {
      id: 1,
      image: "",
      slug: "",
      title: "Lorem ipsum dolor",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum quasi adipisci perspiciatis minima impedit placeat blanditiis perferendis dicta quia, repellendus temporibus animi ipsa explicabo aliquam veniam libero architecto eveniet eius.",
    },
    {
      id: 2,
      image: "",
      slug: "",
      title: "Lorem ipsum dolor",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum quasi adipisci perspiciatis minima impedit placeat blanditiis perferendis dicta quia, repellendus temporibus animi ipsa explicabo aliquam veniam libero architecto eveniet eius.",
    },
    {
      id: 3,
      image: "",
      slug: "",
      title: "Lorem ipsum dolor",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum quasi adipisci perspiciatis minima impedit placeat blanditiis perferendis dicta quia, repellendus temporibus animi ipsa explicabo aliquam veniam libero architecto eveniet eius.",
    },
    {
      id: 4,
      image: "",
      slug: "",
      title: "Lorem ipsum dolor",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum quasi adipisci perspiciatis minima impedit placeat blanditiis perferendis dicta quia, repellendus temporibus animi ipsa explicabo aliquam veniam libero architecto eveniet eius.",
    },
  ];
  let randomResults = [
    {
      id: 1,
      descripcion: "Brazalete de Tyvek 1 x 10″ Wave",
      img: "https://www.brazaletesmexico.com/wp-content/uploads/brazaletes-de-tyvek-seguridad-1-10-wave-300x217.jpg",
      slug: "brazalete-de-tyvek-1-x-10-wave",
      precio_min: 0,
      precio_max: 0,
    },
    {
      id: 2,
      descripcion: "Brazalete de Tyvek 1 x 10″ con Cupón",
      img: "https://www.brazaletesmexico.com/wp-content/uploads/brazaletes-tyvek-full-color-en-mexico6-300x217.jpg",
      slug: "brazalete-de-tyvek-1-x-10-con-cupon",
      precio_min: 0,
      precio_max: 0,
    },
    {
      id: 3,
      descripcion: "Brazalete de Tyvek 3 cupones",
      img: "https://www.brazaletesmexico.com/wp-content/uploads/brazalete-tyvek-3-cupones-300x169.jpg",
      slug: "brazalete-de-tyvek-3-cupones",
      precio_min: 0,
      precio_max: 0,
    },
    {
      id: 4,
      descripcion: "Brazalete de Tyvek 1 x 12″ con cupón",
      img: "https://www.brazaletesmexico.com/wp-content/uploads/brazaletes-de-tyvek-seguridad-1-12-con-cupon-300x217.jpg",
      slug: "brazalete-de-tyvek-1-x-12-con-cupon",
      precio_min: 0,
      precio_max: 0,
    },
  ];
</script>

<Template>
  <!-- {#await true}
  <Loading />
  {:then true} -->
  <div class="container my-5">
    <div class="row mb-4">
      <div class="col">
        <h4>Resultados de la búsqueda "<strong>{searchText}</strong>"</h4>
      </div>
    </div>

    {#if true}
      <div class="row row-cols-1 g-5 mx-5 mb-5">
        {#each ResultadosBusqueda as result (result.id)}
          <div class="col">
            <div class="d-flex align-items-center">
              <div class="flex-shrink-0">
                <img
                  src={result.image}
                  alt={result.image}
                  class="border border-5 bg-dark"
                  style="min-width: 150px !important; min-height: 150px !important;"
                />
              </div>
              <div class="flex-grow-1 ms-3">
                <h5>{result.title}</h5>
                <p>{result.description}</p>
              </div>
            </div>
          </div>
        {/each}
      </div>
    {:else}
      <div class="row mb-5">
        <div class="col-12">
          <div class="alert alert-warning" role="alert">
            No se encontraron resultados que concuerden con la búsqueda, intenta
            nuevamente.
          </div>
        </div>
      </div>
    {/if}

    <Section name="Información relacionada" />
    <div class="row row-cols-2 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 justify-content-{randomResults.length > 4 ? 'start' : 'center'} g-3 mb-5" >
      {#each randomResults as brazalete (brazalete.id)}
        <CardBrazalete {brazalete} />
      {/each}
    </div>
  </div>
</Template>

<style>
  .container {
    min-height: calc(100vh - 220px) !important;
  }
</style>
