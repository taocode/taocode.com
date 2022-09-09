import type { PageLoad } from './$types'
export async function load() {
	const mdModules = import.meta.glob('../content/blog/**/index.md');
	const posts = await Promise.all(
		Object.keys(mdModules).map(async (path) => {
			const slug = path.split('/').at(-2);
			const { metadata } = await mdModules[path]();
			const { datePublished, lastUpdated, title, seoMetaDescription } = metadata;
			return { datePublished, lastUpdated, title, seoMetaDescription, slug };
		}),
	);
	return { posts };
}
