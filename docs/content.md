# Content tracker

Living editorial list for [taocode.com](https://www.taocode.com). This file is not a site page. How publishing works: [publishing.md](publishing.md). Creating a post: project skill `new-blog-post`.

**Status:** `idea` → `drafting` → `ready` → `published` (or `parked`)

When a pipeline item ships: move it to **Published**, set status to `published`, and fill in the real slug/date.

---

## How to add a post

Copy the template into **Pipeline** (or **Backlog** if it is only a spark). Keep notes loose; titles and slugs can change until `ready`. To actually write the `.svx`, use the `new-blog-post` skill.

```md
### Working title

- Status: idea
- Category: Programming | Portfolio | Life
- Slug: (optional until drafting)
- Related: (published slugs or other pipeline items)
- Site chrome: (homepage/about/goals/projects follow-ups, or none)
- Notes:
```

---

## Pipeline

Unpublished work, newest ideas mixed with older threads. Order is not a release order.

### A note about B and Empurror

- Status: idea
- Category: Life
- Slug:
- Related:
- Site chrome:
  - [`Introduction.svelte`](../src/lib/components/content/Introduction.svelte) still says “walking my dog around Winston-Salem”
  - Intro/about headshot is still the dog photo (`headshot-tongues-out-with-b.jpg`)
  - Life category header still uses Empurror (`empurror-scratcher-sun-nap.jpg`)
  - Decide whether photos stay as tribute; update alts either way
- Notes: Short. B is no longer something I walk around Winston-Salem because he died. The cat in the pictures is no more either. A quick note, not a long essay.

### 2 Easy Habits — 6 Years Later

- Status: idea
- Category: Life
- Slug: `2-easy-habits-6-years-later` (or “5+ years” if that title fits better)
- Related:
  - [`2-easy-habits-1-year-later`](../src/posts/2-easy-habits-1-year-later.svx) (2021-05-20; origin ~May 2020)
  - [`2-easy-habits-2.5-years-later`](../src/posts/2-easy-habits-2.5-years-later.svx) (2022-10-01)
  - [`my-suspension-strap-workout`](../src/posts/my-suspension-strap-workout.svx)
  - [`why-i-love-to-ride-eucs`](../src/posts/why-i-love-to-ride-eucs.svx)
- Site chrome: [`CurrentGoals.svelte`](../src/lib/components/content/CurrentGoals.svelte) still lists “Workout 3+ times a week” and “Learn to ride an EUC”
- Notes: Shoulder injury and hernia surgery. Exercise is now qi gong, swimming, and walking the neighborhood. ~2 months post-surgery (as of Sep 2026), mostly moving well, endurance still low. Fasting thread from the series may still be worth a check-in.

### Branching into Rust (and a fast API)

- Status: idea
- Category: Programming
- Slug:
- Related: pipeline item *JSON-serializable SvelteKit theme engine*; [`experience.yaml`](../src/lib/components/experience/experience.yaml) (`Rust Custom API` since 2025-11)
- Site chrome: none required
- Notes: Coming from JS/Svelte/web into Rust — why, what was hard, what clicked. Technical hold: blazingly fast API with horizontally scalable Redis-synced L1+L2 cache and active invalidation in front of the DB. Not launched yet; something to hold. Started at BidSquare (online auction SaaS). **IP:** employer-level mention is fine; no internals, schemas, or BidSquare code. Write patterns and lessons (invalidation vs TTL, L1/L2 tradeoffs, learning Rust from a JS background).

### JSON-serializable SvelteKit theme engine

- Status: idea
- Category: Programming
- Slug:
- Related:
  - pipeline item *Branching into Rust (and a fast API)*
  - [`dark-mode-toggle-sveltekit-tailwind-windicss`](../src/posts/dark-mode-toggle-sveltekit-tailwind-windicss.svx)
  - [`color-palette-shade-generator`](../src/posts/color-palette-shade-generator.svx)
  - [`new-site-sveltekit-upgrade`](../src/posts/new-site-sveltekit-upgrade.svx)
- Site chrome: none required
- Notes: Custom theme engine in the Skeleton UI color/token spirit, but designed to serialize to JSON so the entire style can load from JSON into a realized theme. Theme studio to edit settings and block properties. BidSquare frontend; same **IP** rule as the Rust post.

### MedTimeLog.com v2.0

- Status: idea
- Category: Portfolio
- Slug:
- Related: [`resurrecting-this-blog-with-cursor`](../src/posts/resurrecting-this-blog-with-cursor.svx)
- Site chrome: not listed in [`CurrentProjects.svelte`](../src/lib/components/content/CurrentProjects.svelte) yet
- Notes: Planned and built with Cursor. Full E2EE, cooldown set features. Lead with the product; Cursor is how it was realized faster.

### Amber Ferenz — interactive works search

- Status: idea
- Category: Portfolio
- Slug: new follow-up (keep [`amber-ferenz`](../src/posts/amber-ferenz.svx) as the 2021 launch story). Alternative: update that post and bump the date.
- Related: [`amber-ferenz`](../src/posts/amber-ferenz.svx) (Hugo + WindiCSS, amberferenz.com); [`resurrecting-this-blog-with-cursor`](../src/posts/resurrecting-this-blog-with-cursor.svx)
- Site chrome: none required
- Notes: Interactive search of her works, filtering, and the other recent blog features. Much more quickly realized with Cursor, and it was fun. Lead with the product.

### taocode-audioplayer

- Status: idea
- Category: Programming (or Portfolio)
- Slug:
- Related: [`resurrecting-this-blog-with-cursor`](../src/posts/resurrecting-this-blog-with-cursor.svx)
- Site chrome: optional add to Current Projects
- Notes: Separate post for the audio player. Cursor is a thread, not the headline unless it fits.

Cursor is a thread across MedTimeLog / Amber / audioplayer (and this site). Those posts still lead with the product. Meta note already shipped: [`resurrecting-this-blog-with-cursor`](../src/posts/resurrecting-this-blog-with-cursor.svx).

---

## Backlog

Sparks that are not in the pipeline yet. Promote to Pipeline when you are ready to treat them as a real post.

- _(empty — add below)_

---

## Published

Newest first. URL: `/blog/{slug}`

| Date | Category | Title | Slug | File |
|------|----------|-------|------|------|
| 2026-09-07 | Programming | Resurrecting This Blog with Cursor | `resurrecting-this-blog-with-cursor` | [`src/posts/resurrecting-this-blog-with-cursor.svx`](../src/posts/resurrecting-this-blog-with-cursor.svx) |
| 2022-11-19 | Programming | Svelte Headroom - My First NPM Package! | `svelte-headroom-my-first-npm-package` | [`src/posts/svelte-headroom-my-first-npm-package.svx`](../src/posts/svelte-headroom-my-first-npm-package.svx) |
| 2022-10-15 | Programming | Hot Reload (HMR) Post Edits | `hot-reload-hmr-post-edits` | [`src/posts/hot-reload-hmr-post-edits.svx`](../src/posts/hot-reload-hmr-post-edits.svx) |
| 2022-10-01 | Life | 2 Easy Habits - 2.5 Years Later | `2-easy-habits-2.5-years-later` | [`src/posts/2-easy-habits-2.5-years-later.svx`](../src/posts/2-easy-habits-2.5-years-later.svx) |
| 2022-09-29 | Life | Why I Love to Ride EUCs | `why-i-love-to-ride-eucs` | [`src/posts/why-i-love-to-ride-eucs.svx`](../src/posts/why-i-love-to-ride-eucs.svx) |
| 2022-09-01 | Life | My TRX/Suspension Strap Workout | `my-suspension-strap-workout` | [`src/posts/my-suspension-strap-workout.svx`](../src/posts/my-suspension-strap-workout.svx) |
| 2022-08-29 | Programming | Color Palette Shade Generator | `color-palette-shade-generator` | [`src/posts/color-palette-shade-generator.svx`](../src/posts/color-palette-shade-generator.svx) |
| 2021-09-01 | Programming | Optimize Firebase Hosting Cache Rules | `optimize-firebase-hosting-cache-rules` | [`src/posts/optimize-firebase-hosting-cache-rules.svx`](../src/posts/optimize-firebase-hosting-cache-rules.svx) |
| 2021-08-02 | Portfolio | Amber Ferenz | `amber-ferenz` | [`src/posts/amber-ferenz.svx`](../src/posts/amber-ferenz.svx) |
| 2021-07-07 | Portfolio | Stephen Czaikoski | `stephenc` | [`src/posts/stephenc.svx`](../src/posts/stephenc.svx) |
| 2021-07-02 | Portfolio | Sugar General Warning | `sugargeneralwarning` | [`src/posts/sugargeneralwarning.svx`](../src/posts/sugargeneralwarning.svx) |
| 2021-06-06 | Programming | Dark Mode Toggle for SvelteKit with Tailwind or WindiCSS | `dark-mode-toggle-sveltekit-tailwind-windicss` | [`src/posts/dark-mode-toggle-sveltekit-tailwind-windicss.svx`](../src/posts/dark-mode-toggle-sveltekit-tailwind-windicss.svx) |
| 2021-06-02 | Programming | Added Feature: Utterances Comments | `added-feature-utterances-comments` | [`src/posts/added-feature-utterances-comments.svx`](../src/posts/added-feature-utterances-comments.svx) |
| 2021-05-26 | Programming | New Website: Now with SvelteKit! | `new-site-sveltekit-upgrade` | [`src/posts/new-site-sveltekit-upgrade.svx`](../src/posts/new-site-sveltekit-upgrade.svx) |
| 2021-05-20 | Life | 2 Easy Habits - 1 Year Later | `2-easy-habits-1-year-later` | [`src/posts/2-easy-habits-1-year-later.svx`](../src/posts/2-easy-habits-1-year-later.svx) |
| 2021-04-14 | Portfolio | Salem CAE | `salem-cae` | [`src/posts/salem-cae.svx`](../src/posts/salem-cae.svx) |
| 2021-04-04 | Portfolio | Mark Jones Voice | `markjonesvoice` | [`src/posts/markjonesvoice.svx`](../src/posts/markjonesvoice.svx) |
| 2021-03-23 | Programming | Cloud Function to Send Email | `firebase-cloud-function-send-email` | [`src/posts/firebase-cloud-function-send-email.svx`](../src/posts/firebase-cloud-function-send-email.svx) |
| 2021-03-03 | Portfolio | TRAINcycle | `traincycle` | [`src/posts/traincycle.svx`](../src/posts/traincycle.svx) |
| 2021-03-01 | Portfolio | Etsaman.VIP | `etsaman` | [`src/posts/etsaman.svx`](../src/posts/etsaman.svx) |
| 2021-02-12 | Programming | My 1st Svelte App - Mark Jones Voice | `my-1st-svelte-app` | [`src/posts/my-1st-svelte-app.svx`](../src/posts/my-1st-svelte-app.svx) |
| 2021-02-01 | Programming | Svelte is a Nice Piece of App | `svelte-is-nice-piece-of-app` | [`src/posts/svelte-is-nice-piece-of-app.svx`](../src/posts/svelte-is-nice-piece-of-app.svx) |
| 2021-01-12 | Life | Why I Started This Blog | `why-i-started-this-blog` | [`src/posts/why-i-started-this-blog.svx`](../src/posts/why-i-started-this-blog.svx) |
| 2021-01-10 | Programming | New Website! | `new-site` | [`src/posts/new-site.svx`](../src/posts/new-site.svx) |
| 2008-10-20 | Portfolio | Salem Academy & College | `salem` | [`src/posts/salem.svx`](../src/posts/salem.svx) |

**Counts:** 25 published (Programming 12 · Portfolio 8 · Life 5). Last ship: 2026-09-07.
