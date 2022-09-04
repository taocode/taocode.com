import { derived, writable } from 'svelte/store'
import type { Post } from '$lib/models/post'

export const allPosts: Post[] = writable([])

export const posts: Post[] = derived(allPosts, $posts => $posts
  .filter((post) => !post.hidden)
  .sort((a, b) =>
    new Date(a.creationDate).getTime() > new Date(b.creationDate).getTime()
      ? -1
      : new Date(a.creationDate).getTime() < new Date(b.creationDate).getTime()
      ? 1
      : 0,
    )
  )