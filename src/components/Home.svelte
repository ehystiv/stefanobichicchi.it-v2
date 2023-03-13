<script>
	import Section from './shared/Section.svelte';
</script>

<Section id="home" to="#works">
	<div class="text-right basis-3/4 grid grid-cols-[1fr_0.1fr] gap-x-4 gap-y-4">
		<h1 class="sm:text-2xl md:text-4xl lg:text-5xl">
			Ciao, sono <span class="underline underline-offset-5 dark:text-lime-400">Stefano</span>
		</h1>
		<h1 class="sm:text-2xl md:text-4xl lg:text-5xl text-center">👋</h1>
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
	</div>
</Section>
