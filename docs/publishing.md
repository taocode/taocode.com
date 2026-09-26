# Publishing posts

File-based blog. Adding `src/posts/{slug}.svx` with YAML frontmatter is publishing. SvelteKit prerenders `/blog/{slug}` at build time.

Editorial list (ideas, pipeline, published catalog): [content.md](content.md). Creating a post: project skill `new-blog-post`.

## Layout

| Piece | Path |
|-------|------|
| Post body | `src/posts/*.svx` (MDSVEX: Markdown + Svelte) |
| Frontmatter model | `src/lib/models/post.ts` |
| Parse / filter drafts | `src/lib/server/posts.ts` |
| Load all posts | `src/routes/+layout.server.ts` (`getAllPosts(dev)` — drafts only in dev) |
| Post route | `src/routes/blog/[slug]/+page.ts` imports `src/posts/{slug}.svx` |
| Listings | `/blog`, `/categories/{programming\|portfolio\|life}`, `/tags/{slug}` |
| Feeds | `/blog.json`, `/rss.xml`, `/sitemap.xml` |
| Thumbnails | `src/lib/images/{portfolio,programming,life}/**` via `src/lib/images/thumbnails.ts` |

**Filename = slug.** The route does `import(\`../../../posts/${params.slug}.svx\`)`. A mismatch 404s.

## Frontmatter

Required:

```yaml
---
title: 'Post title'
slug: 'kebab-case-slug'
creationDate: '2026-09-07'
category: 'Programming'   # Programming | Portfolio | Life
excerpt: 'One or two sentences for listings and SEO.'
tags:
  - Example
---
```

Optional (used by the index): `lead`, `thumbnail`, `cover`, `site_url`, `description`, `hasAffiliateLink`, `draft`, `hidden`.

- `thumbnail`: `$lib/images/{programming|portfolio|life}/file.ext` — listing + post header. Put the file in that folder or it will not resolve.
- `cover`: filename used as `https://www.taocode.com/{cover}` for social/SEO. Optional; site logo is the fallback. Several old posts set `cover` without a matching static file.
- `draft: true` — omitted from production listings/feeds; visible in `vite dev`.
- `hidden: true` — omitted even in dev.

Ignore leftover `layout: blog` and `author:` on older posts. MDSVEX layout is `post` in `svelte.config.js`; author is not read from frontmatter.

`published:` as a datetime is unused; `creationDate` is parsed into `Post.published`.

## Body

Markdown in `.svx`. Svelte components work. Internal links: `/blog/other-slug`. Sort order: newest `creationDate` first.

Voice: first person, practical, a bit playful. Match nearby posts in the same category rather than inventing a house style.

## BidSquare / employer work

Name the employer at a high level if useful. Do not include internals, schemas, private APIs, or employer code. Write patterns and lessons (e.g. invalidation vs TTL, themes as data, learning Rust from JS).

## Site chrome (not posts)

Copy and photos outside `src/posts` are separate. Tracker rows may list follow-ups (`Introduction.svelte`, `CurrentGoals.svelte`, `CurrentProjects.svelte`, image alts). Do not change those unless the user asked.

## Ship checklist

1. File exists at `src/posts/{slug}.svx` with matching `slug`.
2. Required frontmatter present; category capitalized as above.
3. Thumbnail file exists if `thumbnail` is set.
4. [content.md](content.md): move the item from Pipeline to Published (or add a Published row).
