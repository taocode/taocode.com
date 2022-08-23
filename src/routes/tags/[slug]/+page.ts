import { convertToSentenceCase } from '../../../utils';

export async function load({ page, fetch }: LoadInput) {
  try {
    const allPosts = await fetch(`/blog.json`);
    const posts: Post[] = await allPosts.json();

    const postsByTag = posts.filter((post: Post) => {
      if (!post.tags) {
        return [];
      }
      const regex = new RegExp(post.tags.join('|'), 'i');
      return regex.test(convertToSentenceCase(page.params.slug));
    });

    return { posts, postsByTag, slug: page.params.slug };
  } catch (error) {
    console.error(error);
  }
}
