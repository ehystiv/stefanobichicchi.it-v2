<script lang="ts">
	import Section from './shared/Section.svelte';

	import langAndTools from '../lib/data/langAndTools';
	
	const langAndToolsTypes = Array.from(new Set(langAndTools.map((x) => x.type)));

</script>

<Section id="languages">
	<div class="h-full basis-full">
		<div
			class="h-full grid grid-cols-2 lg:grid-cols-3 grid-rows-[3rem,1fr,1fr,1fr] lg:grid-rows-[3rem,1fr,1fr] gap-3 dark:text-black"
		>
			<h1 class="text-4xl col-span-2 lg:col-span-3 dark:text-white">Linguaggi e strumenti 🧰</h1>
			{#each langAndToolsTypes as type}
			<div class="card">
				<div class="title">{type}</div>
				<div class="container">
					{#each langAndTools.filter((x) => x.type === type) as lang}
							<div class="group flex relative">
								<em class="{lang.icon} icon colored" />
								<span class="group-hover:opacity-100 transition-opacity bg-gray-800 px-1 text-sm lg:text-lg text-gray-100 rounded-md absolute left-1/2 
    -translate-x-1/2 translate-y-full opacity-0">{lang.name}</span>
							</div>
					{/each}
				</div>
			</div>
			{/each}
			
		</div>
	</div>
</Section>

<style lang="scss" scoped>
	.card {
		@apply bg-white h-full rounded-md p-3;

		.title {
			@apply text-lg mb-3;
		}

		.container {
			@apply flex flex-wrap justify-between gap-2;

			.name {
				display: none;
			}

			.icon {
				@apply border rounded-lg p-1 shadow-lg text-4xl lg:text-6xl transition-all hover:scale-125;

			}
		}
	}
</style>
