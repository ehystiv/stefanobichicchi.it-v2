<script lang="ts">
	import ArrowCircleDown from 'phosphor-svelte/lib/ArrowCircleDown';

	export let to: string | boolean = false;
</script>

{#if to}
	<a
		class="arrow absolute z-10 left-1/2 -translate-x-1/2 text-ctp-text rounded-lg transition-all duration-500 ease-in-out bottom-4 dark:bg-neutral-900 dark:rounded-full"
		href={String(to)}
	>
		<ArrowCircleDown size="60" />
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
