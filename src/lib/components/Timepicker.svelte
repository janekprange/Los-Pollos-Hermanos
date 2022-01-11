<script lang="ts">
	const halfHour = 1000 * 60 * 30;
	const options = [
		{ id: 1 * halfHour, value: '0:30' },
		{ id: 2 * halfHour, value: '1:00' },
		{ id: 3 * halfHour, value: '1:30' },
		{ id: 4 * halfHour, value: '2:00' },
		{ id: 5 * halfHour, value: '2:30' },
		{ id: 6 * halfHour, value: '3:00' }
	];

	export let dauer = 0;
</script>

<select bind:value={dauer}>
	<option value="0" disabled selected>Bitte Dauer wählen</option>
	{#each options as item}
		<option value={item.id}>{item.value}</option>
	{/each}
</select>

<style>
	select {
		margin: 1em;
		border: 1px solid #8492a6;
		border-radius: 5px;
		min-width: 289px;
		height: 47px;

		font-family: Lato;
		font-size: 18px;
		line-height: 62px;
		width: 267px;
		text-align: left;
		padding-left: 1em;
	}
</style>
