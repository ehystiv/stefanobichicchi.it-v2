<script lang="ts">
	import Section from './shared/Section.svelte';

	import langAndTools from '../lib/data/langAndTools';

	$: ltSort = langAndTools.sort((a, b) => a.type.localeCompare(b.type));
</script>

<Section id="languages">
	<div class="h-full basis-full p-5">
		<h1 class="text-4xl mb-5">Come ti posso aiutare?</h1>
		<div class="flex flex-wrap justify-center items-center gap-2 h-[90%]">
			{#each ltSort as lt}
				<div
					class="icon aspect-square w-16 md:w-24 lg:w-32 flex justify-center items-center bg-white"
				>
					<em class="{lt.icon} colored" />
				</div>
			{/each}
		</div>
	</div>
</Section>

<style lang="scss" scoped>
	.icon {
		@apply border rounded-lg p-1 shadow-lg text-4xl lg:text-6xl transition-all hover:scale-125;
	}
</style>
