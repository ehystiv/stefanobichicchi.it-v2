<script>
	import '$lib/style/main.scss';
	import Footer from '../../components/Footer.svelte';
	import Header from '../../components/Header.svelte';
</script>

<div class="grid grid-rows-layout">
	<Header />

	<main class=" overflow-y-auto scrollbar-hide snap-y snap-mandatory scroll-smooth z-10">
		<slot />
	</main>

	<Footer />
</div>
