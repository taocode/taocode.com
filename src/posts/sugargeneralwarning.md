---
title: Sugar General Warning
slug: sugargeneralwarning
creationDate: '2021-07-02'
published: 2021-07-02T09:20:00Z
category: 'Portfolio'
excerpt: Sugar has its health detriments, learn more about responsible sugar consumption.
lead: Built with SvelteKit, Tailwind working with ShareThis.
layout: blog
author: Mark Jones
site_url: https://SugarGeneralWarning.com
thumbnail: /images/portfolio/sugargeneralwarning-thumbnail.jpg
tags:
  - SvelteKit
  - Tailwind CSS
  - Static Site
  - 11ty
  - VitePress
  - Firebase hosting
---

My friend and I got to talking about how sugar should have a warning label like cigarettes. Sugar may not be as clearly problematic as smoking tobacco but it's at least as addictive and chronic diseases, like diabetes, are closely associated with sugar.

## Goals

1. Communicate a warning about sugar and your health
1. Provide references and backing information
1. Allow visitors to easily share
1. Guerilla marketing - add stickers to sugar-laiden products in your local market

## Tech Stack Explorations

This site became an inquiry into delivering roughly the same thing via a static site generator using [Eleventy (11ty)](https://www.11ty.dev/) and a couple App frameworks: [VitePress](https://vitepress.vuejs.org/) and [SvelteKit](https://kit.svelte.dev/).

### Eleventy (11ty)

The Sugar General Warning site started as an 11ty experiment but as similar as 11ty is to Hugo, I've never quite got the knack of it. Hugo has generally been faster. When I started to rework/update I found problems with 11ty and explored a few static site compatible app frameworks instead. I'm personally more interested in App development but this site doesn't really require or even need any App features. But still, if I can learn more Vue or Svelte while working on my own project, *why not?*

### VitePress

I got pretty excited about the Vue direction, especially [VitePress](https://vitepress.vuejs.org/) and basically started with their documentation site to explore it. It's *very fast* and slick but my use case wasn't exactly its target: documentation sites, so I ended up removing some extra stuff. Ultimately Vue added a bit over 200Kb to the build. A modest overhead for what it does and provides but if I'm going the App direction and don't really *require* any actual App behaviors, why add that overhead?

### SvelteKit

[SvelteKit](https://kit.svelte.dev/) won out as I compared it with Vue and VitePress. It added roughly 80Kb to the build compared to plain static site. That's ultimately incredibly minimal but now when you navigate from page to page it's instant and the dark theme doesn't blink white on navigation changes.

## Was the Appification Worth it?

Given that this site uses basically zero App features aside from faster navigation, ***is it worth it for slightly faster navigation?*** Maybe not exactly for this site but I find the overhead acceptable and the developer experience is much faster, similar VitePress, which goes a long way towards working on it being more fun than 11ty which was slower for basically all edits and start up with how I had it configured and I never really groked it.

Also, [ShareThis](https://sharethis.com/) required [reinitialization on SPA navigation](https://sharethis.com/support/guides/reinitialize-sharethis-buttons-specific-sharing-parameters/) since the browser is no longer reloading the page like it does with a static site. So that was a bit more work to test and get to work correctly within the SPA, but ultimately it may reduce some network delays, latency and eventually save a little bandwidth?

## Results

Mixed. The site is barely visited and we've done zero promotion. But... you can certainly find it when searching about the dangers of sugar, obviously at the top of the heap if you search all three words. So people may stumble upon my ramblings, maybe like you did to get to this site.