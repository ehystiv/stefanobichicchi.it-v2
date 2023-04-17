<script>
	import Section from './shared/Section.svelte';
</script>

<Section id="home" to="#works">
	<div class="text-right basis-3/4 grid grid-cols-[1fr_0.1fr] gap-x-4 gap-y-4">
		<h1 class="sm:text-2xl md:text-4xl lg:text-5xl">
			Ciao, sono <span class="underline underline-offset text-ctp-green">Stefano</span>
		</h1>
		<h1 class="sm:text-2xl md:text-4xl lg:text-5xl text-center say-hi">👋</h1>
		<div class="sm:text-md md:text-lg lg:text-2xl font-light">
			Sviluppatore WEB e amante della tecnologia, <span class="text-ctp-flamingo">@Bologna.</span>
			<br />
			Studente e autodidatta, amante del FullStack Web Developing, ho l'hobby di imparare nuovi linguaggi
			di programmazione ogni giorno. <br />
			<span class=" text-ctp-red">Dungeon Master</span>, <span class="  text-ctp-sky">videogamer</span>, <span class=" text-ctp-yellow">larper</span>, <span class=" text-ctp-lavender">avido lettore</span>.
		</div>
		<div class="flex flex-col items-center justify-between text-2xl">
			<span>🌐</span>
			<span>💻</span>
			<span>🪄</span>
		</div>
	</div>
</Section>

<style scoped>
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
