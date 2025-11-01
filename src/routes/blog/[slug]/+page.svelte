<script lang="ts">
	export let data: {
		meta: any;
		mdComponent: any;
		prev: { slug: string; title: string } | null;
		next: { slug: string; title: string } | null;
	};

	import { page } from '$app/state';
	const currentUrl = page.url.href;
</script>

<svelte:head>
	<title>{data.meta.title}</title>
	<meta property="og:url" content={currentUrl} />
	<meta property="og:title" content={data.meta.title} />
	<meta property="og:description" content={data.meta.description} />
	<meta property="twitter:url" content={currentUrl} />
	<meta name="twitter:title" content={data.meta.title} />
	<meta name="twitter:description" content={data.meta.description} />
</svelte:head>

<article>
	<h1>{data.meta.title}</h1>
	{#if data.meta.date}
		<small>Posted on {new Date(data.meta.date).toLocaleDateString()} - {data.meta.author}</small>
	{/if}
	<hr />

	{#key page.params.slug}
		<svelte:component this={data.mdComponent} />
	{/key}
</article>

<nav class="post-nav">
	<div class="prev">
		{#if data.prev}
			<a href={`/blog/${data.prev.slug}`}>&larr; Previous: {data.prev.title}</a>
		{/if}
	</div>
	<div class="back">
		{#if data.prev}
			<a href="/blog">Back to Blog</a>
		{/if}
	</div>
	<div class="next">
		{#if data.next}
			<a href={`/blog/${data.next.slug}`}>Next: {data.next.title} &rarr;</a>
		{/if}
	</div>
</nav>

<style>
	.post-nav {
		display: flex;
		justify-content: space-between;
		gap: 1rem;
		margin-top: 2rem;
		padding-top: 1rem;
		border-top: 1px solid;
		border-image: linear-gradient(to right, red, orange, yellow, green, blue, indigo, violet) 1;
	}
	.post-nav a {
		text-decoration: none;
	}
</style>
