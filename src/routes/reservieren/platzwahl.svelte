<script lang="ts">
	import Datepicker from '$lib/components/Datepicker.svelte';
	import Multiselect from '$lib/components/Multiselect.svelte';
	import Timepicker from '$lib/components/Timepicker.svelte';
	import { resDatum, resDauer, resTisch } from '$lib/stores/reservierung';

	import { fade } from 'svelte/transition';

	$: dateIsToday = $resDatum && Date.now() + 1000 * 60 * 60 * 24 > $resDatum.valueOf();

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
</script>

<div class="container">
	<div class="flex-left">
		<h1>Platzwahl</h1>
		<Datepicker bind:date={$resDatum} />
		<Timepicker bind:dauer={$resDauer} />
		{#if isValidDate($resDatum) && $resDauer}
			{#if dateIsToday}
				<Multiselect id="table" bind:value={$resTisch} placeholder="Bitte den Tisch wählen">
					{#each tablenumbersOccupied as table}
						<option value={table}>{table}</option>
					{/each}
				</Multiselect>
			{:else}
				<Multiselect id="table" bind:value={$resTisch} placeholder="Bitte den Tisch wählen">
					{#each tablenumbers as table}
						<option value={table}>{table}</option>
					{/each}
				</Multiselect>
			{/if}
		{/if}
		<br />
		{#if isValidDate($resDatum) && $resDauer && $resTisch.length > 0}
			<a href="checkout">Checkout</a>
		{/if}
	</div>
	{#if isValidDate($resDatum) && $resDauer}
		{#if dateIsToday}
			<img in:fade src="/restaurant-belegt.svg" alt="Restaurant Übersicht" />
		{:else}
			<img in:fade src="/restaurant.svg" alt="Restaurant Übersicht" />
		{/if}
	{/if}
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

	h1 {
		font-family: Lato;
		margin: 1em;
		text-align: center;
		/* color: white; */
	}

	img {
		width: 70%;
	}

	a {
		display: flex;
		justify-content: center;
		align-items: center;
		background-color: #47525e;
		border-radius: 5px;
		width: 267px;
		height: 46px;
		margin-top: 100%;
		margin-left: 1.5em;

		color: #ffffff;
		font-family: Lato;
		font-size: 18px;
		text-decoration: none;
	}
</style>
