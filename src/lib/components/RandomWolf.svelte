<script lang="ts">
	import { onMount } from 'svelte';

	export let hash: string | null = null;
	export let width: string = '100%';

	let photo: {
		raw: string;
		source_redirect?: string;
		source?: string;
		mime?: string;
		hash?: string;
	} | null = null;
	let error: string | null = null;
	let loading = true;

	let mounted = false;
	let lastHash: string | null = null;

	function isVideo(item: any) {
		return typeof item?.mime === 'string' && item.mime.startsWith('video/');
	}

	function getPhotoLink(item: typeof photo) {
		return item?.source_redirect || item?.source || null;
	}

	async function getRandomPhoto() {
		try {
			const url = `https://api.canine.tools/wolf/random?t=${Date.now()}`;
			const resp = await fetch(url, {
				cache: 'no-store'
			});

			if (!resp.ok) throw new Error(`API error ${resp.status}`);
			return await resp.json();
		} catch (err) {
			console.error('Failed to load random wolf photo:', err);
			return null;
		}
	}

	async function getByHash(h: string) {
		try {
			const resp = await fetch(`https://api.canine.tools/wolf/${h.trim().toLowerCase()}`, {
				cache: 'no-store'
			});

			if (!resp.ok) throw new Error(`API error ${resp.status}`);
			return await resp.json();
		} catch (err) {
			console.error('Failed to load photo by hash:', err);
			return null;
		}
	}

	async function load() {
		loading = true;
		error = null;

		const result = hash ? await getByHash(hash) : await getRandomPhoto();

		if (!result) {
			error = hash ? `No wolf found for hash: ${hash}` : 'No wolfy photo available :(';
			photo = null;
		} else {
			photo = result;
		}

		loading = false;
	}

	onMount(async () => {
		mounted = true;
		lastHash = hash;
		await load();
	});

	$: if (mounted && hash !== lastHash) {
		lastHash = hash;
		load();
	}
</script>

<div class="random-wolf">
	{#if loading}
		<p>Loading...</p>
	{:else if error}
		<p>{error}</p>
	{:else if photo}
		{#if getPhotoLink(photo)}
			<a href={getPhotoLink(photo)} target="_blank" rel="noopener noreferrer">
				{#if isVideo(photo)}
					<video
						src={photo.raw}
						autoplay
						muted
						loop
						playsinline
						style={`width: ${width}; height: auto;`}
					></video>
				{:else}
					<img src={photo.raw} alt="Random Wolf" style={`width: ${width}; height: auto;`} />
				{/if}
			</a>
		{:else if isVideo(photo)}
			<video
				src={photo.raw}
				autoplay
				muted
				loop
				playsinline
				style={`width: ${width}; height: auto;`}
			></video>
		{:else}
			<img src={photo.raw} alt="Random Wolf" style={`width: ${width}; height: auto;`} />
		{/if}
	{/if}
</div>

<style>
	.random-wolf {
		text-align: center;
	}

	.random-wolf img,
	.random-wolf video {
		border-radius: 8px;
	}
</style>