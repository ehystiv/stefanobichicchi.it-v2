<script>
	import Moon from 'svelte-bootstrap-icons/lib/Moon.svelte';
	import Sun from 'svelte-bootstrap-icons/lib/Sun.svelte';

	let title = 'Stefano Bichicchi - Web Developer';
	let writedTitle = '';
	let i = 0;

	let darkTheme = false;

	const iconSize = 20;

	function writeTitle() {
		if (writedTitle.length < title.length) {
			writedTitle += title[i];
			i++;

			setTimeout(writeTitle, 110);
		}
	}

	function toggleDarkTheme() {
		const body = document.querySelector('body');
		body?.classList.toggle('dark');
		darkTheme = !!body?.classList.contains('dark');
		localStorage.theme = darkTheme;
	}

	function initTheme() {
		// const isDarkTheme = !!localStorage.theme;
		// if (isDarkTheme === 'true') {
		// 	document.querySelector('body')?.classList.add('dark');
		// }
	}

	initTheme();
	writeTitle();
</script>

<header>
	<h1 class="title">{writedTitle}<span class="underscore">_</span></h1>
	<button class="theme" on:click={toggleDarkTheme}>
		{#if !darkTheme}
			<div>
				<Moon width={iconSize} height={iconSize} fill="black" />
			</div>
		{:else}
			<div>
				<Sun width={iconSize + 5} height={iconSize + 5} fill="white" />
			</div>
		{/if}
	</button>
</header>

<style lang="scss">
	@import '../lib/style/partials/variables';

	header {
		display: flex;
		justify-content: space-between;
		align-items: center;

		padding: 0 1rem;

		.title {
			transition: all $dark-theme-duration $dark-theme-timing;
			font-size: 1.2rem;
			font-weight: 400;

			.underscore {
				animation: fade 1s infinite steps(1, end);
			}
		}

		.theme {
			cursor: pointer;
			background-color: transparent;
			border: none;
		}
	}

	@keyframes fade {
		0% {
			opacity: 1;
		}

		50% {
			opacity: 0;
		}

		100% {
			opacity: 1;
		}
	}
</style>
