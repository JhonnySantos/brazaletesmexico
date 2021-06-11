<script>
	import {Router, Route, Link} from "svelte-routing";

	import Home from './components/pages/Home.svelte';
	import Brazaletes from './components/pages/Brazaletes.svelte';
	import RFID from './components/pages/RFID.svelte';
	import Ecofriendly from './components/pages/Ecofriendly.svelte';
	import Hologramas from './components/pages/Hologramas.svelte';
	import Promocionales from './components/pages/Promocionales.svelte';
	import Tienda from './components/pages/Tienda.svelte';
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
		<Route path="/tienda/:id" component={Tienda} />
	</div>
</Router>

<style>
	:global(.card-tipo-brazalete) {
		height: 320px;
		min-height: 320px;
		max-height: 320px;
        cursor: pointer;
    }
</style>