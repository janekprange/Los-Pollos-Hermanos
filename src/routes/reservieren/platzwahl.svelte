<script lang="ts">
	import Datepicker from '$lib/components/Datepicker.svelte';
	import Timepicker from '$lib/components/Timepicker.svelte';
	let date: Date;
	let dauer: number;
</script>

<div class="container">
	<div class="flex-left">
		<h1>Platzwahl</h1>
		<Datepicker bind:date />
		<input placeholder="Bitte Dauer wählen" type="number" bind:value={dauer} />
	</div>
</div>

<style>
	.container {
		background-color: white;
		/* padding: 1em 2em; */
		display: flex;
		width: 90%;
		height: 90%;
	}

	.flex-left {
		background-color: gray;
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

	h1 {
		font-family: Lato;
		margin: 1em;
		text-align: center;
		/* color: white; */
	}
</style>
