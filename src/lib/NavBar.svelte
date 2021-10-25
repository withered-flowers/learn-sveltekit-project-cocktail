<script>
	import Fa from 'svelte-fa/src/fa.svelte';
	import { faGithub } from '@fortawesome/free-brands-svg-icons';
</script>

<div class="navbar mb-2 shadow-lg bg-neutral text-neutral-content rounded-box" data-theme="pastel">
	<div class="flex-none px-2 mx-2">
		<span class="text-lg font-bold">
			<a href="/"> Project Cocktail - SvelteKit </a>
		</span>
	</div>
	<div class="flex-1 px-2 mx-2">
		<div class="items-stretch hidden lg:flex">
			<a class="btn btn-ghost btn-sm rounded-btn" href="/cocktails"> Cocktail - List </a>
			<a class="btn btn-ghost btn-sm rounded-btn" href="/cocktails/random"> Cocktail - Random </a>
		</div>
	</div>
	<div class="flex-none">
		<a
			class="btn btn-square btn-ghost px-2 mx-2"
			href="https://github.com/withered-flowers/learn-sveltekit-project-cocktail"
		>
			<Fa icon={faGithub} size="2x" />
		</a>
	</div>
</div>
