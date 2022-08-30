import posts from '../blog/_posts';

export function GET() {
  // throw new Error("@migration task: Migrate this return statement (https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292701)");
  // Suggestion (check for correctness before using):
  return new Response(JSON.stringify(Object.keys(posts).map((slug) => ({
    slug,
    ...posts[slug],
  }))));
}
