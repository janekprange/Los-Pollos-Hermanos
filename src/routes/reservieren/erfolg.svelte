<script>
	import { resDatum, resDauer, resTisch } from '$lib/stores/reservierung';

	import { onMount } from 'svelte';

	onMount(() => {
		$resDatum = null;
		$resDauer = 0;
		$resTisch = [];
	});
</script>

<svelte:head>
	<title>Los Pollos Hermanos</title>
</svelte:head>

<div class="container">
	<img src="/logo.jpg" alt="Logo" />
	<h1>Reservierung erfolgreich</h1>

	<div class="link">
		<a href="/">Zurück zur Homepage</a>
	</div>
</div>

<style>
	.container {
		height: 80vh;
		display: flex;
		flex-direction: column;
		justify-content: baseline;
	}

	img {
		width: auto;
		height: auto;
		flex-grow: 1;
	}

	h1 {
		flex-grow: 2;
		text-align: center;
		color: white;
	}

	.link {
		flex-grow: 2;
		text-align: center;
	}
	.link > a {
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
