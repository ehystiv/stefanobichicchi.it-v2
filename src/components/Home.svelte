<script>
	import Section from './shared/Section.svelte';
</script>

<Section id="home" to="#works">
	<div class="content">
		<h1 class="hi">Ciao, sono Stefano</h1>
		<h1 class="hand">👋</h1>
		<div class="bio">
			Sviluppatore WEB e amante della tecnologia, @Bologna. <br />
			Studente e autodidatta, amante del FullStack Web Developing, ho l'hobby di imparare nuovi linguaggi
			di programmazione ogni giorno. <br />
			Dungeon Master, videogamer, larper, avido lettore.
		</div>
		<div class="emoji">
			<span>🌐</span>
			<span>💻</span>
			<span>🪄</span>
		</div>
	</div>
</Section>

<style lang="scss">
	.content {
		text-align: right;
		flex-basis: 75%;
		display: grid;
		grid-template-columns: 1fr 0.1fr;
		column-gap: 1rem;
		row-gap: 1rem;
		.hi,
		.hand {
			font-size: 3rem;
		}
		.emoji {
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: space-between;
			font-size: 1.5rem;
		}
		.hand {
			text-align: center;
		}
		.bio {
			font-size: 1.5rem;
			font-weight: 100;
		}
	}
</style>
