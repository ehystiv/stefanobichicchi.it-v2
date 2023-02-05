<script lang="ts">
	import Section from './shared/Section.svelte';
	import Terminal from './shared/Terminal.svelte';

	let content = '';
</script>

<Section id="works" to="#languages">
	<div class="h-full basis-full p-1 grid grid-cols-2 grid-rows-[1fr] gap-x-4">
		<div class="container-left">
			<Terminal title="Lavori" command="works ls -la" {content} />
		</div>
		<div class="container-right">
			<Terminal title="Apprendimento" command="learns ls -la" {content} />
		</div>
	</div>
</Section>
