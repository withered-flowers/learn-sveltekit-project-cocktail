<script>
	import '../app.css';
	import Fa from 'svelte-fa/src/fa.svelte';
	import NavBar from '$lib/NavBar.svelte';
</script>

<div class="container min-w-full p-4">
	<NavBar />
	<slot />
</div>
