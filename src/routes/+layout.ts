import type { LayoutLoad } from './$types'
export const prerender = true
export async function load({ fetch }: LayoutLoad) {
  try {
    // await fetch('/sitemap.xml')
    // await fetch('/rss.xml')

    // throw new Error("@migration task: Migrate this return statement (https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292693)");
    return true
  } catch (error) {
    console.error(error)
  }
}
