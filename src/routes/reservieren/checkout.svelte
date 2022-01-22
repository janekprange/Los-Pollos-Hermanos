<script>
	import {
		resDatum,
		resDauer,
		resTisch,
		username,
		usermail,
		usertelephone
	} from '$lib/stores/reservierung';

	const minute = 1000 * 60;
</script>

<div class="container">
	<h1>Checkout</h1>
	{#if $resTisch.length == 1}
		<p>Sie haben folgenden Tisch reserviert:</p>
	{:else}
		<p>Sie haben folgende Tische reserviert:</p>
	{/if}
	<ul>
		<li>{$resDatum && $resDatum.toLocaleDateString('de-DE')}</li>
		<li>
			{$resDatum && $resDatum.toLocaleTimeString('de-DE', { hour: '2-digit', minute: '2-digit' })}
		</li>
		<li>{$resDauer / minute} Minuten</li>
		{#if $resTisch.length == 1}
			<li>Tisch Nummer {$resTisch}</li>
		{:else}
			<li>Die Tische mit den Nummern {$resTisch}</li>
		{/if}
	</ul>
	<div class="flex-centering">
		<a href="erfolg">Bestätigen</a>
	</div>
</div>
{#if $username && $usermail && usertelephone}
	<div class="userinfo">
		<p style="margin-bottom: 0">Angemeldet als: {$username}</p>
		<p>{$usermail} | {$usertelephone}</p>
	</div>
{/if}

<style>
	@media screen and (max-width: 600px) {
		.container {
			width: 100% !important;
		}
		.userinfo {
			display: none !important;
		}
	}
	@media screen and (max-height: 650px) {
		.userinfo {
			display: none !important;
		}
	}
	.container {
		background-color: white;
		display: flex;
		flex-direction: column;
		justify-content: center;
		width: 90%;
		min-height: 35em;
	}

	.flex-centering {
		display: flex;
		justify-content: center;
	}

	h1 {
		color: #47525e;
		font-family: Lato;
		font-size: 40px;
		line-height: 51px;
		text-align: center;
		margin-top: 2em;
	}

	p {
		color: #8190a5;
		font-family: Lato;
		font-size: 18px;
		line-height: 28px;
		margin: auto;
		text-align: center;
	}

	ul {
		list-style-type: none;
		margin: 0;
		padding: 0;
		margin: auto;
		text-align: center;
		margin-top: 2em;
	}

	li {
		font: 200 20px/1.5 Helvetica, Verdana, sans-serif;
		border-bottom: 1px solid #ccc;
		margin: auto;
		text-align: center;
	}

	li:last-child {
		border: none;
	}

	li {
		text-decoration: none;
		color: #000;
		display: block;
		width: 200px;

		-webkit-transition: font-size 0.3s ease, background-color 0.3s ease;
		-moz-transition: font-size 0.3s ease, background-color 0.3s ease;
		-o-transition: font-size 0.3s ease, background-color 0.3s ease;
		-ms-transition: font-size 0.3s ease, background-color 0.3s ease;
		transition: font-size 0.3s ease, background-color 0.3s ease;
	}

	/* li:hover {
		font-size: 30px;
		background: #f6f6f6;
	} */

	a {
		display: flex;
		justify-content: center;
		align-items: center;
		background-color: #47525e;
		border-radius: 5px;
		width: 267px;
		height: 46px;
		margin-top: auto;
		margin-bottom: 2em;

		color: #ffffff;
		font-family: Lato;
		font-size: 18px;
		text-decoration: none;
	}

	.userinfo {
		position: fixed;
		bottom: 0;
		width: 30%;
		background-color: white;
		display: flex;
		flex-direction: column;
		align-items: center;
		border-radius: 10px 10px 0 0;
		border: 2px solid black;
	}

	.userinfo > p {
		color: #8190a5;
		font-family: Lato;
		font-size: 18px;
		line-height: 28px;
		margin: 10px;
	}
</style>
