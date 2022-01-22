<script>
	import {
		resDatum,
		resDauer,
		resTisch,
		username,
		usermail,
		usertelephone
	} from '$lib/stores/reservierung';

	import { onMount } from 'svelte';

	onMount(() => {
		$resDatum = null;
		$resDauer = 0;
		$resTisch = [];
		$username = '';
		$usermail = '';
		$usertelephone = '';
	});
</script>

<svelte:head>
	<title>Los Pollos Hermanos</title>
</svelte:head>

<div class="container">
	<img src="/logo.jpg" alt="Logo" />
	<h1>Willkommen bei Los Pollos Hermanos</h1>

	<div class="link">
		<a href="reservieren">Reservieren</a>
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
</div>

<style>
	.container {
		min-height: 100vh;
		display: flex;
		flex-direction: column;
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
		margin-bottom: 1em;
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
		flex-grow: 2;
		text-align: center;
		font: normal 18px sans-serif;
		margin-top: auto;
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
