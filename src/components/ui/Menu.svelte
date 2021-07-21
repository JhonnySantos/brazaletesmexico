<script>
    import { onMount } from "svelte"
    import { Link } from "svelte-routing";
    import { currentSection, apiHost } from "../../stores/stores";

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
            <li class="nav-item me-2">
                <Link class="nav-link {seccion.descripcion === "ECOFRIENDLY" ? "link-ecofriendly" : ""} {$currentSection == seccion.id ? 'active' : ''}" to="/{seccion.slug}">
                    {seccion.descripcion}
                </Link>
            </li>
        {/each}
    </ul>
</div>
