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
</script>

<div class="container mx-auto">
	<div class="grid grid-cols-4 gap-4">
		{#each drinksProp as drink}
			<div class="card text-center shadow-2xl bg-gray-100">
				<figure class="px-10 pt-10">
					<img src={drink.thumbnail} alt={drink.name} class="rounded-xl" />
				</figure>
				<div class="card-body">
					<h2 class="card-title">{drink.name}</h2>
					<p>{drink.category}</p>
					<div class="justify-center card-actions">
						<a class="btn btn-secondary btn-outline" href={`/cocktails/${drink.id}`}>More info</a>
					</div>
				</div>
			</div>
		{/each}
	</div>
</div>
