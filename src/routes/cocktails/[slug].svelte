<script context="module" lang="ts">
	import type { DrinkType, IngredientType } from 'src/types';

	export async function load({ page, fetch }) {
		const response = await fetch(
			`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${page.params.slug}`
		);

		const fetchedData = await response.json();

		const ingredients: IngredientType[] = [...Array(15)]
			.map((_value, idx) => ({
				name: fetchedData.drinks[0][`strIngredient${idx + 1}`],
				amount: fetchedData.drinks[0][`strMeasure${idx + 1}`]
			}))
			.filter((ingredient) => ingredient.name && ingredient.amount);

		const selectedDrink: DrinkType = fetchedData.drinks.map((drink) => {
			return {
				name: drink.strDrink,
				instructions: drink.strInstructions,
				ingredients,
				thumbnail: drink.strDrinkThumb
			};
		})[0];

		return {
			props: {
				selectedDrink
			}
		};
	}
</script>

<script>
	import CocktailCard from '$lib/CocktailCard.svelte';

	export let selectedDrink;
</script>

<div class="container min-w-full mx-auto text-center justify-center py-4">
	<a class="btn btn-secondary btn-outline" href="/cocktails">Back to List</a>

	<div class="grid grid-cols-6 gap-4 pt-4">
		<CocktailCard drinkState={selectedDrink} />
	</div>
</div>
