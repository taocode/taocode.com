---
title: Hot Reload (HMR) Post Edits
slug: hot-reload-hmr-post-edits
creationDate: '2022-10-15'
published: 2022-08-29T09:20:00Z
category: 'Programming'
draft: true
excerpt: How I Improved my editing experience with this blog
lead: I borrowed *(ehem, stole)* some starter code for my site.
layout: blog
author: Mark Jones
# thumbnail: /images/programming/color-palette-shade-generator-thumbnail.png
tags:
  - SvelteKit
  - Vite
---

I wanted to learn SvelteKit and figure that I may as well build my site on this platform. But starting from absolute scratch felt very daunting so instead I borrowed a full featured blog code from Markus Hatvan (which he's since removed from GitHub).

I immediately made a number of modifications, added a few components and changed the theme, but much of the core of the way this site worked was inherited.

## Thanks to RodneyLab for MDsveX Starter

I explored more blogs created using sveltekit and found: [rodneylab/sveltekit-blog-mdx](https://github.com/rodneylab/sveltekit-blog-mdx) which runs super fast. It also does the hot reload wonderfully, so I trace through the code for what's being used and discover vite.import is the magic ingredient.

## Blog Core Now Uses Vite Import

By using `vite.import` and `vite.import.glob()`, vite manages the Hot Module Reload (HMR) upon edit. Before, it required restarting Svelte entirely to see a simple edit to a blog post. All edits to components, theme and design are otherwise nearly instant.

So I looked around for more code to study and came across Rodney Labs...