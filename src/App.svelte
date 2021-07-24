<script>
	import '../node_modules/@fortawesome/fontawesome-free/css/all.css'
	import './assets/css/lux-bootstrap.css'

	import './assets/js/all.js'
	import './assets/js/main'

	import {Router, Route} from "svelte-routing";

	import Blog from './components/pages/Blog.svelte';
	import Home from './components/pages/Home.svelte';
	import RFID from './components/pages/RFID.svelte';
	import Post from './components/pages/Post.svelte';
	import Tienda from './components/pages/Tienda.svelte';
	import Nosotros from './components/pages/Nosotros.svelte';
	import Contacto from './components/pages/Contacto.svelte';
	import Ocasiones from './components/pages/Ocasiones.svelte';
	import Privacidad from './components/pages/Privacidad.svelte';
	import Brazaletes from './components/pages/Brazaletes.svelte';
	import Hologramas from './components/pages/Hologramas.svelte';
	import Ecofriendly from './components/pages/Ecofriendly.svelte';
	import NotFoundPage from './components/pages/NotFoundPage.svelte';
	import Promocionales from './components/pages/Promocionales.svelte';
	import BrazaleteDetalle from "./components/pages/BrazaleteDetalle.svelte";
	import ResultadosBusqueda from './components/pages/ResultadosBusqueda.svelte';
	import TerminosCondiciones from './components/pages/TerminosCondiciones.svelte';
</script>

<Router>
	<div>
		<Route path="/" component={Home} />

		<Route path="/brazaletes" component={Brazaletes} />
		<Route path="/brazaletes/:tipo" component={Brazaletes} let:params />
		<Route path="/brazaletes/:tipo/:slug" component={BrazaleteDetalle} let:params />

		<Route path="/rfid" component={RFID} />
		<Route path="/rfid/:tipo" component={RFID} let:params />
		<Route path="/rfid/:tipo/:slug" component={BrazaleteDetalle} let:params />

		<Route path="/ecofriendly" component={Ecofriendly} />
		<Route path="/ecofriendly/:tipo" component={Ecofriendly} let:params />
		<Route path="/ecofriendly/:tipo/:slug" component={BrazaleteDetalle} let:params />

		<Route path="/hologramas" component={Hologramas} />
		<Route path="/hologramas/:tipo" component={Hologramas} let:params />
		<Route path="/hologramas/:tipo/:slug" component={BrazaleteDetalle} let:params />

		<Route path="/promocionales" component={Promocionales} />
		<Route path="/promocionales/:tipo" component={Promocionales} let:params />
		<Route path="/promocionales/:tipo/:slug" component={BrazaleteDetalle} let:params />

		<Route path="/tienda" component={Tienda} />
		<Route path="/tienda/:slug" component={BrazaleteDetalle} let:params />

		<Route path="/ocasiones/:slug" component={Ocasiones} let:params />

		<Route path="/search/:search" component={ResultadosBusqueda} let:params />

		<Route path="/nosotros" component={Nosotros} />

		<Route path="/contacto" component={Contacto} />

		<Route path="/aviso-de-privacidad" component={Privacidad} />

		<Route path="/terminos-de-uso-y-condiciones" component={TerminosCondiciones} />

		<Route path="/blog" component={Blog} />

		<Route path="/blog/post/:slug" component={Post} />

		<Route component={NotFoundPage} />
	</div>
</Router>

<style>
	:global(.card-tipo-brazalete) {
        cursor: pointer;
		border: 0 !important;
    }

	:global(.card-tipo-brazalete:hover) {
		box-shadow: 0 0.125rem .25rem rgba(0, 0, 0, 0.1) !important;
    }

	:global(.link-ecofriendly:hover) {
        color: #38eeab !important;
    }

	:global(.link-resultado-buscador:hover) {
        background-color: #e8e8e8 !important;
    }

	:global(.video-responsive) {
		height: 0;
		overflow: hidden;
		padding-bottom: 56.25%;
		padding-top: 30px;
		position: relative;
	}
	:global(.video-responsive iframe, .video-responsive object, .video-responsive embed) {
		height: 100%;
		left: 0;
		position: absolute;
		top: 0;
		width: 100%;
	}
</style>