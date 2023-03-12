<script>
	import Moon from 'phosphor-svelte/lib/Moon';
	import Sun from 'phosphor-svelte/lib/Sun';

	import { fly, fade } from 'svelte/transition';

	let title = 'Stefano Bichicchi - Web Developer';
	let writedTitle = '';
	let i = 0;

	let darkTheme = false;

	const iconSize = 30;

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

	writeTitle();
</script>

<header class="flex justify-between items-center px-4">
	<h1 class="text-lg transition-all duration-500 ease-in-out dark:text-lime-400">
		{writedTitle}
		<span class="underscore dark:text-lime-400">_</span>
	</h1>
	<button class="cursor-pointer" on:click={toggleDarkTheme}>
		{#if !darkTheme}
			<div>
				<Moon size={iconSize} color="black" />
			</div>
		{:else}
			<div>
				<Sun size={iconSize} color="white" />
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
