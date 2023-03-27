<script>
	import Section from './shared/Section.svelte';
</script>

<Section id="home" to="#works">
	<div class="text-right basis-3/4 grid grid-cols-[1fr_0.1fr] gap-x-4 gap-y-4">
		<h1 class="sm:text-2xl md:text-4xl lg:text-5xl">
			Ciao, sono <span class="underline underline-offset-5 dark:text-lime-400">Stefano</span>
		</h1>
		<h1 class="sm:text-2xl md:text-4xl lg:text-5xl text-center say-hi">👋</h1>
		<div class="sm:text-md md:text-lg lg:text-2xl font-light">
			Sviluppatore WEB e amante della tecnologia, <span class="dark:text-lime-400">@Bologna.</span>
			<br />
			Studente e autodidatta, amante del FullStack Web Developing, ho l'hobby di imparare nuovi linguaggi
			di programmazione ogni giorno. <br />
			Dungeon Master, videogamer, larper, avido lettore.
		</div>
		<div class="flex flex-col items-center justify-between text-2xl">
			<span>🌐</span>
			<span>💻</span>
			<span>🪄</span>
		</div>
		<div class="relative">
			<a href="/blog" class="button">Leggi gli ultimi post</a>
		</div>
	</div>
</Section>

<style scoped lang="postcss">
	.button {
		@apply absolute inline-block font-bold px-3 py-2 rounded-lg shadow-lg transition-all bg-blue-300 hover:bg-blue-400 hover:shadow-xl border-b-4 border-blue-500 active:border-none active:translate-y-1 right-0 text-sm lg:text-base;
	}

	/* bg-blue-300 py-2 px-3 rounded-lg shadow-lg hover:bg-blue-400 hover:shadow-xl active:shadow-none transition-all font-bold border-b-4 active:border-b-0 border-blue-700 active:translate-y-2 */

	@keyframes shake {
		0% {
			transform: rotate(0deg);
		}
		10% {
			transform: rotate(14deg);
		}
		20% {
			transform: rotate(-8deg);
		}
		30% {
			transform: rotate(14deg);
		}
		40% {
			transform: rotate(-4deg);
		}
		50% {
			transform: rotate(10deg);
		}
		60% {
			transform: rotate(0deg);
		}
		100% {
			transform: rotate(0deg);
		}
	}

	.say-hi {
		animation: shake 2.5s infinite;
		transform-origin: 70% 70%;
	}
</style>
