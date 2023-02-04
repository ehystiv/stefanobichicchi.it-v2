<script>
	import Arrow from './Arrow.svelte';

	export let id = '';
	export let to = '';
</script>

<section {id} class="relative h-full px-8 flex justify-end items-center snap-start">
	<slot />
	<Arrow {to} />
</section>
