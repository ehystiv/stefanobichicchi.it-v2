<script lang="ts">
	import Section from './shared/Section.svelte';
	import Timeline from './shared/Timeline.svelte';

	import works from '$lib/data/works.js';
	import learns from '$lib/data/learns.js';
</script>

<Section id="works" to="#languages">
	<div
		class="h-full basis-full sm:p-0 lg:p-1 grid sm:grid-cols-1 sm:grid-rows-2 lg:grid-cols-2 lg:grid-rows-1 gap-y-4 lg:gap-x-4 py-4"
	>
		<div class="max-h-full overflow-hidden">
			<Timeline title="Lavori" items={works} />
		</div>
		<div class="overflow-hidden">
			<Timeline title="Apprendimento" items={learns} />
		</div>
	</div>
</Section>
