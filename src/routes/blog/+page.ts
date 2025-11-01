export const prerender = true;

type Frontmatter = {
	title: string;
	date: string;
	tags?: string[];
	description?: string;
	draft?: boolean;
};

export async function load() {
	const modules = import.meta.glob('../../posts/*.md', { eager: true });
	const posts = Object.entries(modules)
		.map(([path, mod]: any) => {
			const m = path.match(/[/\\]([^/\\]+)\.md$/);
			const slug = m ? m[1] : '';
			const meta = mod.metadata || mod.frontmatter || {};
			return { slug, ...meta };
		})
		.sort((a, b) => +new Date(b.date) - +new Date(a.date));

	return { posts };
}
