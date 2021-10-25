import type { DrinkType } from 'src/types';

export async function get(): Promise<{ body: { cocktailsList: DrinkType[] } }> {
	const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a');
	const result: DrinkType[] = (await response.json()).drinks.map((drink, idx) => {
		return {
			name: drink.strDrink,
			thumbnail: drink.strDrinkThumb,
			category: drink.strCategory
		};
	});

	return {
		body: {
			cocktailsList: result
		}
	};
}
