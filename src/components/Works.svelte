<script lang="ts">
	import Section from './shared/Section.svelte';
	import Terminal from './shared/Terminal.svelte';

	let content = '';
</script>

<Section id="works">
	<div class="content">
		<div class="container-left">
			<Terminal title="Lavori" command="works ls -la" {content} />
		</div>
		<div class="container-right">
			<Terminal title="Apprendimento" command="learns ls -la" {content} />
		</div>
	</div>
</Section>

<style lang="scss">
	.content {
		height: 100%;
		flex-basis: 100%;

		padding: 5px;
		display: grid;

		grid-template-columns: repeat(2, 1fr);
		grid-template-rows: 1fr;
		column-gap: 1rem;
	}
</style>
