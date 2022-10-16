---
title: "New Website: Now with SvelteKit!"
slug: new-site-sveltekit-upgrade
category: Programming
creationDate: '2021-05-26'
excerpt: The new TAOCode site reworked with SvelteKit.
lead: Built with SvelteKit, MDSVEX, and WindiCSS
layout: blog
author: Mark Jones
tags:
  - Static Site
  - Svelte
  - SvelteKit
  - MDSVEX
  - WindiCSS
---

Less than 6 months since I started this [new site using Svelte with Routify](/blog/new-site), I've upgraded to SvelteKit and a new codebase, [thanks to Markus Hatvan](#thanks-markus-hatvan) for sharing his site's code.

## Why Upgrade So Soon?

I wanted to tag my content so that it could be navigated by subject or category. I looked for solutions within the Routify ecosystem but did not find a suitable demonstration and this probably isn't Routify's realm of responsibility. Certainly this is possible via Svelte in general (maybe with stores?), but I hadn't found a Svelte demonstration out there either; then I came across Markus Hatvan's code which had all the features I wanted and ***in SvelteKit***, the shiny new code with official Svelte routing. 

I initially chose Routify simply because the starter package from Reepolee worked and it was *fast!* Development startup in roughly 10 seconds and builds in a similar amount of time on my local system. Svite indeed! [MarkJonesVoice](/blog/markjonesvoice) is still based on Reepolee's build with Routify + Vite + MDSVEX.

## A Better Build

I came across Markus' SvelteKit + Tailwind build on GitHub and saw that he already had functioning tags and categories and it was on SvelteKit. **Perfect!** So I started a new version of the site build based on it.

## With WindiCSS

I like [TailwindCSS](https://tailwindcss.com/) but truly ❤️ [WindiCSS](https://windicss.org/). Even though Tailwind JIT (used by MH's build) is faster than the regular Tailwind, WindiCSS feels faster for both dev startup and production build.

Current local system production build times for this site:

- WindiCSS: 21.24s
- TailwindCSS: 40.65s

For the production build I don't think the JIT mode for Tailwind makes any difference but it certainly improves dev start-up time, just not as much as WindiCSS.

## Thanks Markus Hatvan

Thank you [Markus Hatvan](https://markushatvan.com/), for sharing his site's source [markushatvan.com source on github](https://github.com/mhatvan/markushatvan.com).

