import type { LayoutLoad } from './$types'
import { readPosts } from './blog/_posts'
export const prerender = true
export async function load({ fetch }: LayoutLoad) {
  try {
    readPosts()
    await fetch('/sitemap.xml')
    await fetch('/rss.xml')

    return true
  } catch (error) {
    console.error(error)
  }
}
