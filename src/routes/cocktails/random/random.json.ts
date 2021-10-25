import type { DrinkType, IngredientType } from 'src/types';

export async function get(): Promise<{ body: any }> {
	const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php');
	const result = await response.json();

	const ingredients: IngredientType[] = [...Array(15)]
		.map((_value, idx) => ({
			name: result.drinks[0][`strIngredient${idx + 1}`],
			amount: result.drinks[0][`strMeasure${idx + 1}`]
		}))
		.filter((ingredient) => ingredient.name && ingredient.amount);

	return {
		body: {
			name: result.drinks[0].strDrink,
			instructions: result.drinks[0].strInstructions,
			ingredients,
			thumbnail: result.drinks[0].strDrinkThumb
		}
	};
}
