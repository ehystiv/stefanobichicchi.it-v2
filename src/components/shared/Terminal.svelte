<script lang="ts">
	export let title: string;
	export let command: string;
	export let content: string;

	let writedCommand = '';
	let i = 0;

	function writeCommand() {
		if (writedCommand.length < command.length) {
			writedCommand += command[i];
			i++;
			setTimeout(writeCommand, 50);
		}
	}

	function runCommand() {
		writedCommand = '';
		i = 0;
		writeCommand();
	}
</script>

<div class="terminal">
	<div class="t-header">
		<div class="buttons">
			<div class="button red" />
			<div class="button yellow" />
			<div class="button green" />
		</div>
		<div>{title}</div>
		<div><button class="run-script" on:click={runCommand}>> Run Script</button></div>
	</div>
	<div class="window">
		<!-- {#if command && command.length != 0} -->
		<p class="command">{writedCommand}</p>
		<!-- {/if} -->
		<p>{content}</p>
	</div>
</div>

<style lang="scss">
	.terminal {
		position: relative;
		width: 100%;
		height: 100%;
		border: 1px solid white;

		border-top-left-radius: 20px;
		border-top-right-radius: 20px;

		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: space-between;

		background-color: #bbb;

		// box-shadow: 0px 0px 10px 2px #acacac;

		.t-header {
			width: 95%;
			height: 10%;

			display: flex;
			align-items: center;
			justify-content: space-between;
			.buttons {
				display: flex;
				align-items: center;

				.button {
					cursor: pointer;
					width: 15px;
					height: 15px;
					border-radius: 50%;
					margin-right: 10px;

					background-color: magenta;

					&.red {
						background-color: red;
					}
					&.yellow {
						background-color: yellow;
					}
					&.green {
						background-color: green;
					}
				}
			}

			.run-script {
				padding: 0.5rem 0.7rem;

				outline: none;
				border: none;
				border-radius: 1rem;

				text-transform: uppercase;
				font-weight: bold;

				background-color: yellowgreen;

				box-shadow: 0 4px black;

				&:active {
					transform: translateY(2px);
					box-shadow: 0 2px black;
				}
			}
		}

		.window {
			font-family: monospace;
			background-color: black;
			color: white;
			height: 90%;
			width: 100%;

			padding: 1rem;

			p {
				margin-bottom: 0.5rem;
				&.command::before {
					content: '$ ';
					color: greenyellow;
				}
			}
		}
	}
</style>
