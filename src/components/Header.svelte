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
		document.documentElement.classList.toggle('dark');
		darkTheme = !!document.documentElement.classList.contains('dark');
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

<header class="flex justify-between items-center px-4">
	<h1 class="text-lg transition-all duration-500 ease-in-out dark:text-lime-400">
		{writedTitle}<span class="underscore dark:text-lime-400">_</span>
	</h1>
	<button class="cursor-pointer" on:click={toggleDarkTheme}>
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

<style lang="postcss">
	.underscore {
		animation: fade 1s infinite steps(1, end);
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
