<script lang="ts">
	import { page } from '$app/state';
	const currentUrl = page.url.href;
</script>

<svelte:head>
	<title>Contact</title>
	<meta property="og:url" content={currentUrl} />
	<meta property="og:title" content="Contact" />
	<meta property="og:description" content="hyperdefined's contact information." />
	<meta property="twitter:url" content={currentUrl} />
	<meta name="twitter:title" content="Contact" />
	<meta name="twitter:description" content="hyperdefined's contact information." />
</svelte:head>

<h2>Projects</h2>
<p>You can find me on most social media sites as <code>hyperdefined</code>.</p>
<ul>
	<li>Twitter - <a href="https://twitter.com/hyperdefined">@hyperdefined</a></li>
	<li>Telegram - <a href="https://t.me/hyperdefined">@hyperdefined</a> (slow response)</li>
</ul>
<p>
	I do use Discord, but I don't accept random friend requests unless we move a conversation over
	there. Random friend requests will be denied.
</p>
<hr />
<h3>Content</h3>
<p>I sometimes make content, either on YouTube or TikTok.</p>
<ul>
	<li>YouTube - <a href="https://www.youtube.com/@hyperdefined">@hyperdefined</a></li>
	<li>TikTok - <a href="https://tiktok.com/@hyp3rdefined">@hyp3rdefined</a></li>
</ul>
<hr />
<h3>Email</h3>
<p>
	If you want to use email, feel free to <a href="mailto:contact@hyper.lol">email me</a> (<a
		href="/assets/contact@hyper.lol.asc">PGP key</a
	>).
</p>
