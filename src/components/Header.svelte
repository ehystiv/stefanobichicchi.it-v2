<script lang="ts">
	import Moon from 'phosphor-svelte/lib/Moon';
	import Sun from 'phosphor-svelte/lib/Sun';
	import { Howl, Howler } from 'howler';
	import SwitchSound from './../lib/sound/switch.mp3';

	import { onMount } from 'svelte';

	let title = 'Stefano Bichicchi - Web Developer';
	let writedTitle = '';
	let i = 0;
	let howl: any = null;

	function writeTitle() {
		if (writedTitle.length < title.length) {
			writedTitle += title[i];
			i++;

			setTimeout(writeTitle, 110);
		}
	}

	

	onMount(() => {
		writeTitle();

		howl = new Howl({
			src: SwitchSound,
			volume: 0.3
		});
	});
</script>

<header class="flex justify-between items-center px-4">
	<h1 class="text-lg transition-all duration-500 ease-in-out text-ctp-green ">
		{writedTitle}
		<span class="underscore dark:text-lime-400">_</span>
	</h1>
	
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
