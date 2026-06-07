import fs from 'node:fs';
import path from 'node:path';
import frontMatter from 'front-matter';
import readingTime from 'reading-time';
import type { Post, PostCategory } from '$lib/models/post';

const POSTS_DIR = path.join(process.cwd(), 'src/posts');

function parsePostFile(filename: string, includeDrafts: boolean): Post | null {
	if (!filename.endsWith('.svx')) return null;

	const raw = fs.readFileSync(path.join(POSTS_DIR, filename), 'utf8');
	const { attributes, body } = frontMatter(raw);
	const attrs = attributes as Record<string, unknown>;

	if (attrs.hidden) return null;
	if (attrs.draft && !includeDrafts) return null;

	const creationDate = String(attrs.creationDate ?? '');
	const rt = readingTime(body);

	return {
		title: String(attrs.title ?? ''),
		slug: String(attrs.slug ?? filename.replace(/\.svx$/, '')),
		creationDate,
		published: new Date(creationDate),
		category: attrs.category as PostCategory,
		excerpt: String(attrs.excerpt ?? ''),
		tags: (attrs.tags as string[]) ?? [],
		readingTimeText: rt.text,
		wordCount: rt.words,
		lead: attrs.lead as string | undefined,
		cover: attrs.cover as string | undefined,
		thumbnail: attrs.thumbnail as string | undefined,
		hasAffiliateLink: attrs.hasAffiliateLink as boolean | undefined,
		site_url: attrs.site_url as string | undefined,
		description: attrs.description as string | undefined,
		draft: attrs.draft as boolean | undefined,
		hidden: attrs.hidden as boolean | undefined
	};
}

/** All published posts for production; includes drafts when includeDrafts is true (dev builds). */
export function getAllPosts(includeDrafts = false): Post[] {
	const files = fs.readdirSync(POSTS_DIR);

	return files
		.map((file) => parsePostFile(file, includeDrafts))
		.filter((post): post is Post => post !== null)
		.sort((a, b) => b.published.getTime() - a.published.getTime());
}

export function getPostSlugs(includeDrafts = false): string[] {
	return getAllPosts(includeDrafts).map((post) => post.slug);
}

export function getPostBySlug(slug: string, includeDrafts = false): Post | undefined {
	return getAllPosts(includeDrafts).find((post) => post.slug === slug);
}
