<script lang="ts">
	import Section from './shared/Section.svelte';

	const items = [
		'devicon-html5-plain',
		'devicon-css3-plain',
		'devicon-bootstrap-plain',
		'devicon-sass-original',
		'devicon-tailwindcss-plain',
		'devicon-javascript-plain',
		'devicon-nodejs-plain',
		'devicon-typescript-plain',
		'devicon-express-original',
		'devicon-nestjs-plain',
		'devicon-vuejs-plain',
		'devicon-svelte-plain',
		'devicon-nuxtjs-plain',
		'devicon-php-plain',
		'devicon-laravel-plain',
		'devicon-c-plain',
		'devicon-java-plain',
		'devicon-python-plain',
		'devicon-git-plain',
		'devicon-github-original',
		'devicon-windows8-original',
		'devicon-linux-plain',
		'devicon-postgresql-plain',
		'devicon-mysql-plain',
		'devicon-mongodb-plain',
		'devicon-nginx-original',
		'devicon-godot-plain',
		'devicon-npm-original-wordmark',
		'devicon-yarn-plain',
		'devicon-raspberrypi-line',
		'devicon-ubuntu-plain',
		'devicon-vscode-plain',
		'devicon-docker-plain'
	];
</script>

<Section id="languages">
	<div class="h-full basis-full grid grid-cols-6 grid-rows-6 place-items-center gap-3 p-10">
		{#each items as item}
			<div
				class="card h-full w-full bg-white flex justify-center items-center rounded-xl transition-all hover:z-50 hover:scale-150 hover:border relative"
			>
				<em class="{item} colored text-6xl" />
				<div
					class="absolute w-full h-1/3 bottom-0 rounded-b-xl bg-gradient-to-t from-slate-500 to-transparent hidden items-center justify-center"
				>
					<h1 class="text-center dark:text-black">TITLE</h1>
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
