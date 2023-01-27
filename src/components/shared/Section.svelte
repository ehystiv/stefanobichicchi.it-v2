<script>
	import Arrow from './Arrow.svelte';

	export let id = '';
	export let to = '';
</script>

<section {id} class="section">
	<slot />
	<Arrow {to} />
</section>

<style>
	section.section {
		position: relative;
		height: 100%;

		padding: 0 2rem;
		display: flex;
		justify-content: end;
		align-items: center;

		scroll-snap-align: start;
	}
</style>
