<script>
	import {Router, Route, Link} from "svelte-routing";
	
	import Home from './paginas/Home.svelte';
	import Ecofriendly from './paginas/secciones/Ecofriendly.svelte';
	import Brazaletes from './paginas/secciones/Brazaletes.svelte';
	import RFID from './paginas/secciones/RFID.svelte';
	import Hologramas from './paginas/secciones/Hologramas.svelte';
	import Promocionales from './paginas/secciones/Promocionales.svelte';
	import Tienda from './paginas/secciones/Tienda.svelte';
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