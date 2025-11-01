<script lang="ts">
	import { page } from '$app/state';
	const currentUrl = page.url.href;
</script>

<svelte:head>
	<title>About</title>
	<meta property="og:url" content={currentUrl} />
	<meta property="og:title" content="Projects" />
	<meta property="og:description" content="hyperdefined's various projects." />
	<meta property="twitter:url" content={currentUrl} />
	<meta name="twitter:title" content="Projects" />
	<meta name="twitter:description" content="hyperdefined's various projects." />
</svelte:head>

<h2>Projects</h2>
<p>This is a collection of things I've worked on and want to showcase.</p>
<h3>Minecraft Plugins</h3>
<p>
	I've focused on developing and maintaining Minecraft server plugins. I&#39;ve also ran servers off
	and on since 2011.
</p>
<p>
	You can find my plugins on <a href="https://hangar.papermc.io/hyperdefined">Hangar</a>,
	<a href="https://modrinth.com/user/hyperdefined">Modrinth</a>, and my
	<a href="https://github.com/hyperdefined?tab=repositories">GitHub</a>. There's too many to list
	here.
</p>
<hr />
<h3>Standalone</h3>
<p>These are various other projects I've made.</p>
<ul>
	<li>
		<a href="https://github.com/hyperdefined/CustomLauncherRewrite">CustomLauncherRewrite</a> - A fully
		standalone custom launcher for Toontown Rewritten.
	</li>
	<li>
		<a href="https://github.com/hyperdefined/GitHubReleaseAPI">GitHubReleaseAPI</a> - A simple and small
		library for accessing GitHub releases for a repository.
	</li>
	<li><a href="https://cobalt.directory/">cobalt.directory</a> - A cobalt tracker.</li>
	<li><a href="https://github.com/hyperdefined/hyperbot">hyperbot</a> - A personal Discord bot.</li>
	<li>
		<a href="https://github.com/hyperdefined/hyperlib">hyperlib</a> - A library used for Minecraft plugins.
	</li>
</ul>
<hr />
<h3>Services</h3>
<ul>
	<li>
		<a href="https://canine.tools">canine.tools</a> - canine.tools is dedicated to hosting privacy-focused
		frontends and services.
	</li>
</ul>
<hr />
<h3>Web Projects</h3>
<ul>
	<li><a href="https://hyper.lol">hyper.lol</a> - This site, my own corner on the internet.</li>
	<li><a href="https://ardenwolfsky.com">ardenwolfsky.com</a> - Personal site for a friend.</li>
	<li>
		<a href="https://drinks.ardenwolfsky.com">drinks.ardenwolfsky.com</a> - Drink catalog and recipes
		for a friend.
	</li>
</ul>
<h3>Other</h3>
<p>
	I'm also one of the founders of an upcoming charity that aids the furry community. I am
	specifically the CTO and run all tech things.
</p>
