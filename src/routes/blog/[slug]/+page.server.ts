import { getPostSlugs } from '$lib/server/posts';

/** Prerender published posts only. Drafts stay out of the production build. */
export function entries() {
  return getPostSlugs(false).map((slug) => ({ slug }));
}
