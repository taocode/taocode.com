---
title: New Website!
slug: new-website
category: Programming
creationDate: '2021-01-10'
excerpt: The new TAOcode site launched.
lead: Built with Svelte, Svite, Routify, Windicss, and MDSVEX
layout: blog
author: Mark Jones
---

I've worked on websites since Before Google (BGE). There have been so many advancements since those PERL scripts running through the `/cgi-bin/` folder in the mid-90s. I've loved the static site since before it has become the trend. It's is a direction that I like for many projects because it makes hosting faster, cheaper and more secure.

I've created a handful of static sites using Hugo and 11ty and have made attempts with many other projects like Gatsby and more. Most of these I got stuck somewhere trying some combination with Tailwindcss or some image processing library. If I didn't get stuck, I became dissappointed and lacked the patience to have to wait for 1) start-up dev time over 30 seconds and 2) dev edits taking more than a couple seconds or over 20 seconds for some CSS change to update after Tailwind does all its magic. Delays in edits or long start-up times make coding way less fun and make it challenging to experiment with the code, having to pay the waiting penalty for a typo. *Uncool.*

## Hugo

Hugo, a Go Language static site generator (SSG), works well. It's been faster and simpler to set-up than most any JS SSG I've tried (Gatsby, 11ty, ...). It's easy to be successful with a free template and offers awesome systems from related content to menu handling, taxonomy (tags), and has shortcodes and partial templates. I find Hugo an impressive platform.

<div class="md:flex md:gap-x-4"><div class="md:w-1/2 md:leading-snug">

### Hugo Pros

* Great starting recipe
* Easy to be succesfull
* Very fast site generation
* Quick reloads for editing

I love Hugo but not necessarily the Go language.

Hugo supports so many website needs but it is a bit of an island unto itself. Yes, it can incorporate Node.js projects and do advanced things like SASS, SCSS, Lesss, PostCSS and all so it's extensible, but then there's a language shift (JS) from the Go Language.

</div><div class="md:w-1/2 md:leading-snug">

### Hugo Cons

I find it a little strange to have to "double" shortcodes and partial templates. That is, your templates can't use your shortcodes. I've ended up with nearly duplicated code from partial to shortcode to provide the functionality between template and content.

Advanced image processsing/optimizing can be added to Hugo but like many advanced features it requires a bit of you to know how to navigate the tools as there's a lot of freedom. This is great, but I know there's more for me to understand about Hugo's more advanced features.

</div></div>

## Why Svelte?

Because it's fast and effecient.

This is a static site, *right?* So why use Svelte? The line between WebApp and static site is blurry; Gatsby is built React, for example.

**Svelte** is the coolest development experience. I've generally had fair success in learning Svelte ideas and love how easy it is to do wizard level app features using Svelte. Ultimately, I really appreciate effeciency and speed.

## Why Routify?

Isn't SvelteKit available? Sure, but it's not static site focussed, whereas Vite + Routify are speedy and spit out a SSG in seconds.

## Why Windicss?

Because I love Tailwind but suffer from it's rebuild time. Now that I've found windicss, I'm in love. ♡

WindiCSS does some magic that makes TailwindCSS syntax very fast to make any changes.

