export type IngredientType = {
	name: string;
	amount: String;
};

export type DrinkType = {
	id: number;
	name: string;
	instructions: string;
	ingredients: IngredientType[];
	thumbnail: string;
	category: string;
};
