import { convertToSentenceCase } from '$lib/utils'
import type { Post } from '$lib/models/post'

import { allPosts, posts } from '$lib/stores'
import { get } from 'svelte/store'

/** @type {import('./$types').PageLoad} */
export async function load({ fetch, params }) {
  try {
    // console.log('category[slug]',{params})
    // const allPosts = await fetch(`/blog.json`);
    // const posts = await allPosts.json();
    const slug = params.slug
    const postsByCategory = get(posts).filter(
      (post: Post) =>
        post.category === convertToSentenceCase(slug),
    );
    return { postsByCategory, slug };
  } catch (error) {
    console.error(error);
  }
}
