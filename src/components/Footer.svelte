<script>
	import { slide } from 'svelte/transition';
	import { onMount } from 'svelte';

	import GithubLogo from 'phosphor-svelte/lib/GithubLogo';
	import LinkedinLogo from 'phosphor-svelte/lib/LinkedinLogo';
	import InstagramLogo from 'phosphor-svelte/lib/InstagramLogo';
	import Coffee from 'phosphor-svelte/lib/Coffee';

	const year = new Date().getFullYear();
	let ready = false;

	onMount(() => (ready = true));
</script>

<footer class="px-4 flex justify-between items-center dark:text-lime-400">
	{#if ready}
		<div class="w-1/4 flex justify-evenly" transition:slide={{ duration: 1000 }}>
			<a href="https://github.com/Stiv1100001" class="transition-all hover:rotate-45">
				<GithubLogo size="25" />
			</a>
			<a
				href="https://www.linkedin.com/in/stefano-bichicchi/"
				class=" transition-all hover:rotate-45"
			>
				<LinkedinLogo size="25" />
			</a>
			<a href="https://www.instagram.com/ehystiv/" class=" transition-all hover:rotate-45">
				<InstagramLogo size="25" />
			</a>
			<a href="https://ko-fi.com/stivvv" class=" transition-all hover:rotate-45">
				<Coffee size="25" />
			</a>
		</div>
	{/if}
	<div />
	<h2 class="text-sm italic font-normal">SB - {year}</h2>
</footer>
