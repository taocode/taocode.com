import { derived, writable } from 'svelte/store'

export const allPosts = writable([])

export const posts = derived(allPosts, $posts => $posts
  .filter((post) => !post.hidden)
  .sort((a, b) =>
    new Date(a.creationDate).getTime() > new Date(b.creationDate).getTime()
      ? -1
      : new Date(a.creationDate).getTime() < new Date(b.creationDate).getTime()
      ? 1
      : 0,
    )
  )