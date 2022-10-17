---
title: Hot Reload (HMR) Post Edits
slug: hot-reload-hmr-post-edits
creationDate: '2022-10-15'
published: 2022-08-29T09:20:00Z
category: 'Programming'
draft: true
excerpt: How I Improved my editing experience with this blog
lead: I borrowed *(ehem, stole)* some starter code for this site.
layout: blog
author: Mark Jones
# thumbnail: /images/programming/color-palette-shade-generator-thumbnail.png
tags:
  - SvelteKit
  - Vite
---

I find Svelte a compelling App development platform and wanted to gain experience with it so *why not build this site with SvelteKit?* 

Starting from scratch felt very daunting so instead I borrowed a full featured blog code from Markus Hatvan (which he's since removed from GitHub). I immediately made a number of modifications to the code, adding a few components and changing the theme but much of the core of the way this site worked was inherited.

## My Modifications

- 🏃💨 WindiCSS replaced TailwindCSS
- ➕🤯 Headroom - hides fixed header (based on [collardeau/svelte-headroom](https://github.com/collardeau/svelte-headroom))
- ➕🔼 Back To Top button (also uses Headroom)
- ➕👋💬 Utterances comments for blog posts
- ➕🌓☀️ Dark Mode
- ➕🔁 HMR Posts Reload *(new)*

## Thanks to RodneyLab for MDsveX Starter

I explored more blogs created using SvelteKit and found: [rodneylab/sveltekit-blog-mdx](https://github.com/rodneylab/sveltekit-blog-mdx) which runs super fast. It also does the hot reload wonderfully, so I trace through the code for what's being used and discover that it's leveraging Vite's import() functions.

## Blog Core Now Uses Vite's Import Functions

By using Vite's `import(../posts/${slug}.md)` and `import.meta.glob(../posts/*.md)`, Vite manages the Hot Module Reload (HMR) upon edit.

Previously, using a `JSON` endpoint loaded via `fetch`, it required restarting Svelte entirely to see a simple edit to a blog post. Otherwise all edits to components, theme and design reloaded instantly. Clearly this wasn't a problem with Svelte, but how the blog entries were loaded.

