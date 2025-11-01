<script lang="ts">
	import { onMount } from 'svelte';

	let photo: { raw: string; source_redirect?: string; source?: string } | null = null;
	let error: string | null = null;
	let loading = true;

	async function getRandomPhoto() {
		try {
			const resp = await fetch('https://api.canine.tools/wolf/');
			if (!resp.ok) throw new Error(`API error ${resp.status}`);
			const photos = await resp.json();

			if (!Array.isArray(photos) || photos.length === 0) return null;
			const idx = Math.floor(Math.random() * photos.length);
			return photos[idx];
		} catch (err) {
			console.error('Failed to load photos:', err);
			return null;
		}
	}

	onMount(async () => {
		const result = await getRandomPhoto();
		if (!result) {
			error = 'No wolfy photo available :(';
		} else {
			console.log('Selected Photo:', result.raw);
			console.log('Source:', result.source ? result.source : 'No source available');
			photo = result;
		}
		loading = false;
	});
</script>

<div class="random-wolf">
	{#if loading}
		<p>Loading...</p>
	{:else if error}
		<p>{error}</p>
	{:else if photo}
		{#if photo.source_redirect}
			<a href={photo.source_redirect} target="_blank" rel="noopener noreferrer">
				<img src={photo.raw} alt="Random Wolf" />
			</a>
		{:else}
			<img src={photo.raw} alt="Random Wolf" />
		{/if}
	{/if}
</div>

<style>
	.random-wolf {
		text-align: center;
	}

	.random-wolf img {
		width: 80%;
	}

	@media screen and (max-width: 1030px) {
		.random-wolf img {
			width: 60%;
		}
	}
	@media screen and (max-width: 500px) {
		.random-wolf img {
			width: 70%;
		}
	}
</style>
