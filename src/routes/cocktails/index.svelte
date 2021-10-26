<script context="module" lang="ts">
	import type { DrinkType } from 'src/types';

	export async function load({ page, fetch }) {
		const query = page.query.get('q');

		let response;

		if (query) {
			response = await fetch(`/cocktails/cocktails.${query}.json`);
		} else {
			response = await fetch('/cocktails/cocktails.json');
		}
		const result: DrinkType[] = (await response.json()).cocktailsList;

		return {
			props: { drinksProp: result, activeQuery: query }
		};
	}
</script>

<script lang="ts">
	export let drinksProp: DrinkType[];
	export let activeQuery: string;
</script>

<div class="container mx-auto">
	<div class="flex flex-col mx-auto items-center py-4">
		<div class="btn-group" data-theme="pastel">
			<!-- <a href="/" class="btn">&lt;&lt;</a> -->
			{#each { length: 26 } as _, i}
				<a
					href="/cocktails?q={String.fromCharCode(97 + i)}"
					class:btn-active={activeQuery === String.fromCharCode(97 + i)}
					class="btn">{String.fromCharCode(65 + i)}</a
				>
			{/each}
			<!-- <a href="/" class="btn">&gt;&gt;</a> -->
		</div>
	</div>

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
