import { convertToSentenceCase } from '$lib/utils'
import type { PageLoad } from './$types'
import type { Post } from '$lib/models/post'

import { allPosts, posts } from '$lib/stores'
import { get } from 'svelte/store'

export const load: PageLoad = async ({fetch, params}) => {
  // console.log('tag{slug}.load(params)',params)
  try {
    const slug = params.slug

    const postsByTag = get(posts).filter((post: Post) => {
      if (!post.tags) {
        return [];
      }
      const regex = new RegExp(post.tags.join('|'), 'i');
      return regex.test(convertToSentenceCase(slug));
    });

    return { postsByTag, slug };
  } catch (error) {
    console.error(error);
  }
}
