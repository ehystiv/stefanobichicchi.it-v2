<script>
	import '$lib/style/main.scss';
	// import Footer from '../components/Footer.svelte';
	import Header from '../../components/Header.svelte';
</script>

<div class="grid grid-rows-[7vh_93vh]">
	<Header />

	<main>
		<slot />
	</main>
</div>
