<script lang="ts">
	import Datepicker from '$lib/components/Datepicker.svelte';
	import Timepicker from '$lib/components/Timepicker.svelte';

	import { fade } from 'svelte/transition';

	let date: Date;
	let dauer: number; // Dauer in Millisekunden

	$: dateIsToday = date && Date.now() + 1000 * 60 * 60 * 24 > date.valueOf();
</script>

<div class="container">
	<div class="flex-left">
		<h1>Platzwahl</h1>
		<Datepicker bind:date />
		<Timepicker bind:dauer />
	</div>
	{#if date && dauer}
		<!-- {#if dateIsToday}
			Alles belegt
		{:else} -->
		<img in:fade src="/restaurant.svg" alt="Restaurant Übersicht" />
		<!-- {/if} -->
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
</style>
