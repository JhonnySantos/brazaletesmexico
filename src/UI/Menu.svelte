<script>
    import { onMount } from "svelte"
    import { Link } from "svelte-routing";
    import { currentSection, apiHost } from "../stores/stores";

    let secciones = [];


    onMount(async () => {
        const response = await fetch(`${$apiHost}/secciones`);
        secciones = await response.json();
    });

</script>

<div class="collapse navbar-collapse" id="navbarColor02">
    <ul class="navbar-nav me-auto">
        <li class="nav-item">
            <Link class="nav-link {$currentSection == 0 ? 'active' : ''}" to="/">
                Inicio
            </Link>
        </li>

        {#each secciones as seccion (seccion.id)}
            <li class="nav-item">
                <Link class="nav-link {$currentSection == seccion.id ? 'active' : ''}" to="/{seccion.slug}">
                    {seccion.descripcion}
                </Link>
            </li>
        {/each}
    </ul>
</div>

<!-- <li class="nav-item dropdown">
    <a
    class="nav-link dropdown-toggle"
    data-bs-toggle="dropdown"
    href
    role="button"
    aria-haspopup="true"
    aria-expanded="false"
    >
        PROMOCIONALES
    </a>
    <div class="dropdown-menu">
    <a class="dropdown-item" href>Soporte para celular</a>
    <a class="dropdown-item" href>Porta gafete</a>
    <a class="dropdown-item" href>Boletos</a>
    <a class="dropdown-item" href>Tarjetas</a>
    <a class="dropdown-item" href>Gafete con pin</a>
    <a class="dropdown-item" href>Candados</a>
    <a class="dropdown-item" href>Blondas</a>
    <a class="dropdown-item" href>Maleteros</a>
    <a class="dropdown-item" href>QR para restaurantes</a>
</li> -->