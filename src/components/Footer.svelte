<script>
	const year = new Date().getFullYear();
</script>

<footer>
	<h2>SB - {year}</h2>
</footer>

<style lang="scss" scoped>
	footer {
		padding: 0 1rem;

		display: flex;
		justify-content: end;
		align-items: center;

		h2 {
			font-size: 0.9rem;
			font-weight: 400;
			font-style: italic;
		}
	}
</style>
