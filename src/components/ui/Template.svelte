<script>
    import Header from './Header.svelte';
    import Footer from './Footer.svelte';
    import {fade} from 'svelte/transition';
</script>


<Header />

<div transition:fade>
    <slot></slot>
</div>

<Footer />