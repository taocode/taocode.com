import { convertToSentenceCase } from '$lib/utils'

export async function load({ page, fetch }: LoadInput) {
  try {
    const allPosts = await fetch(`/blog.json`);
    const posts = await allPosts.json();

    const postsByCategory = posts.filter(
      (post: Post) =>
        post.category === convertToSentenceCase(page.params.slug),
    );

    return { posts, postsByCategory, slug: page.params.slug };
  } catch (error) {
    console.error(error);
  }
}
