import { error } from '@sveltejs/kit';

export const prerender = true;

type PostMeta = {
	title?: string;
	date?: string;
	description?: string;
	tags?: string[];
	draft?: boolean;
};

export async function load({ params }) {
	const modules = import.meta.glob('../../../posts/*.md', { eager: true });

	const all = Object.entries(modules).map(([path, mod]: any) => {
		const m = path.match(/[/\\]([^/\\]+)\.md$/);
		const slug = m ? m[1] : '';
		const meta: PostMeta = mod.metadata || mod.frontmatter || {};
		return {
			slug,
			title: meta.title ?? slug,
			date: meta.date ?? null,
			meta,
			component: mod.default
		};
	});

	const currentIdx = all.findIndex((p) => p.slug === params.slug);
	if (currentIdx === -1) throw error(404, 'Post not found');
	const allNumeric = all.every((p) => /^\d+$/.test(p.slug));
	const sorted = [...all].sort((a, b) => {
		if (allNumeric) return Number(a.slug) - Number(b.slug);
		const da = a.date ? new Date(a.date).getTime() : 0;
		const db = b.date ? new Date(b.date).getTime() : 0;
		return db - da; // newest first
	});

	const idx = sorted.findIndex((p) => p.slug === params.slug);

	const prev = sorted[idx - 1]
		? { slug: sorted[idx - 1].slug, title: sorted[idx - 1].title }
		: null;
	const next = sorted[idx + 1]
		? { slug: sorted[idx + 1].slug, title: sorted[idx + 1].title }
		: null;

	const current = all[currentIdx];
	if (!current?.component) throw error(500, 'Markdown component missing (mdsvex config?)');

	return {
		meta: current.meta,
		mdComponent: current.component, // keep your existing prop name
		prev,
		next
	};
}
