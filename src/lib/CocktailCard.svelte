<script>
	export let drinkState;
</script>

<div class="col-start-3 col-span-2 card text-center shadow-2xl bg-gray-100">
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
