---
title: 'Svelte Headroom - My First NPM Package!'
slug: 'svelte-headroom-my-first-npm-package'
creationDate: '2022-11-19'
category: 'Programming'
excerpt: 'Automatically hide your header and footer when not needed!'
lead: Although it's called *Svelte Headroom*, I use this package nearly twice as often to add a "to top" button to my footer!
site_url: https://github.com/taocode/svelte-headroom
thumbnail: /images/programming/hide-header-footer.png
tags:
  - UI
  - Library
  - Svelte
  - Package
---

Have you ever muttered under your breath at the stupid website whose fixed header takes up WAY TOO MUCH SPACE!? _I have._

## Hide that _S#*t!_

The act of scrolling down a page is an indication that you're interested in the content, so why not make that easier for the visitor by hiding distractions?

I feel like the site cares about my experience when a fixed header gets out of the way; I feel like leaving the site if the fixed header, usually a top menu navigation, covers too much of the page.

## Used on This Site

You can see this package used right here, on this site's header and `^` (To Top) button in the footer. I've been using my own custom derivative of [collardeau/svelte-headroom](https://github.com/collardeau/svelte-headroom) on a few sites for a while but each project had its own copy, you know, _the wrong way to re-use code_.

## Public Package

I've released this as a public NPM package to make it much easier to use in other projects. I hope you may also find it helpful if you're looking for a solution to automatically show or hide headers or footers in your Svelte project!

### About SvelteKit Packaging

Although I've used many packages from NPM, I'd not yet made any attempt to publish my own. It's not really difficult but I couldn't find a way to publish an updated version directly from the code I forked from [Thomas Collardeau](https://github.com/collardeau) because the package production in SvelteKit changed since [Thomas's code](https://github.com/collardeau/svelte-headroom) was released with related version updates to Svelte and the introduction of SvelteKit.

I read [SvelteKit Packaging](https://kit.svelte.dev/docs/packaging) to learn the current advised way of creating a package for Svelte. Basically, put your component in the `$lib` folder and use `/src/routes/+page.svelte` to develop. ___Brilliant!___

The command `svelte-package` spits out the package to the `./package/` folder and that can be published to NPM, Github packages or otherwise.

### Challenges I Encountered Publishing to NPM

First, it's not really difficult at all to publish a package to NPM. It takes zero certification or approval. Aces. But, given that I have not previously published a package to NPM, my unfamiliarity contributed to the challenges I stumbled through.

#### NPM Package Missing Files

I inspected the package and discovered that I needed to make some adjustments to the `"files"` array in my `package.json`. I needed to add `"headroom"` for NPM to include the folder with the code in `$lib`. My first few publications failed to import `headroom/index.svelte` because that folder wasn't specified so it wasn't included in the package.

### Tagging and Release Version

I didn't want to manage versioning (version number, changelog, release notes) by hand so I decided to use  [Semantic Release](https://semantic-release.gitbook.io/semantic-release/) to manage versioning for me.

### Conventional Commit 

I've been using [Conventional Commit message format](https://www.conventionalcommits.org/en/v1.0.0/) for a few years. I've used git for much longer but my projects haven't often had multiple contributors so it been a discipline that I started to adopt looking towards the future with tooling such as Semantic Release and greater ease of collaboration.

The message format makes sense to me and I really like that automation can manage versions, changelogs and all so I don't have to remember.

### Package Uses Semantic Release via GitHub Actions for Versioning

I've been familiar with GitHub Actions for automated build and deploy of [Hugo](https://gohugo.io/) sites and figured I could sort out the details to publish this Svelte package.

After adding the NPM_TOKEN secret to the GitHub repository, I found that I only needed to add `working-directory: package` to the `Release` step (`run: npx semantic-release`) after the `npm install` and `npm run build` commands. See [release.yml](https://github.com/taocode/svelte-headroom/blob/master/.github/workflows/release.yml) for the workflow that worked for me.

## README Maintenance Woes

Once I had all of that automated build plumbing established, I was trying to maintain 2 README files, separately. This sucked. I simply couldn't get them to stay in-sync.

### Dev Uses Same README Via mdsvex and Vite Import

Similar to how this blog works, I reduced my README to 1 file by using [mdsvex](https://mdsvex.pngwn.io/) and [vite import](https://vitejs.dev/guide/features.html) to use the contents of the README in the `src/routes/+page.svelte`.

This started in the root of the repository (/README.md), which also becomes the package README, but it looked bad on GitHub and NPM because I used extended markdown for heading IDs: `### This Heading {#heading-id}`.

Using `replaceAll(/ \{#.*\}/g,'')` on the /src/_README.md (the new master readme) handily cleans out the extend syntax on the headings. This runs on every `npm run build`, keeping it in-sync.

