import { convertToSentenceCase } from '$lib/utils'
import type { PageLoad } from './$types'
import type { Post } from '$lib/models/post'

export const load: PageLoad = async ({fetch, params}) => {
  console.log('tag{slug}.load(params)',params)
  try {
    const slug = params.slug
    const allPosts = await fetch(`/blog.json`);
    const posts: Post[] = await allPosts.json();

    const postsByTag = posts.filter((post: Post) => {
      if (!post.tags) {
        return [];
      }
      const regex = new RegExp(post.tags.join('|'), 'i');
      return regex.test(convertToSentenceCase(slug));
    });

    return { posts, postsByTag, slug };
  } catch (error) {
    console.error(error);
  }
}
