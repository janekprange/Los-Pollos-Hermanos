<div class="container">
	<div class="inner-container">
		<h1>Checkout</h1>
		<p>Sie haben folgenden Tisch reserviert:</p>
		<ul>
			<li>Datum</li>
			<li>Uhrzeit</li>
			<li>Tischnummer</li>
		</ul>
		<div class="flex-centering">
			<a href="/">Bestätigen</a>
		</div>
	</div>
</div>

<style>
	.container {
		background-color: white;
		display: flex;
		justify-content: center;
		width: 90%;
		height: 90%;
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
		width: 557px;
		text-align: center;
		margin-top: 5em;
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

	li:hover {
		font-size: 30px;
		background: #f6f6f6;
	}

	a {
		display: flex;
		justify-content: center;
		align-items: center;
		background-color: #47525e;
		border-radius: 5px;
		width: 267px;
		height: 46px;
		margin-top: 20%;

		color: #ffffff;
		font-family: Lato;
		font-size: 18px;
		text-decoration: none;
	}
</style>
