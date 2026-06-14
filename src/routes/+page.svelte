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
	Awrf! I'm <i>hyperdefined</i>, a fluffy, flower wolf. You can also call me <i>hyper</i> or
	<i>flower</i>. I'm a system administrator, developer, gamer, and beginner photographer.
</p>
<p>
	This website is my corner of the internet. This site has my blog, projects, sona information, and
	how to reach me.
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
	<a href="https://beepi.ng">
		<img src="https://beepi.ng/88x31.png" width="88" height="31" alt="unnick" />
	</a>
	<a href="https://proot.party/">
		<img src="https://beepi.ng/buttons/prootparty.avif" width="88" height="31" alt="proot.party" />
	</a>
</div>

<hr />
<div class="sticker">
	<img src="/assets/images/7.png" alt="hyperdefined sticker saying hello" />
</div>

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
	.sticker {
		text-align: center;
	}
	.sticker img {
		width: 300px;
	}
</style>
