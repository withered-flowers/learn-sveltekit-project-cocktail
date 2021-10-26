<script context="module" lang="ts">
	import type { DrinkType } from 'src/types';

	export async function load({ fetch }) {
		// get data from random index.json.ts
		const response = await fetch('/cocktails/random/random.json');
		const result: DrinkType = await response.json();

		return {
			props: { drinkProp: result }
		};
	}
</script>

<script lang="ts">
	import CocktailCard from '$lib/CocktailCard.svelte';

	export let drinkProp: DrinkType;

	let drinkState: DrinkType = drinkProp;

	const onClickHandler = async () => {
		const response = await fetch('/cocktails/random/random.json');
		drinkState = await response.json();
	};
</script>

<div class="container min-w-full mx-auto text-center justify-center py-4">
	<button class="btn btn-secondary btn-outline" on:click={onClickHandler}>Randomize Cocktail</button
	>

	<!-- Card Section -->
	<div class="grid grid-cols-6 gap-4 pt-4">
		<CocktailCard {drinkState} />
	</div>
</div>
