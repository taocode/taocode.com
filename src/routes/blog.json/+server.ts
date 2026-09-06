import { getAllPosts } from '$lib/server/posts';

export const prerender = true;

export function GET() {
  const posts = getAllPosts().map(
    ({ slug, title, creationDate, category, excerpt, tags }) => ({
      slug,
      title,
      creationDate,
      category,
      excerpt,
      tags,
    }),
  );

  return new Response(JSON.stringify(posts), {
    headers: { 'Content-Type': 'application/json' },
  });
}
