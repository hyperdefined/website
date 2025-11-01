<script lang="ts">
	import { afterNavigate } from '$app/navigation';
	let menuOpen = false;
	afterNavigate(() => (menuOpen = false));
</script>

<header class="rainbow-bottom">
	<div class="navbar-icon">
		<img src="/assets/images/icon.png" alt="canine.tools logo" />
	</div>
	<h1>hyperdefined</h1>
	<button
		class="menu-toggle"
		aria-label="Toggle navigation"
		aria-expanded={menuOpen}
		aria-controls="site-nav"
		on:click={() => (menuOpen = !menuOpen)}
	>
		☰
	</button>
	<nav id="site-nav" class="nav-menu" class:active={menuOpen}>
		<ul>
			<li><a href="/">Home</a></li>
			<li><a href="/blog">Blog</a></li>
			<li><a href="/projects">Projects</a></li>
			<li><a href="/fursona">Fursona</a></li>
			<li><a href="/contact">Contact</a></li>
		</ul>
	</nav>
</header>

<style>
	header {
		display: flex;
		flex-direction: column;
		align-items: center;
		position: relative;
		padding-bottom: 1.3rem;
		border-bottom: unset;
	}
	.rainbow-bottom {
		position: relative;
	}

	.rainbow-bottom::after {
		content: '';
		position: absolute;
		left: 0;
		right: 0;
		bottom: 0;
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

	.navbar-icon {
		overflow: hidden;
	}

	.navbar-icon img {
		border-radius: 50%;
		margin-bottom: 0;
		width: 120px;
	}

	nav {
		width: 100%;
		margin-top: 10px;
	}
	nav ul {
		list-style-type: none;
		margin: 0;
		padding: 0;
		overflow: hidden;
		display: flex;
		justify-content: center;
	}
	nav li {
		margin: 0;
	}
	nav li a {
		display: block;
		color: white;
		text-align: center;
		padding: 14px 16px;
		text-decoration: none;
		white-space: nowrap;
		background-color: unset;
	}
	nav li a:hover {
		background-color: #555;
		color: white;
	}
	nav li a:active {
		background-color: #555;
		color: white;
	}
	nav li a:focus {
		background-color: #444;
		color: white;
	}

	.menu-toggle {
		display: none;
		background-color: #555;
		color: white;
		border: none;
		padding: 10px;
		cursor: pointer;
		font-size: 15px;
		-webkit-tap-highlight-color: transparent;
	}
	.menu-toggle:active,
	.menu-toggle:hover {
		background-color: #555;
	}
	.menu-toggle:focus {
		background-color: #444;
		box-shadow: 0 0 0 2px rgba(255, 255, 255, 0.5);
	}

	@media screen and (max-width: 768px) {
		nav ul {
			flex-direction: column;
			align-items: center;
			display: none;
		}
		.menu-toggle {
			display: block;
		}
		nav.active ul {
			display: flex;
		}
		nav li {
			width: 100%;
		}
		nav li a {
			white-space: normal;
		}
	}

	@media (prefers-color-scheme: light) {
		nav li a {
			color: black;
		}
		.menu-toggle {
			color: black;
			background-color: rgb(225, 225, 225);
		}
	}
</style>
