<script lang="ts">
	import Flatpickr from 'svelte-flatpickr';
	import { German } from 'flatpickr/dist/l10n/de.js';
	export let date: Date;
	const roundTime = 1000 * 60 * 5; // round to nearest 5 minutes
	const maxFuture = 1000 * 60 * 60 * 24 * 30; // order a table max 30 days in advance
	const flatpickrOptions = {
		element: '#my-picker',
		enableTime: true,
		altInput: true,
		wrap: true,
		altFormat: 'j. F Y, H:i',
		dateFormat: 'Y-m-d',
		locale: German,
		minDate: new Date(Math.round(Date.now() / roundTime) * roundTime),
		maxDate: new Date(Date.now() + maxFuture),
		minTime: '13:00',
		maxTime: '22:30',

		onClose: function (selectedDates, dateStr, instance) {}
	};
</script>

<svelte:head>
	<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/flatpickr/dist/flatpickr.min.css" />
	<link
		rel="stylesheet"
		type="text/css"
		href="https://npmcdn.com/flatpickr/dist/themes/material_green.css"
	/>
</svelte:head>

<Flatpickr options={flatpickrOptions} bind:value={date} element="#my-picker">
	<div class="mb-5 w-64 ">
		<!-- <label for="datepicker" class="font-bold mb-1 text-gray-700 block"> Datum und Zeit </label> -->
		<div class="flatpickr relative" id="my-picker">
			<input type="text" placeholder="Bitte Datum wählen" data-input />

			<!-- <div class="absolute top-0 right-0 px-3 py-2">
				<svg
					on:click={() => console.log('ll')}
					class="h-6 w-6 text-gray-400"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0
          00-2 2v12a2 2 0 002 2z"
					/>
				</svg>
			</div> -->
		</div>
	</div>
</Flatpickr>

<style>
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
</style>
