import { getAllPosts } from '$lib/server/posts';
import { convertToSlug } from '$lib/utils';
import type { Post } from '$lib/models/post';
import fs from 'node:fs';

export const prerender = true;

const BASE_URL = 'https://www.taocode.com';
const pages = [''];

fs.readdirSync('./src/routes').forEach((file) => {
	const route = file.split('.')[0];
	if (
		route.charAt(0) !== '+' &&
		route.charAt(0) !== '_' &&
		route !== 'sitemap' &&
		route !== 'index' &&
		route !== 'categories' &&
		route !== 'tags' &&
		route !== 'rss'
	) {
		pages.push(route);
	}
});

const generateCategories = (posts: Post[]) => {
	const uniqueCategories = posts
		.map((post) => post.category)
		.filter((category, idx, arr) => arr.indexOf(category) === idx);

	return uniqueCategories
		.map(
			(uniqueCategory) => `
      <url><loc>${BASE_URL}/categories/${convertToSlug(uniqueCategory)}/</loc><priority>0.85</priority></url>
        `
		)
		.join('\n');
};

const render = (pageList: string[], posts: Post[]) => `<?xml version="1.0" encoding="UTF-8" ?>
<urlset xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
  ${pageList
		.map(
			(page) => `
    <url><loc>${BASE_URL}/${page ? `${page}/` : ''}</loc><priority>0.85</priority></url>
  `
		)
		.join('\n')}
  ${posts
		.map(
			(post) => `
    <url>
      <loc>${BASE_URL}/blog/${post.slug}/</loc>
      <priority>0.69</priority>
    </url>
  `
		)
		.join('\n')}
    ${generateCategories(posts)}
</urlset>
`;

export function GET() {
	return new Response(render(pages, getAllPosts()));
}
