<script>
	import ArrowDownSquare from 'svelte-bootstrap-icons/lib/ArrowDownSquareFill.svelte';

	export let to = '';
</script>

<a
	class="arrow absolute left-1/2 -translate-x-1/2 text-black dark:text-lime-400 rounded-sm transition-all duration-500 ease-in-out bottom-4 "
	href={to}
>
	<ArrowDownSquare width="50px" height="50px" />
</a>

<style lang="scss">
	.arrow {
		animation: bounce 2s infinite ease-in;
	}

	@keyframes bounce {
		0% {
			bottom: 1rem;
		}

		50% {
			bottom: 1.5rem;
		}

		100% {
			bottom: 1rem;
		}
	}
</style>
