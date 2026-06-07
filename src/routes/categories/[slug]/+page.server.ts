import { convertToSentenceCase } from '$lib/utils';
import type { Post } from '$lib/models/post';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params, parent }) => {
	const { posts } = await parent();
	const postsByCategory = posts.filter(
		(post: Post) => post.category === convertToSentenceCase(params.slug)
	);

	return { postsByCategory, slug: params.slug };
};
