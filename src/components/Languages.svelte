<script lang="ts">
	import Section from './shared/Section.svelte';

	import langAndTools from '../lib/data/langAndTools';
</script>

<Section id="languages">
	<div
		class="h-full basis-full grid grid-cols-4 lg:grid-cols-6 lg:grid-rows-6 place-items-center gap-3 p-2 lg:p-10"
	>
		{#each langAndTools as item}
			<div
				class="card h-full w-full bg-white flex justify-center items-center rounded-xl transition-all duration-300 hover:z-50 hover:scale-125 lg:hover:scale-150 hover:border relative aspe"
			>
				<em class="{item.icon} colored text-4xl lg:text-6xl" />
				<div
					class="absolute w-full h-1/3 bottom-0 rounded-b-xl bg-gradient-to-t from-slate-500 to-transparent hidden items-center justify-center"
				>
					<h1 class="text-center dark:text-black text-[.6rem] md:text-md">{item.name}</h1>
				</div>
			</div>
		{/each}
	</div>
</Section>

<style lang="scss">
	.card:hover > div {
		display: flex;
	}
</style>
