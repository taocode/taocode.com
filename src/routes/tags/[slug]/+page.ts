import type { PageLoad } from './$types'

export const load: PageLoad = (s,o) => {
  console.log('tag{slug}.load()',{s,o})
}
import { convertToSentenceCase } from '$lib/utils';

export async function loadOld({ page, fetch }: PageLoad) {
  console.log('load()',{page,fetch, arguments})
  try {
    const allPosts = await fetch(`/blog.json`);
    const posts: Post[] = await allPosts.json();

    const postsByTag = posts.filter((post: Post) => {
      if (!post.tags) {
        return [];
      }
      const regex = new RegExp(post.tags.join('|'), 'i');
      return regex.test(convertToSentenceCase(page.params.slug));
    });

    return { posts, postsByTag, slug: page.params.slug };
  } catch (error) {
    console.error(error);
  }
}
