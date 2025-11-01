export const prerender = true;

type Frontmatter = {
	title: string;
	date: string;
	description?: string;
	tags?: string[];
	author?: string;
	draft?: boolean;
};

export async function GET() {
	const modules = import.meta.glob('../../../posts/*.md', { eager: true });

	const posts = Object.entries(modules)
		.map(([path, mod]: any) => {
			const m = path.match(/[/\\]([^/\\]+)\.md$/);
			const slug = m ? m[1] : '';
			const meta: Frontmatter = mod.metadata || mod.frontmatter || {};
			const html = mod.default?.render?.().html || '';
			return { slug, html, ...meta };
		})
		.filter((p) => !p.draft)
		.sort((a, b) => +new Date(b.date) - +new Date(a.date));

	const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:content="http://purl.org/rss/1.0/modules/content/">
	<channel>
		<title>hyperdefined</title>
		<link>https://hyper.lol/blog</link>
		<description>hyperdefined blog &amp; updates.</description>
		${posts
			.map(
				(p) => `
		<item>
			<link>https://hyper.lol/blog/${p.slug}</link>
			<guid>https://hyper.lol/news/${p.slug}</guid>
			<pubDate>${new Date(p.date).toUTCString()}</pubDate>
			<description>${escapeXml(p.description ?? '')}</description>
			<content:encoded><![CDATA[${p.html}]]></content:encoded>
		</item>`
			)
			.join('')}
	</channel>
</rss>`;

	return new Response(rss, {
		headers: {
			'Content-Type': 'text/xml; charset=utf-8',
			'Cache-Control': 'public, max-age=3600'
		}
	});
}

function escapeXml(str: string) {
	return str
		.replace(/&/g, '&amp;')
		.replace(/</g, '&lt;')
		.replace(/>/g, '&gt;')
		.replace(/"/g, '&quot;')
		.replace(/'/g, '&apos;');
}
