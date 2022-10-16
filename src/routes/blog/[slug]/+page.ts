import { convertToSentenceCase } from '$lib/utils'
import type { Post } from '$lib/models/post'

import { allPosts, posts } from '$lib/stores'
import { get } from 'svelte/store'
import type { PageLoad } from './$types'

export async function load<PageLoad>({ fetch, params }) {
  try {
    const compPromise = import(`../../../posts/${params.slug}.md`)
    const compResult = await Promise.resolve(compPromise)
    const { default: page } = compResult
    return { pageComponent: page }
  } catch (error) {
    console.error(error)
  }
}
