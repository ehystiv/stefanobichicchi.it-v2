<script lang="ts">
	import Moon from 'phosphor-svelte/lib/Moon';
	import Sun from 'phosphor-svelte/lib/Sun';
	import { Howl, Howler } from 'howler';

	import { onMount } from 'svelte';

	let title = 'Stefano Bichicchi - Web Developer';
	let writedTitle = '';
	let i = 0;
	let howl: Howler;

	let currentTheme = 'light';
	const themes = ['light', 'dark'];

	const iconSize = 30;

	function writeTitle() {
		if (writedTitle.length < title.length) {
			writedTitle += title[i];
			i++;

			setTimeout(writeTitle, 110);
		}
	}

	function toggleDarkTheme() {
		howl.play();
		let themeIndex = themes.findIndex((theme) => theme === currentTheme);

		if (++themeIndex >= themes.length) themeIndex = 0;

		currentTheme = themes[themeIndex];

		localStorage.setItem('theme', currentTheme);

		if (currentTheme === 'light') {
			document.documentElement.classList.remove('dark');
		} else if (currentTheme === 'dark') {
			document.documentElement.classList.add('dark');
		}
	}

	function initTheme() {
		currentTheme = localStorage.getItem('theme') || 'light';

		if (currentTheme === 'dark') document.documentElement.classList.add('dark');
	}

	onMount(() => {
		writeTitle();
		initTheme();

		howl = new Howl({
			src: 'src/lib/sound/switch.mp3',
			volume: 0.3
		});
	});
</script>

<header class="flex justify-between items-center px-4">
	<h1 class="text-lg transition-all duration-500 ease-in-out dark:text-lime-400">
		{writedTitle}
		<span class="underscore dark:text-lime-400">_</span>
	</h1>
	<button class="cursor-pointer" on:click={toggleDarkTheme}>
		{#if currentTheme === 'light'}
			<div>
				<Moon size={iconSize} color="black" />
			</div>
		{:else if currentTheme === 'dark'}
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
