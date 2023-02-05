<script lang="ts">
	import ArrowUpRight from 'svelte-bootstrap-icons/lib/ArrowUpRight.svelte';
	import { is_empty } from 'svelte/internal';

	interface JobItem {
		name: string;
		description: string;
		date: string;
		link?: string;
		client?: string;
		techStack: string;
	}

	export let title: string;
	export let items: JobItem[] = [];
</script>

<div class="h-full w-full bg-white rounded-xl shadow-xl p-4 overflow-auto scrollbar-hide">
	<h1 class="text-3xl font-thin">{title}</h1>
	<hr class="mb-4" />
	<div class="flex flex-col">
		{#each items as item}
			<div
				class="relative grid grid-cols-[1fr_.2fr] grid-rows-[.5fr_.5fr_2fr] px-2 pb-2 border-l-2 before:content[''] before:absolute before:top-0 before:left-0 before:rounded-full before:bg-white before:w-[12px] before:h-[12px] before:border-2 before:border-black before:-translate-x-[60%]"
			>
				<h1 class=" text-lg capitalize flex items-center">
					<div>
						{item.name}
						{#if item.client} <span>- ({item.client})</span> {/if}
					</div>
					<a href={item.link} target="_blank" rel="noopener noreferrer"
						><ArrowUpRight class="ml-1" /></a
					>
				</h1>
				<h1 class="text-center">{item.date}</h1>
				<h3 class="col-span-2 text-xs">{item.techStack}</h3>
				<p class="col-span-2 text-sm py-1">{item.description}</p>
			</div>
		{/each}
	</div>
</div>
