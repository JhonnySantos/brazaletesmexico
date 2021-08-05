<script>
  import { imagesPath } from "../../stores/stores";
  export let tipoBrazalete = {};
</script>


<div class="jumbotron">
  <div class="col-12 col-md-6 col-lg-5 py-5 py-md-4 py-lg-0 px-0">
    <img 
      src={`${$imagesPath}/jumbotron-tipo-${tipoBrazalete.id}.png`}
      alt="{tipoBrazalete.descripcion}"
      class="img-fluid"
    />
  </div>
  <div class="jumbotron-body col-12 ps-2 ps-md-5 h-80">
    <div class="card bg-primary text-white rounded-5 h-100">
      <div class="card-body row align-items-center justify-content-end">
        <div class="col-md-6 col-lg-7 p-3 p-sm-3 p-md-0">
          {tipoBrazalete.descripcion_larga}
        </div>
      </div>
    </div>
  </div>
</div>

<style>
  .jumbotron {
    position: static !important;
  }
  .jumbotron-body {
    position: static !important;
    z-index: -1 !important;
  }

  .rounded-5 {
    border-radius: 0.5rem !important;
  }

  .h-80 {
    height: 80% !important;
  }

  @media (min-width: 768px) {
    .jumbotron {
      position: relative !important;
    }
    .jumbotron-body {
      top: 50% !important;
      left: 50% !important;
      position: absolute !important;
      transform: translate(-50%, -50%) !important;
    }
  }
</style>