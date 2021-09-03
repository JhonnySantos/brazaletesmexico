<script>
    import { currentSection } from "../../stores/stores";
    import { link } from "svelte-routing";
    export let seccion = {};
    let showSubmenu = false;

    console.log(seccion);

    const handleMouseOver = (e) => {
        showSubmenu = true;
    };

    const handleMouseOut = (e) => {
        showSubmenu = false;
    };
</script>

{#if seccion.submenus}
    <li
        class="nav-item me-2 position-relative"
        on:mouseover={handleMouseOver}
        on:mouseleave={handleMouseOut}
    >
        <a
            class="nav-link {seccion.descripcion === 'ECOFRIENDLY'
                ? 'link-ecofriendly'
                : ''} {$currentSection == seccion.id ? 'active' : ''}"
            href="/{seccion.slug}"
            use:link
        >
            {seccion.descripcion} <i class="fas fa-caret-down ms-2" />
        </a>

        {#if showSubmenu}
            <div
                class="position-absolute top-100 start-0 w-150 shadow bring-to-front"
            >
                <ul class="list-unstyled bg-primary">
                    {#each seccion.submenus as { id, descripcion, slug }, i}
                        <li class="small">
                            <a class="nav-link" href="/{slug}" use:link>
                                {descripcion}
                            </a>
                        </li>
                    {/each}
                </ul>
            </div>
        {/if}
    </li>
{:else}
    <li class="nav-item me-2">
        <a
            class="nav-link {seccion.descripcion === 'ECOFRIENDLY'
                ? 'link-ecofriendly'
                : ''} {$currentSection == seccion.id ? 'active' : ''}"
            href="/{seccion.slug}"
            use:link
        >
            {seccion.descripcion}
        </a>
    </li>
{/if}

<style>
    .bring-to-front {
        z-index: 1081 !important;
    }

    .w-150 {
        width: 150% !important;
    }
</style>
