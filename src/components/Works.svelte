<script lang="ts">
	import Section from './shared/Section.svelte';
	import Timeline from './shared/Timeline.svelte';

	import works from '$lib/data/works.js';
	import learns from '$lib/data/learns.js';
</script>

<Section id="works" to="#languages">
	<div class="h-full basis-full p-1 grid grid-cols-2 grid-rows-[1fr] gap-x-4 py-4">
		<div>
			<Timeline title="Lavori" items={works} />
		</div>
		<div>
			<Timeline title="Apprendimento" items={learns} />
		</div>
	</div>
</Section>
