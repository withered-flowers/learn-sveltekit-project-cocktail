<script context="module" lang="ts">
	import type { DrinkType } from 'src/types';

	export async function load({ fetch }) {
		const response = await fetch('/cocktails/cocktails.json');
		const result: DrinkType[] = (await response.json()).cocktailsList;

		return {
			props: { drinksProp: result }
		};
	}
</script>

<script lang="ts">
	export let drinksProp: DrinkType[];
	let drinksState: DrinkType[] = drinksProp;
</script>

<div class="container mx-auto">
	<div class="grid grid-cols-3 gap-4">
		{#each drinksState as drink}
			<div class="card text-center shadow-2xl bg-gray-100">
				<figure class="px-10 pt-10">
					<img src={drink.thumbnail} alt={drink.name} class="rounded-xl" />
				</figure>
				<div class="card-body">
					<h2 class="card-title">{drink.name}</h2>
					<p>{drink.category}</p>
					<div class="justify-center card-actions">
						<button class="btn btn-outline btn-accent">More info</button>
					</div>
				</div>
			</div>
		{/each}
	</div>
</div>
