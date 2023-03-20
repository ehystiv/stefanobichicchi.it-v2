<script lang="ts">
	import Section from './shared/Section.svelte';

	import langAndTools from '../lib/data/langAndTools';
</script>

<Section id="languages">
	<div class="h-full basis-full">
		<div
			class="h-full grid grid-cols-2 lg:grid-cols-3 grid-rows-[3rem,1fr,1fr,1fr] lg:grid-rows-[3rem,1fr,1fr] gap-3 dark:text-black"
		>
			<h1 class="text-4xl col-span-2 lg:col-span-3 dark:text-white">Linguaggi e strumenti 🧰</h1>
			<div class="card">
				<div class="title">Linguaggi</div>
				<div class="container">
					{#each langAndTools.filter((x) => x.type === 'lang') as lang}
						<div class="relative">
							<span
								class="name absolute bg-blue-100 left-1/2 -top-8 -translate-x-1/2 text-sm p-2 rounded-md"
								>{lang.name}</span
							>
							<em class="{lang.icon} icon colored" />
						</div>
					{/each}
				</div>
			</div>
			<div class="card">
				<div class="title">Strumenti</div>
				<div class="container">
					{#each langAndTools.filter((x) => x.type === 'tools') as lang}
						<em class="{lang.icon} icon colored" />
					{/each}
				</div>
			</div>
			<div class="card">
				<div class="title">Framework</div>
				<div class="container">
					{#each langAndTools.filter((x) => x.type === 'framework') as lang}
						<em class="{lang.icon} icon colored" />
					{/each}
				</div>
			</div>
			<div class="card">
				<div class="title">Sistemi</div>
				<div class="container">
					{#each langAndTools.filter((x) => x.type === 'system') as lang}
						<em class="{lang.icon} icon colored" />
					{/each}
				</div>
			</div>
			<div class="card">
				<div class="title">Altro</div>
				<div class="container">
					{#each langAndTools.filter((x) => x.type === 'other') as lang}
						<em class="{lang.icon} icon colored" />
					{/each}
				</div>
			</div>
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

				&:hover ~ .name {
					display: block;
				}
			}
		}
	}
</style>
