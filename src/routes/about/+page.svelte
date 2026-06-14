<script lang="ts">
	import { page } from '$app/state';
	import { Img } from 'flowbite-svelte';
	const currentUrl = page.url.href;
</script>

<svelte:head>
	<title>About</title>
	<meta property="og:url" content={currentUrl} />
	<meta property="og:title" content="About" />
	<meta property="og:description" content="Everything about hyperdefined." />
	<meta property="twitter:url" content={currentUrl} />
	<meta name="twitter:title" content="About" />
	<meta name="twitter:description" content="Everything about hyperdefined." />
</svelte:head>

<h2>About</h2>
<div class="sticker">
	<img src="/assets/images/idk.png" alt="hyperdefined sticker saying hello" />
</div>
<hr />
<p>Awrf! I'm hyperdefined. I'm a canis lupus (wolf) and this is my corner of the internet.</p>

<p>
	I've been using computers since I was 5 years old. Since then I've had a love creating things,
	tinkering around, and seeing technology can do. I picked up programming because of Minecraft,
	wanting to create my own mods. In 2018, I started to host my own servers for friends, which lead
	me to making plugins (Spigot).
</p>

<p>
	Over the years, I've created a multitude of them. I've expanded my programming into other fields,
	like small programs or websites.
</p>

<p>
	If it's not obvious, I am a furry! I found my love for them well over a decade ago. I've only been
	involved in the fandom in the more recent years, creating my sona and meeting new friends ever
	since joining it. I've been claimed in a <a href="https://furpack.net/">FurPack</a> for a few years
	now.
</p>

<p>
	I am also a therian! I've been a wolf boy all my life, and only recent found out it's my identify
	through books. I identify as a wolf inside a human body, trying to fit in with other humans.
</p>

<p>
	I've also picked up on photography. Since FWA 2026, I really enjoyed taking photos of fluffs.
	After the convention, I ended up getting myself a camera to use for future cons and meets.
</p>

<p>
	Outside of my technical hobbies, I <a href="https://steamcommunity.com/id/hyperdefined/"
		>like to game</a
	>, <a href="https://www.last.fm/user/hyperdefined">listen to music</a>, and spend time with my
	pack.
</p>

<p>
	In more recent times I'm the administrator of <a href="https://canine.tools/">canine.tools</a>, a
	site I created to self-host various web apps for anyone to use.
</p>

<p>My education if you're curious:</p>
<ul>
	<li>Associate's Degree in Cybersecurity (2019 - 2021)</li>
	<li>Bachelor's Degree in Information Technology (2022 - 2026)</li>
	<ul>
		<li>Minor in Computer Security</li>
	</ul>
</ul>

<p>Feel free to look around and check out things I've been working on!</p>

<style>
	.sticker {
		text-align: center;
	}
	.sticker img {
		width: 300px;
	}
</style>
