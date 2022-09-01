import { convertToSentenceCase } from '$lib/utils'
import type { Post } from '$lib/models/post'

/** @type {import('./$types').PageLoad} */
export async function load({ fetch, params }) {
  try {
    // console.log('category[slug]',{params})
    const allPosts = await fetch(`/blog.json`);
    const posts = await allPosts.json();
    const slug = params.slug
    const postsByCategory = posts.filter(
      (post: Post) =>
        post.category === convertToSentenceCase(slug),
    );
    return { posts, postsByCategory, slug };
  } catch (error) {
    console.error(error);
  }
}
