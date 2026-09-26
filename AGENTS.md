# Agent map

Personal site (SvelteKit, static adapter, Firebase Hosting). Read these instead of rediscovering the tree.

| What | Where |
|------|--------|
| How posts work | [docs/publishing.md](docs/publishing.md) |
| What to write next | [docs/content.md](docs/content.md) |
| Create / ship a post | project skill `new-blog-post` (`.cursor/skills/new-blog-post`) |
| Post files | `src/posts/{slug}.svx` — filename **must** equal `slug` |
| Post metadata types | `src/lib/models/post.ts` |
| Index / drafts | `src/lib/server/posts.ts` |

Do not crawl `src/posts` to rebuild a catalog; use `docs/content.md`. Do not invent a CMS. BidSquare work: patterns and lessons only — no employer internals (see publishing.md).
