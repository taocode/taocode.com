import { json } from '@sveltejs/kit';
// eslint-disable-next-line @typescript-eslint/no-var-requires
import posts from '../blog/_posts';
import { convertToSlug } from '$lib/utils';

import fs from 'fs'
import type { Post } from '$lib/models/post'

const BASE_URL = 'https://www.taocode.com';
const pages = [''];

fs.readdirSync('./src/routes').forEach((file) => {
  file = file.split('.')[0];
  if (
    file.charAt(0) !== '_' &&
    file !== 'sitemap' &&
    file !== 'index' &&
    file !== 'categories' &&
    file !== 'tags' &&
    file !== 'rss'
  ) {
    pages.push(file);
  }
});

const generateCategories = () => {
  const uniqueCategories = posts
    .map((post: Post) => post.category)
    .filter(
      (category: string, idx: number, arr: string[]) =>
        arr.indexOf(category) === idx,
    );

  return uniqueCategories
    .map(
      (uniqueCategory: string) => `
      <url><loc>${BASE_URL}/categories/${convertToSlug(
        uniqueCategory,
      )}/</loc><priority>0.85</priority></url>
        `,
    )
    .join('\n');
};

const render = (
  pages: string[],
  posts: Post[],
) => `<?xml version="1.0" encoding="UTF-8" ?>
<urlset xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
  ${pages
    .map(
      (page: string) => `
    <url><loc>${BASE_URL}/${
        page ? `${page}/` : ''
      }</loc><priority>0.85</priority></url>
  `,
    )
    .join('\n')}
  ${posts
    .map(
      (post: Post) => `
    <url>
      <loc>${BASE_URL}/blog/${post.slug}/</loc>
      <priority>0.69</priority>
    </url>
  `,
    )
    .join('\n')}
    ${generateCategories()}
</urlset>
`;

export function GET() {
  const sitemap = render(pages, posts);

  // throw new Error("@migration task: Migrate this return statement (https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292701)");
  // Suggestion (check for correctness before using):
  return json(sitemap);
  // return {
  //   body: sitemap,
  // };
}
