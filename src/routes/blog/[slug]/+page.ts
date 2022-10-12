import { convertToSentenceCase } from '$lib/utils'
import type { Post } from '$lib/models/post'

import { allPosts, posts } from '$lib/stores'
import { get } from 'svelte/store'
import type { PageServerLoad } from './$types'

/** @type {import('./$types').PageLoad} */
export async function load<PageServerLoad>({ fetch, params }) {
  try {
    const compPromise = import(`../../../posts/${params.slug}.md`)
    const compResult = await Promise.resolve(compPromise)
    const { default: page } = compResult
    return { pageComponent: page }
  } catch (error) {
    console.error(error)
  }
}
