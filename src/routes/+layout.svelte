<script>
	import '$lib/style/main.scss';
	import Footer from '../components/Footer.svelte';
	import Header from '../components/Header.svelte';
</script>

<div class="app">
	<Header />

	<main>
		<slot />
	</main>

	<Footer />
</div>

<style lang="scss">
	.app {
		display: grid;
		grid-template-rows: 8vh 84vh 8vh;

		main {
			-ms-overflow-style: none; /* for Internet Explorer, Edge */
			scrollbar-width: none; /* for Firefox */
			overflow-y: scroll;

			scroll-snap-type: y mandatory;
			scroll-behavior: smooth;

			&::-webkit-scrollbar {
				display: none; /* for Chrome, Safari, and Opera */
			}
		}
	}
</style>
