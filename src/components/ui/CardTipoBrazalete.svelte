<script>
    import { Link } from "svelte-routing";
    import { createEventDispatcher } from "svelte";

    export let tipo = {};

    const {
        tipoId,
        tipoDescripcion,
        tipoImage,
        tipoSlug,
        seccionSlug,
        brazaletes,
    } = tipo;

    const [brazalete] = brazaletes;
    const { brazaleteSlug } = brazalete;

    const slug =
        brazaletes.length > 1
            ? `/${seccionSlug}/${tipoSlug}`
            : `/${seccionSlug}/${tipoSlug}/${brazaleteSlug}`;

    const dispatch = createEventDispatcher();

    const enviarIdTipo = () => {
        dispatch("updateIdTipo", tipoId);
    };
</script>

<div id={tipoId} class="col">
    <Link class="nav-link p-0 h-100" to={slug} on:click={enviarIdTipo}>
        <div class="card card-tipo-brazalete h-100">
            <div class="card-body pb-0">
                <h5 class="card-title text-center fw-bold">
                    {tipoDescripcion}
                </h5>
            </div>
            <img
                src={tipoImage}
                class="card-img-bottom"
                alt={tipoDescripcion}
            />
        </div>
    </Link>
</div>
