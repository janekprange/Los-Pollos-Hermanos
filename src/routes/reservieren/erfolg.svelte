<div class="container">
	<img src="/logo.jpg" alt="Logo" />
	<h1>Reservierung erfolgreich</h1>

	<div class="link">
		<a href="/">Zurück zur Homepage</a>
	</div>
</div>

<style>
	.container {
		height: 100%;
		display: flex;
		flex-direction: column;
		justify-content: baseline;
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
</style>
