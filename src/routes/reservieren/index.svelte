<script lang="ts">
	let name = '';
	let password = '';
	function login() {
		alert(`Tut mir leid, ${name}, ein Login ist nicht möglich.`);
	}
</script>

<div class="container">
	<h1>Anmeldung</h1>
	<p>Melden Sie sich an, um Punkte für diese Reservierung zu erhalten</p>

	<form class="input-flex" on:submit|preventDefault={login}>
		<input placeholder="Name" bind:value={name} />
		<input placeholder="Passwort" type="password" bind:value={password} />

		<button type="submit">Login</button>
		<a href="reservieren/platzwahl">Weiter</a>
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

	a {
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
	}
</style>
