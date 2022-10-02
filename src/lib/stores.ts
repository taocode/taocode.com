import { dev } from '$app/environment'
import { derived, writable  } from 'svelte/store'

export const allPosts = writable([])

export const posts = derived(allPosts, ($allPosts,set) => set(
	$allPosts.filter((c) => ! c.draft || dev)
		.sort((a,b) => {
				return b.published.getTime() - a.published.getTime()
			}
		)
	)
)