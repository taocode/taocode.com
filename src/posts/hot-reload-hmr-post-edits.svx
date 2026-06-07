---
title: Hot Reload (HMR) Post Edits
slug: hot-reload-hmr-post-edits
creationDate: '2022-10-15'
published: 2022-08-29T09:20:00Z
category: Programming
excerpt: How I Improved my editing experience with this blog.
lead: I borrowed *(ehem, stole)* some starter code for this site.
description: How I used Vite's import(*) functions to improve the editing of this blog.
layout: blog
author: Mark Jones
# thumbnail: /images/programming/color-palette-shade-generator-thumbnail.png
tags:
  - Upgrades
  - Svelte
  - Vite
---

I find Svelte a compelling App development platform and wanted to gain experience with it so *why not build this site with SvelteKit?* 

## Starter Code?

Starting from scratch felt very daunting so instead I borrowed a full featured blog code from Markus Hatvan <small>*(which he's since removed from GitHub)*</small>. I immediately made a number of modifications to the code, adding a few components and changing the theme but the *core of how it worked was inherited.*

## My Modifications

- 🏃💨 WindiCSS replaced TailwindCSS
- ➕🤯 Headroom - hides fixed header (based on [collardeau/svelte-headroom](https://github.com/collardeau/svelte-headroom))
- ➕🔼 Back To Top button (also uses Headroom)
- ➕👋💬 Utterances comments for blog posts
- ➕🌓☀️ Dark Mode
- ➕🔁 HMR Posts Reload *(new)*

## Thanks to RodneyLab for MDsveX Starter

I explored more blogs created using SvelteKit and found: [rodneylab/sveltekit-blog-mdx](https://github.com/rodneylab/sveltekit-blog-mdx) which works quite well and seems like a great starter codebase. It's also quite simple which makes it fairly easy to study. Most importantly to me, it hot reloads on edits. I examine the source for what's being used and discover that it's leveraging Vite's import() functions.

## My Blog Core Now Uses Vite's Import Functions

By using Vite's `import(../posts/${slug}.md)` and `import.meta.glob(../posts/*.md)`, Vite manages the Hot Module Reload (HMR) upon edit.

## Previously it Used a JSON Endpoint and Fetch

Using a `JSON` endpoint loaded via `fetch`, it *required restarting Svelte entirely* to see any edits to blog posts. One of my favorite features of Svelte is how quickly it shows changes. Vite's HMR is magic to work with. It really makes the *otherwise tidious* front end work *a pleasure.* It's immensely helpful to see immediate results, even to *simple content edits*. Otherwise all edits to components, theme and design reloaded instantly via HMR. Clearly this wasn't a problem with Svelte, but how the blog entries were loaded.

