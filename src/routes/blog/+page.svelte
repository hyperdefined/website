<script lang="ts">
	import { page } from '$app/state';
	const currentUrl = page.url.href;

	export let data: {
		posts: Array<{
			slug: string;
			title: string;
			author: string;
			date: string;
			description?: string;
			tags?: string[];
		}>;
	};
</script>

<svelte:head>
	<title>Blog</title>
	<meta property="og:url" content={currentUrl} />
	<meta property="og:title" content="Blog" />
	<meta
		property="og:description"
		content="Random typings of a dumb wolf. Typing with paws is hard, you know?"
	/>
	<meta property="twitter:url" content={currentUrl} />
	<meta name="twitter:title" content="Blog" />
	<meta
		name="twitter:description"
		content="Random typings of a dumb wolf. Typing with paws is hard, you know?"
	/>
</svelte:head>

<h2>Blog</h2>
<p>
	Random typings of a dumb wolf. Typing with paws is hard, you know? I wil try to keep posting and
	updating here, but no promises! Expect the most random posts.
</p>
<ul>
	{#each data.posts as p}
		<blockquote class="post-block">
			<h3><a href={`/blog/${p.slug}`}>{p.title}</a></h3>
			<small>{new Date(p.date).toLocaleDateString()} - {p.author}</small><br />
			{#if p.description}<p>{p.description}</p>{/if}
		</blockquote>
	{/each}
</ul>

<style>
	blockquote p {
		margin-top: 10px;
	}
</style>
