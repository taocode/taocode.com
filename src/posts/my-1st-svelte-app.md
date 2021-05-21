---
title: My 1st Svelte App - Mark Jones Voice
slug: my-1st-svelte-app-markjonesvoice
creationDate: '2021-02-12'
category: Programming
excerpt: My first Svelte App, using Vite, WindiCSS and MDSVEX
lead: "Re-written from an 11ty static site, now Svelte and *~90% leaner*."
layout: blog
author: Mark Jones
tags:
  - Svelte
  - Vite
  - CMS
  - blog
  - WindiCSS
---
Originally I worked up a Vanilla JS + TailwindCSS 11ty site. This involved lots of event throwing and catching to maintain the variables and their interaction with clumsy functions that only served to keep the multiple variables updated as the user starts selecting options; hence why it was a natural fit to become a Svelte App.

Additionally, the site required a PHP script to handle the Hire Me form submission.

## Enter Svelte

Using svelte made it easier to do even more, like show a wait animation while awaiting the response from the Hire Me form. Before using svelte that was just another complexity to manage, one too many.

I estimate that my code shrunk to nearly 1/10th its prior "Vanilla JS" size when rewritten in Svelte. It's not just less lines of code, it's easier to read and understand what's going on. Hence why [Svelte is Cool](/posts/svelte-is-cool).

## Enter Cloud Functions

Instead of requiring a PHP script *(and server to keep the script available)*, I created a Firebase Cloud Function to send email from the Hire Me form. This also took less code than the equivalent PHP script. It also has the advantage of connecting into Firebase Firestore to record the data in the cloud in addition to sending the email. Plus, it's NodeJS instead of PHP, and I like JS a bit more than PHP.

## App v2.1

The first version of the MJV App with Svelte, Vite, Routify and MDSVEX used TailwindCSS+PostCSS and took *over 10 minutes to build on my local system!* ***What‽*** ... It seemed crazy to take that long to build 3 pages. To be fair, GitHub would build it in under 2 minutes on production deploy. I still don't know why it was so slow on my local system. I gave up trying to fix it because the Tailwind part adds 20 seconds to startup. Worth it if the dev environment stays snappy but it turns out there's a faster way...

## Enter WindiCSS

While exploring how to improve Tailwind's speed, I came across WindiCSS and there's simply no turning back.

- WindiCSS starts up quickly, *under 2 seconds* no longer over 20 (wow!)
- WindiCSS provides everything I love about TailwindCSS but can "rebuild" in under a second, roughly 10x quicker than using TailwindCSS+PostCSS.
- Configuring WindiCSS was easy, a couple small edits to use Windi's modules for things like typography and colors.

## Starter Template

I'm still figuring out how to brew up my own starter templates and adding WindiCSS can be tricky to those of us new to Rollup; thanks to [reepolee on github](https://github.com/reepolee/) for sharing the starter package [svelte-routify-windi-vite](https://github.com/reepolee/svelte-routify-windi-vite) which was my point of departure for the version 2.1 of [MarkJonesVoice](https://markjonesvoice.com/).