import type { PageLoad } from './$types'
export async function load({ fetch }: PageLoad) {
  const blog = await fetch(`/blog.json`);
  const posts = await blog.json();

  return {
    posts,
  }
}
