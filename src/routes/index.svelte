<script>
	import { resDatum, resDauer, resTisch } from '$lib/stores/reservierung';

	import { onMount } from 'svelte';

	onMount(() => {
		$resDatum = null;
		$resDauer = null;
		$resTisch = [];
	});
</script>

<div class="container">
	<img src="/logo.jpg" alt="Logo" />
	<h1>Willkommen bei Los Pollos Hermanos</h1>

	<div class="link">
		<a href="reservieren">Reservieren</a>
	</div>
</div>

<style>
	.container {
		height: 100%;
		display: flex;
		flex-direction: column;
		justify-content: baseline;
	}

	img {
		max-width: 300px;
		margin: auto;
	}

	h1 {
		flex-grow: 1;
		text-align: center;
		color: white;
	}

	.link {
		flex-grow: 2;
		text-align: center;
	}
	a {
		background-color: #b8977e;
		border-radius: 5px;
		padding: 1em 3em 1em 3em;
		color: #ffffff;
		font-family: Berkshire Swash;
		font-size: 24px;
		line-height: 62px;
		width: 264px;
		text-align: center;
		text-decoration: none;
	}
</style>
