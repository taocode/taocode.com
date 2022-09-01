
// @migration task: Check imports
import posts from './../_posts';

export function GET({ params }) {
  if (params.slug in posts) {
    return new Response(posts[params.slug])
  }
  throw Error(404)
}
