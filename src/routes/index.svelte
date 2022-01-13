<script>
	import { resDatum, resDauer, resTisch } from '$lib/stores/reservierung';

	import { onMount } from 'svelte';

	onMount(() => {
		$resDatum = null;
		$resDauer = 0;
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
<footer class="footer-basic-centered">
	<p class="footer-company-motto">
		Los Pollos Hermanos, where something delicious is always cooking.
	</p>

	<p class="footer-links">
		<a href="/">Speisekarte</a>
		·
		<a href="/">Lieferservice</a>
		·
		<a href="/">Impressum</a>
	</p>

	<p class="footer-company-name">Los Pollos Hermanos © 2021</p>
</footer>

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

	.footer-basic-centered {
		box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.12);
		box-sizing: border-box;
		width: 100%;
		text-align: center;
		font: normal 18px sans-serif;
		padding: 45px;
		margin-top: 80px;
	}

	footer {
		position: fixed;
		bottom: 0;
		display: block;
	}

	.footer-basic-centered .footer-company-motto {
		color: #8d9093;
		font-size: 24px;
		margin: 0;
	}

	.footer-basic-centered .footer-links {
		list-style: none;
		font-weight: bold;
		color: #ffffff;
		padding: 35px 0 23px;
		margin: 0;
	}

	.footer-basic-centered .footer-links a {
		display: inline-block;
		text-decoration: none;
		color: inherit;
	}

	.footer-basic-centered .footer-company-name {
		color: #8f9296;
		font-size: 14px;
		margin: 0;
	}
</style>
