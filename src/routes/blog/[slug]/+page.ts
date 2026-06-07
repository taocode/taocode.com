import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const prerender = true;

const postModules = import.meta.glob('../../../posts/*.svx');

export function entries() {
	return Object.keys(postModules).map((path) => ({
		slug: path.split('/').pop()!.replace('.svx', '')
	}));
}

export const load: PageLoad = async ({ params, parent }) => {
	const { posts } = await parent();
	const post = posts.find((p) => p.slug === params.slug);

	if (!post) {
		throw error(404, `blog/${params.slug} not found`);
	}

	const postIndex = posts.findIndex((p) => p.slug === params.slug);
	const previousArticle = posts[postIndex + 1];
	const nextArticle = posts[postIndex - 1];

	try {
		const { default: pageComponent } = await import(`../../../posts/${params.slug}.svx`);
		return { post, pageComponent, previousArticle, nextArticle };
	} catch (err) {
		console.error('[slug]/+page.ts', err);
		throw error(404, `blog/${params.slug} not found`);
	}
};
