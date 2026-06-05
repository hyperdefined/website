export type WhatsPlaying = {
	artist: string;
	url: string;
	name: string;
	album: string;
	image: {
		small?: string;
		medium?: string;
		large?: string;
		extralarge?: string;
	};
	date: string;
	nowplaying: boolean | null;
};

export async function getWhatsPlaying(user = 'hyperdefined'): Promise<WhatsPlaying> {
	const url = `https://www.ballix.net/whatsplaying/?user=${encodeURIComponent(user)}`;

	const res = await fetch(url);

	if (!res.ok) {
		throw new Error(`Failed to fetch currently playing track: ${res.status}`);
	}

	return await res.json();
}
