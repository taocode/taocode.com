---
name: new-blog-post
description: >-
  Creates or ships a taocode.com MDSVEX blog post, updates docs/content.md,
  and follows frontmatter and BidSquare IP rules. Use when the user wants a
  new post, draft, article, or to publish from the content tracker.
---

# New blog post

Read [docs/publishing.md](docs/publishing.md) and [docs/content.md](docs/content.md) before writing. Do not rediscover the post system by crawling the repo.

## Workflow

1. **Pick the item.** Prefer a Pipeline row in `docs/content.md`. If this is a new idea, add it to Pipeline first (see the template in that file).
2. **Slug.** Kebab-case. File **must** be `src/posts/{slug}.svx` with the same `slug` in frontmatter.
3. **Write the `.svx`.** Use the template below. `draft: true` until the user wants it live.
4. **Tracker.** Set status to `drafting` (or `ready` / move to Published when shipping). Fill slug. Do not invent a release date unless asked.
5. **Chrome.** Only change homepage/about/goals/projects if the tracker row lists it **and** the user asked.
6. **Employer IP.** BidSquare: high-level mention OK; no internals, schemas, or work code.

## Frontmatter template

```yaml
---
title: ''
slug: ''
creationDate: 'YYYY-MM-DD'
category: 'Programming'
excerpt: ''
lead: ''
tags:
  - 
---
```

`category` is exactly `Programming`, `Portfolio`, or `Life`. Optional: `thumbnail`, `cover`, `site_url`, `description`, `draft`, `hidden`. Skip unused `layout` / `author` fields.

Thumbnail path if needed: `$lib/images/{programming|portfolio|life}/filename.ext` and add the file there.

## Body

First person, practical, match recent posts in that category. Link related posts with `/blog/{slug}`. Cross-link Cursor/product posts as noted in the tracker (product leads; Cursor is how, unless this **is** the Cursor meta post).

## Shipping

When the user wants it public: drop `draft`, set today's `creationDate` if still a placeholder, move the row to **Published** in `docs/content.md`.
