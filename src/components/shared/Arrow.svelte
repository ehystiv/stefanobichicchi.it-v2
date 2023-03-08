<script lang="ts">
	import ArrowDownSquare from 'svelte-bootstrap-icons/lib/ArrowDownSquareFill.svelte';

	export let to: string | boolean = false;
</script>

{#if to}
	<a
		class="arrow absolute z-10 left-1/2 -translate-x-1/2 text-black dark:text-lime-400 rounded-lg transition-all duration-500 ease-in-out bottom-4 bg-white dark:bg-black"
		href={String(to)}
	>
		<ArrowDownSquare width="50px" height="50px" />
	</a>
{/if}

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
