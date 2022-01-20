<script lang="ts">
	import { goto } from '$app/navigation';

	import { username, usermail, usertelephone } from '$lib/stores/reservierung.js';

	function login() {
		if (!$username) {
			alert(`Es muss ein Name angegeben werden.`);
			return;
		}
		if (!$usermail) {
			alert(`Es muss eine E-Mail angegeben werden.`);
			return;
		}
		if (!$usertelephone) {
			alert(`Es muss eine Telefonnummer angegeben werden.`);
			return;
		}
		goto('reservieren/platzwahl');
	}
</script>

<div class="container">
	<h1>Kontaktdaten</h1>
	<p>Bitte tragen Sie Ihre Kontaktdaten ein.</p>

	<form class="input-flex" on:submit|preventDefault={login}>
		<input placeholder="Name" bind:value={$username} />
		<input placeholder="E-Mail" type="email" bind:value={$usermail} />
		<input placeholder="Telefonnummer" type="tel" bind:value={$usertelephone} />

		<button type="submit">Weiter</button>
	</form>
</div>

<style>
	.container {
		background-color: white;
		padding: 1em 2em;
	}

	h1 {
		color: #47525e;
		font-family: Lato;
		font-size: 40px;
		line-height: 51px;
		width: 557px;
		text-align: center;
	}

	p {
		color: #8190a5;
		font-family: Lato;
		font-size: 18px;
		line-height: 28px;
		width: 15em;
		margin: auto;
		text-align: center;
	}

	.input-flex {
		align-items: center;
		display: flex;
		flex-direction: column;
	}
	input {
		margin: 1em;
		border: 1px solid #8492a6;
		border-radius: 5px;
		width: 266px;
		height: 47px;

		font-family: Lato;
		font-size: 18px;
		line-height: 62px;
		width: 267px;
		text-align: left;
		padding-left: 1em;
	}

	input::placeholder {
		color: #8190a5;
		font-family: Lato;
		font-size: 18px;
		line-height: 62px;
		width: 267px;
		text-align: left;
	}

	.input-flex > button {
		background-color: #47525e;
		border-radius: 5px;
		width: 267px;
		height: 46px;
		cursor: pointer;

		color: #ffffff;
		font-family: Lato;
		font-size: 18px;
		text-align: center;
	}

	/* a {
		display: flex;
		justify-content: center;
		align-items: center;
		background-color: #47525e;
		border-radius: 5px;
		width: 267px;
		height: 46px;
		margin-top: 2em;

		color: #ffffff;
		font-family: Lato;
		font-size: 18px;
		text-decoration: none;
	} */
</style>
