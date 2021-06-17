<script>
	import {Router, Route} from "svelte-routing";

	import Home from './components/pages/Home.svelte';
	import Brazaletes from './components/pages/Brazaletes.svelte';
	import RFID from './components/pages/RFID.svelte';
	import Ecofriendly from './components/pages/Ecofriendly.svelte';
	import Hologramas from './components/pages/Hologramas.svelte';
	import Promocionales from './components/pages/Promocionales.svelte';
	import Tienda from './components/pages/Tienda.svelte';
	import TiendaDetails from "./components/pages/TiendaDetails.svelte";
</script>

<Router>
	<div>
		<Route path="/" component={Home} />

		<Route path="/brazaletes" component={Brazaletes} />
		<Route path="/brazaletes/:tipo" component={Brazaletes} let:params />
		<!-- <Route path="/brazaletes/:tipo/:id" component={Brazaletes} let:params /> -->

		<Route path="/rfid" component={RFID} />
		<Route path="/rfid/:tipo" component={RFID} let:params />
		<!-- <Route path="/rfid/:tipo/:id" component={RFID} let:params /> -->

		<Route path="/ecofriendly" component={Ecofriendly} />
		<Route path="/ecofriendly/:tipo" component={Ecofriendly} let:params />
		<!-- <Route path="/ecofriendly/:tipo/:id" component={Ecofriendly} let:params /> -->

		<Route path="/hologramas" component={Hologramas} />
		<Route path="/hologramas/:tipo" component={Hologramas} let:params />
		<!-- <Route path="/hologramas/:tipo/:id" component={Hologramas} let:params /> -->

		<Route path="/promocionales" component={Promocionales} />
		<Route path="/promocionales/:tipo" component={Promocionales} let:params />
		<!-- <Route path="/promocionales/:tipo/:id" component={Promocionales} let:params /> -->

		<Route path="/tienda" component={Tienda} />
		<Route path="/tienda/:slug" component={TiendaDetails} let:params />
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