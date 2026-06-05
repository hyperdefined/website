<script lang="ts">
	import { onMount } from 'svelte';
	import { getWhatsPlaying, type WhatsPlaying } from '$lib/nowplaying';

	let track: WhatsPlaying | null = null;
	let error: string | null = null;

	onMount(async () => {
		try {
			track = await getWhatsPlaying('hyperdefined');
		} catch (err) {
			error = err instanceof Error ? err.message : 'Unknown error';
		}
	});
</script>

{#if error}
	<p>{error}</p>
{:else if !track}
	<p>Loading...</p>
{:else}
	<div class="now-playing">
		<a href={track.url} target="_blank" rel="noopener noreferrer">
			<img
				src={track.image.extralarge ?? track.image.large ?? track.image.medium}
				alt={track.album}
			/>
		</a>

		<div>
			<a href={track.url} target="_blank" rel="noopener noreferrer">
				<strong>{track.name}</strong>
			</a>

			<span>{track.artist}</span>
			<small>{track.album}</small>

			{#if track.nowplaying}
				<small>Now playing</small>
			{:else}
				<small>Last played: {track.date}</small>
			{/if}
		</div>
	</div>
{/if}

<style>
	.now-playing {
		display: flex;
		gap: 1rem;
		align-items: center;
		text-decoration: none;
	}

	.now-playing img {
		width: 80px;
		height: 80px;
		object-fit: cover;
		border-radius: 8px;
	}

	.now-playing div {
		display: flex;
		flex-direction: column;
	}
</style>
