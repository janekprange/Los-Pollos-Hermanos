<script lang="ts">
	import Datepicker from '$lib/components/Datepicker.svelte';
	import Multiselect from '$lib/components/Multiselect.svelte';
	import Timepicker from '$lib/components/Timepicker.svelte';
	import {
		resDatum,
		resDauer,
		resTisch,
		usermail,
		username,
		usertelephone
	} from '$lib/stores/reservierung';

	import { fade } from 'svelte/transition';

	$: dateIsToday = $resDatum && Date.now() + 1000 * 60 * 60 * 24 > $resDatum.valueOf();

	$: placeholder = $resTisch.length >= 4 ? 'Maximal 4 Tische' : 'Bitte den Tisch wählen';

	const tablenumbers = [
		1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26,
		27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37
	];
	const tablenumbersOccupied = [
		2, 3, 4, 5, 9, 10, 13, 14, 16, 18, 19, 20, 24, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37
	];

	function isValidDate(d) {
		return d instanceof Date && !isNaN(d.valueOf());
	}

	function abortReservation() {
		$resDatum = null;
		$resDauer = 0;
		$resTisch = [];
	}
</script>

<div class="container">
	<div class="flex-left">
		<h1>Platzwahl</h1>
		<Datepicker bind:date={$resDatum} />
		<Timepicker bind:dauer={$resDauer} />
		{#if isValidDate($resDatum) && $resDauer}
			{#if dateIsToday}
				<Multiselect
					id="table"
					bind:value={$resTisch}
					bind:placeholder
					disabled={$resTisch.length >= 4}
				>
					{#each tablenumbersOccupied as table}
						<option value={table}>{table}</option>
					{/each}
				</Multiselect>
			{:else}
				<Multiselect
					id="table"
					bind:value={$resTisch}
					bind:placeholder
					disabled={$resTisch.length >= 4}
				>
					{#each tablenumbers as table}
						<option value={table}>{table}</option>
					{/each}
				</Multiselect>
			{/if}
			<div class="small-screen">
				{#if dateIsToday}
					<img in:fade src="/restaurant-belegt.svg" alt="Restaurant Übersicht" />
				{:else}
					<img in:fade src="/restaurant.svg" alt="Restaurant Übersicht" />
				{/if}
			</div>
		{/if}
		<br />
		{#if isValidDate($resDatum) && $resDauer && $resTisch.length > 0}
			<button on:click={abortReservation}>Abbrechen</button>
			<a href="checkout">Checkout</a>
		{/if}
	</div>
	{#if isValidDate($resDatum) && $resDauer}
		<div class="wide-screen">
			{#if dateIsToday}
				<img in:fade src="/restaurant-belegt.svg" alt="Restaurant Übersicht" />
			{:else}
				<img in:fade src="/restaurant.svg" alt="Restaurant Übersicht" />
			{/if}
		</div>
	{/if}
</div>
{#if $username && $usermail && usertelephone}
	<div class="userinfo">
		<p style="margin-bottom: 0">Angemeldet als: {$username}</p>
		<p>{$usermail} | {$usertelephone}</p>
	</div>
{/if}

<style>
	@media screen and (max-width: 600px) {
		.flex-left {
			width: 100%;
		}
		.wide-screen {
			display: none;
		}
		.small-screen {
			display: inline-block !important;
			width: fit-content;
			background-color: white;
		}
		.userinfo {
			display: none !important;
		}
		/* img:hover {
			-webkit-transform: scale(1.5); 
			transform: scale(1.5);
		} */
	}
	.container {
		background-color: white;
		/* padding: 1em 2em; */
		display: flex;
		width: 90vw;
		min-height: 90vh;
	}

	.flex-left {
		background-color: gray;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.small-screen {
		display: none;
	}

	h1 {
		font-family: Lato;
		margin: 1em;
		text-align: center;
		/* color: white; */
	}

	img {
		width: 100%;
		max-width: 1000px;
	}

	a,
	button {
		display: flex;
		justify-content: center;
		align-items: center;
		background-color: #47525e;
		border-radius: 5px;
		width: 267px;
		height: 46px;
		margin-bottom: 2em;

		color: #ffffff;
		font-family: Lato;
		font-size: 18px;
		text-decoration: none;
	}

	button {
		margin-top: auto;
		border: none;
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
