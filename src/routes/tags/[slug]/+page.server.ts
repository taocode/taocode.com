import { convertToSentenceCase } from '$lib/utils';
import type { Post } from '$lib/models/post';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params, parent }) => {
	const { posts } = await parent();
	const postsByTag = posts.filter((post: Post) => {
		if (!post.tags?.length) return false;
		const regex = new RegExp(post.tags.join('|'), 'i');
		return regex.test(convertToSentenceCase(params.slug));
	});

	return { postsByTag, slug: params.slug };
};
