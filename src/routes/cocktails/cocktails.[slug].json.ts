import type { DrinkType } from 'src/types';

export async function get({ params }): Promise<{ body: { cocktailsList: DrinkType[] } }> {
	const queryFilter = params.slug;

	const response = await fetch(
		`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${queryFilter}`
	);

	const result: DrinkType[] = (await response.json()).drinks.map((drink) => {
		return {
			id: drink.idDrink,
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
