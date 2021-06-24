<script>
    import {link} from 'svelte-routing'
    import Template from '../ui/Template.svelte'
    import FormCotizacion from '../ui/FormCotizacion.svelte'
</script>

<Template>
    <div class="p-5">
        <h1> 404 </h1>
        <h3> PAGINA NO ENCONTRADA </h3>

        <div class="text-center">
            <a href="/" class="btn btn-secondary redirect" use:link>
                INICIO
            </a>
        </div>
    </div>
</Template>

<style>
    h1 {
        font-size: 120px;
        text-align: center;
        margin-bottom: 20px;
    }

    h3 {
        text-align: center;
        margin-bottom: 40px;
    }

    a {
        min-width: 200px;
    }

    i {
        color: black;
    }
</style>