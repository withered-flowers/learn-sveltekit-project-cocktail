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
	export let drinkProp: DrinkType;

	let drinkState: DrinkType = drinkProp;

	const onClickHandler = async () => {
		const response = await fetch('/cocktails/random/random.json');
		drinkState = await response.json();
	};
</script>

<div class="container min-w-full mx-auto text-center justify-center py-4">
	<button class="btn btn-primary" on:click={onClickHandler}>Randomize Cocktail</button>

	<!-- Card Section -->
	<div class="grid grid-cols-6 gap-4 pt-4">
		<div class="col-start-3 col-span-2">
			<div class="card text-center shadow-2xl bg-gray-100">
				<figure class="px-10 pt-10">
					<img
						src={drinkState.thumbnail}
						alt="Drink Thumbnail"
						class="object-cover object-center rounded-lg shadow-lg h-80"
					/>
				</figure>
				<div class="card-body">
					<h2 class="card-title">{drinkState.name}</h2>
					<h3 class="py-2 font-semibold">Instructions</h3>
					<p>{drinkState.instructions}</p>
					<h3 class="py-2 font-semibold">Ingredients</h3>
					{#each drinkState.ingredients as ingredient}
						<p>{ingredient.amount} - {ingredient.name}</p>
					{/each}
				</div>
			</div>
		</div>
	</div>
</div>
