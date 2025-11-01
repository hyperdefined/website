<script lang="ts">
	import { page } from '$app/state';
	import RandomWolf from '$lib/components/RandomWolf.svelte';

	const siteUrl = page.url.origin;
</script>

<svelte:head>
	<meta
		name="description"
		content="I'm hyperdefined, a fluffy, flower wolf. I'm an IT nerd and developer. This is my main website for posting information about projects & my blog."
	/>

	<meta property="og:url" content={siteUrl} />
	<meta property="og:title" content="hyperdefined" />
	<meta
		property="og:description"
		content="I'm hyperdefined, a fluffy, flower wolf. I'm an IT nerd and developer. This is my main website for posting information about projects & my blog."
	/>

	<meta property="twitter:url" content={siteUrl} />
	<meta name="twitter:title" content="hyperdefined" />
	<meta
		name="twitter:description"
		content="I'm hyperdefined, a fluffy, flower wolf. I'm an IT nerd and developer. This is my main website for posting information about projects & my blog."
	/>
</svelte:head>
<h2>Welcome!</h2>
<p>
	Awrf! I'm hyperdefined, a fluffy, flower wolf. I'm a furry, therian, and a big disappointment. I'm
	an IT nerd and developer. I'm also a fursuiter!
</p>
<p>I love to code, run servers, play games, read, and listen to music!</p>

<p>
	I've been coding off and on since 2012, and more seriously since 2018. I've been doing web
	development even earlier and system admin things since 2018.
</p>

<p>
	This website is my corner of the internet. Please be nice, and wipe your paws before entering!
</p>
<div class="badges">
	<a href="https://canine.tools"
		><img
			class="off-glb"
			src="/assets/images/badges/badge.png"
			height="31"
			alt="canine.tools badge"
		/></a
	>
	<img
		class="off-glb"
		src="/assets/images/badges/twopaws.png"
		height="31"
		alt="made with my two paws badge"
	/>
	<img
		class="off-glb"
		src="/assets/images/badges/powered-by-debian.gif"
		height="31"
		alt="powdered by debian badge"
	/>
	<a href="https://spax.zone/"
		><img src="https://spax.zone/buttons/spaxdotzone.gif" height="31" alt="spax.zone badge" /></a
	>
	<img class="off-glb" src="/assets/images/badges/gay.gif" height="31" alt="rainbow badge" />
</div>
<hr />
<RandomWolf />

<style>
	.badges {
		text-align: center;
	}
	.badges img {
		image-rendering: auto;
		image-rendering: crisp-edges;
		image-rendering: pixelated;
		image-rendering: -webkit-optimize-contrast;
	}
</style>
