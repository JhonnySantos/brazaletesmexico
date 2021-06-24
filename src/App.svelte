<script>
	import '../node_modules/@fortawesome/fontawesome-free/css/all.css'
	import './assets/css/lux-bootstrap.css'

	import './assets/js/all.js'
	import './assets/js/main'

	import {Router, Route} from "svelte-routing";

	import Home from './components/pages/Home.svelte';
	import Brazaletes from './components/pages/Brazaletes.svelte';
	import RFID from './components/pages/RFID.svelte';
	import Ecofriendly from './components/pages/Ecofriendly.svelte';
	import Hologramas from './components/pages/Hologramas.svelte';
	import Promocionales from './components/pages/Promocionales.svelte';
	import Tienda from './components/pages/Tienda.svelte';
	import BrazaleteDetalle from "./components/pages/BrazaleteDetalle.svelte";
	import NotFoundPage from './components/pages/NotFoundPage.svelte';
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

		<Route component={NotFoundPage} />
	</div>
</Router>

<style>
	:global(.card-tipo-brazalete) {
		/* height: 320px; */
		/* min-height: 320px; */
		/* max-height: 320px; */
        cursor: pointer;
    }

	:global(.card-tipo-brazalete:hover) {
		opacity: 0.7;
		box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;
    }

	:global(.link-ecofriendly:hover) {
        color: #38eeab !important;
    }
</style>