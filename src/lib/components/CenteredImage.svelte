<script lang="ts">
	export let src: string;
	export let alt: string = '';
	export let width: string | null = null;
	export let height: string | null = null;
	export let caption: string | null = null;
	export let circle: boolean = false;
	export let radius: string | null = null;
</script>

<figure class="wrapper">
	<img
		{src}
		{alt}
		style="
			width: {width ?? 'auto'};
			height: {height ?? 'auto'};
			border-radius: {circle ? '999px' : (radius ?? '12px')};
		"
		class:circle
	/>

	{#if caption}
		<figcaption class="caption">
			{@html caption}
		</figcaption>
	{/if}
</figure>

<style>
	.wrapper {
		display: flex;
		flex-direction: column;
		align-items: center;
		text-align: center;
		gap: 0.5rem;
	}

	img {
		max-width: 100%;
		object-fit: contain;
		margin-bottom: unset;
	}

	.circle {
		border-radius: 999px;
	}

	.caption {
		font-size: 0.9rem;
		opacity: 0.8;
	}
</style>
