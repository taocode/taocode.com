---
title: Color Palette Shade Generator
slug: color-palette-shade-generator
dateCreated: '2022-08-29T09:20:00Z'
datePublished: '2022-08-29T09:20:00Z'
# datePublished: '2021-04-05T15:38:49.000+0100'
dateUpdated: '2022-08-29T10:17:52.00Z'
category: 'Programming'
excerpt: I created an interactive color shade generating app with Svelte
lead: Want to create a color palette based on color theory?
layout: blog
author: Mark Jones
siteUrl: https://color-palette-shade-generator.web.app
tags:
  - Svelte
  - Tailwind
  - Firebase hosting
focusKeyphrase: 'folding camera best kept secret'
seoMetaDescription: 'Folding cameras have the benefits of high resolution negatives but are so much more compact and often have amazing optics'
featuredImage: 'color-palette-shade-generator-thumbnail.png'
featuredImageAlt: 'Color Palette Shade Generator thumbnail'
ogImage: 'folding-camera-open-graph.jpg'
ogSquareImage: 'folding-camera-open-graph-square.jpg'
twitterImage: 'folding-camera-twitter.jpg'
categories: ''
---

I wanted an HSL based shade generator but *I couldn't just stop there,* I incorporate color theory functions to explore accent colors. Check out: [color-palette-shade-generator.web.app](https://color-palette-shade-generator.web.app/).

A Svelte(+Kit) App that to explore color schemes based on 1 color and color theory schemes: *Monochromatic, Dark/Light, Complementary, Analogous, Split Complementary, Triadic, and Tetradic.*

## Lessons Learned

This was a great project for depening my Svelte knowledge. I have more to learn but here's a few areas of knowledge that improved the code.

### Converting Colors Between Notation Systems is Imperfect

I started by dynamically storing the Hexadecimal notation of the color, like this: `?color=9132a4`, on the query string (URLParams) but discovered how the hue would drift when converting from and to HSL; hexadecimal or rgb encodings don't often translate exactly to a hue at 1/10th precision (0.1). 

Since this project is HSL based, I shifted to encoding the color values in the URL so now `?H=240.0&S=75&L=50&A=1` allow you to return to the color you've chosen without drift.

### Svelte/Stores Are Cool

While I don't think they were necessary to make this, I use several stores that multiple components interface with. Some components display an updateable variable `<input bind:value={$store}>` while others simply display the value or use a function to calculate a derived value.

Stores made sense to me working on this; rather than sending a value to a component as an attribute and subscribing to a change that component might make, have both places refer to the store and work with it directly.

Examples of stores I use on this project: `hue`, `saturation`, `lightness`, `aplha`, etc... with the HSLA as individual stores I can derive a $color store via `derived([hue,saturation,lightness,alpha], ([$H,$S,$L,$A],set)...`. Unlocking [derived stores](https://svelte.dev/docs#run-time-svelte-store-derived) felt like a win and helped to simplify and unify the code.

In my next update to the code that makes this blog, I plan to use a store for blog posts to provide a better editing experience. Currently post edits do not show up interactively under `dev`, unlike every other edit. I anabashedly forked this from Markus Hatvan's code *(which he's pulled/privatized)* and now I have some additional improvements I'd like to make.

### Debounce URL History

Once I added the Hue slider, it was too easy to exceed the browser's rate limit on the History API usage. I was surprised this didn't come up before when rapidly changing the hue directly (via up or down arrow on the `<input bind:value={$hue}>` directly) but this was easily solved by adding a debounce timer. Now, it is self-limited to 20 changes per second at the max (50ms delay) but it's basically impossible to achieve 20 per second. With this delay, it'll be difficult to exceed 3 per second, well under any limit but quick enough to seem nearly instant.

### Pass Svelte Variables to CSS Variables

Many of the components use the [CSS variables • REPL • Svelte](https://svelte.dev/repl/4b1c649bc75f44eb9142dadc0322eccd?version=3.6.7) technique; it was much easier to calculate a derived color using [color2k](https://color2k.com/) functions in the `<script>` and pass them on to style with the CSS variable.

The tiles behind CPSG in the title, gradient background to the body, and more leverage this. Rather than altering the style tags directly, just override the variable. I expect to find styling information in the CSS, not in the Javascript. It may be more verbose than altering the `style=` attribute directly but I find this easier to conceptualize by keeping the application of styling in the `<style>` area.

## Conclusion

I really enjoyed making this app. Svelte is very fast, starting up quicker than React or Vue, incurring much less overhead for the framework and hot reloads are almost always instant.

I'm gaining greater competence and a greater understanding with each project but this one was especially fun and satisfying to watch the colors change.

I hope other web dev folks *(and maybe more?)* find this a helpful tool; ultimately the output is quite simple and could be abstracted into API which would mostly just be an export of my `$lib` functions.

Let me know what you think, leave a comment or send a message any way you like!