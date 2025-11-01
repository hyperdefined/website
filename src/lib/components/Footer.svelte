<script lang="ts">
	const commit = __COMMIT_HASH__;
</script>

<footer class="rainbow-top">
	<p>
		© hyper.lol - Happy barking! - <a
			href="https://git.canine.tools/canine.tools/canine.tools/commit/{commit}">{commit}</a
		>
	</p>
</footer>

<style>
	/* This footer was taken from https://github.com/xz/new.css/pull/72 */
	footer {
		background: #111111;
		padding: 2rem 1.5rem;
		margin: 2rem calc(0px - (50vw - 50%)) -2rem;
		padding-left: calc(50vw - 50%);
		padding-right: calc(50vw - 50%);
	}
	footer > *:first-child {
		margin-bottom: 0;
		padding-bottom: 0;
	}

	footer > *:last-child {
		margin-top: 0;
		margin-bottom: 0;
	}

	.rainbow-top {
		position: relative;
	}

	.rainbow-top::after {
		content: '';
		position: absolute;
		left: 0;
		right: 0;
		top: 0;
		height: 3px;
		pointer-events: none;
		z-index: 1;

		background: linear-gradient(90deg, red, orange, yellow, green, blue, indigo, violet, red);
		background-size: 200% 100%;
		animation: rainbow-slide 8s linear infinite;
	}

	@keyframes rainbow-slide {
		to {
			background-position: 200% 0;
		}
	}

	@media (prefers-color-scheme: light) {
		footer {
			background-color: #f6f8fa;
		}
	}
</style>
