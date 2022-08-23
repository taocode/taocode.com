import posts from './_posts';

export function GET() {
  return {
    body: Object.keys(posts).map((slug) => ({
      slug,
      ...posts[slug],
    })),
  };
}
