<script>
	import ArrowDownSquare from 'svelte-bootstrap-icons/lib/ArrowDownSquareFill.svelte';

	export let to = '';
</script>

<a class="arrow" href={to}>
	<ArrowDownSquare width="50px" height="50px" />
</a>

<style lang="scss">
	@import '../../lib/style/partials/_variables.scss';

	.arrow {
		border-radius: 10px;
		color: black;

		position: absolute;
		// bottom: 5rem;
		left: 50%;
		transform: translate(-50%);

		transition: all $dark-theme-duration $dark-theme-timing;

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
