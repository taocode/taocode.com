import { convertToSentenceCase } from '$lib/utils'
import type { Post } from '$lib/models/post'

import { error } from '@sveltejs/kit'
import { allPosts, posts } from '$lib/stores'
import { get } from 'svelte/store'
import type { PageLoad } from './$types'

export async function load<PageLoad>({ params }) {
  try {
    const compPromise = import(`../../../posts/${params.slug}.md`)
    const compResult = await Promise.resolve(compPromise)
    const { default: page } = compResult
    return { pageComponent: page }
  } catch (err) {
    console.error('[slug]/page.ts',err)
    throw error(404,`'blog/${params.slug}' not found`)
  }
}
