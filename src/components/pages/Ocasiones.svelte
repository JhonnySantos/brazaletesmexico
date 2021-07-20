<script>
  import GridTiposBrazaletes from "../ui/GridTiposBrazaletes.svelte";
  import NotFoundPage from "./NotFoundPage.svelte";
  import { apiHost } from "../../stores/stores";
  import Template from "../ui/Template.svelte";
  import Loading from "../ui/Loading.svelte";
  import Section from "../ui/Section.svelte";
  import { onMount } from "svelte";

  let ocasionesEstaticas = [
    {
      titulo: "HOTELES & RESORTS",
      encabezado : "BRAZALETES PARA HOTELES & RESORTS",
      descripcion: "Somos una empresa la cual se especializa en todo tipo de Brazaletes de Identificación para Hotelería, Eventos, Parques Acuáticos, los cuales requieran seguridad y control, Tenemos muchos modelos de pulseras, para el gusto particular de cada uno de nuestros clientes, brazaletes desde el mas económico como es el TYVEK, pero que es una excelente opción para poder tener un control.",
      img: "./../images/ocasiones-hoteles-rfid.jpg",
      route: "/ocasiones/hoteles-resorts"
    },
    {
      titulo: "EVENTOS",
      encabezado : "BRAZALETES PARA EVENTOS/CONCIERTOS",
      descripcion: "Los brazaletes son ideales para el control de acceso en un evento & concierto. Contamos con diferentes de personalización, los brazaletes de tyvek son una excelente opción por su bajo costo, tamaño y resistencia.",
      img: "./../images/ocasiones-eventos.jpg",
      route: "/ocasiones/eventos"
    },
    {
      titulo: "HOSPITALARIOS",
      encabezado : "BRAZALETES HOSPITALARIOS",
      descripcion: "Los brazaletes hospitalarios son por impresión térmica están hechos de un material sintético. Están son livianas y cómodas al usar.",
      img: "./../images/ocasiones-hospitalario-vinil.jpg",
      route: "/ocasiones/hospitalarios"
    },
    {
      titulo: "BALNEARIOS",
      encabezado : "BRAZALETES PARA CENOTES",
      descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis ullam cumque quasi nesciunt consectetur, explicabo illum, quia consequuntur doloribus veniam fugit ex debitis! Id aut provident voluptas, in magni voluptate? Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis ullam cumque quasi nesciunt consectetur, explicabo illum, quia consequuntur doloribus veniam fugit ex debitis! Id aut provident voluptas, in magni voluptate?",
      img: "./../images/ocasiones-balneario-vinil.jpg",
      route: "/ocasiones/balnearios"
    }
  ];

  export let slug = "";
  let ocasion = {};
  let tipos = [];

  const obtenerOcasion = async () => {
    ocasion = await findSlug( ocasionesEstaticas, slug );

    let response = await fetch(`${$apiHost}/tipos/all/1`);
    tipos = await response.json();

    window.scrollTo(0, 0);
  };

  onMount( async () => {
    ocasion = obtenerOcasion();
  });

  const findSlug = async (arrayOcasiones, slug) => {
    return arrayOcasiones.filter(obj => 
      Object.keys(obj).some(key => 
        obj[key].includes(slug)
      )
    )[0];
  }

</script>

{#await ocasion}

<Template>
  <Loading />
</Template>
  
{:then ocasion}

{#if ocasion.route}

  <Template>

    <div class="container-fluid bg-light bg-gradient border-0 shadow">
      <div class="row align-items-center">
        <div class="col-12 col-md-6 p-0">
          <img
            src={ocasion.img}
            class="img-fluid w-100"
            alt={ocasion.encabezado}
          />
        </div>
        <div class="col-12 col-md-6 px-3">
          <h2 class="mt-3 mb-3 mt-md-0">{ocasion.titulo}</h2>
          <p class="mb-4 mb-md-0">
            {ocasion.descripcion}
          </p>
        </div>
      </div>
    </div>

    <Section name={ocasion.encabezado} />

    <div class="container my-7">
      <GridTiposBrazaletes {tipos} />
    </div>

  </Template>

  {:else}

  <NotFoundPage />

{/if}

{/await}

<style>
  .bg-light {
    background-color: #f8f9fa !important;
  }

  .my-7 {
    margin-bottom: 5rem !important;
    margin-top: 5rem !important;
  }
</style>
