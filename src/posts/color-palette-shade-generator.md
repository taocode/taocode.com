---
title: Color Palette Shade Generator
slug: color-palette-shade-generator
creationDate: '2022-08-11'
published: 2022-08-11T09:20:00Z
category: 'Programming'
excerpt: I created an interactive color shade generating app
lead: Want to create a color palette based on color theory?
layout: blog
author: Mark Jones
site_url: https://color-palette-shade-generator.web.app
thumbnail: /images/programming/color-palette-shade-generator-thumbnail.png
tags:
  - Svelte
  - Tailwind
  - Firebase hosting
---

I wanted an HSL based shade generator but I couldn't just stop there, I incorporate color theory functions to explore accent colors. I proudly present to you: 

[color-palette-shade-generator.web.app](https://color-palette-shade-generator.web.app/)

A Svelte app that let's you explore colors using a few, standard, color theory schemes.

## Lessons Learned

As this was my first from-scratch Svelte project, I learned a few things along the way.

### Converting Colors Between Notation Systems is Imperfect

I started by dynamically storing the Hexadecimal notation of the color, like this: `?color=9132a4`, on the query string (URLParams) but discovered how the hue would drift when converting from and to HSL; hexadecimal or rgb encodings don't generally translate exactly to a hue at 1/10th precision (0.1). 

Since this project is HSL based, I shifted to encoding the color values in the URL so now `?H=240.0&S=75&L=50&A=1.0` allow you to return to the color you've chosen without drift.

### Svelte/Stores Are Cool

While I don't think they were necessary to make this, I use several stores that multiple components interface with. Some components display an updateable variable `<input bind:value>` while others simply display the value or use a function calculate a derived value.

### Debounce URL History

Once I added the Hue slider, it was too easy to exceed the browser's rate limit on the History API usage. I was surprised this didn't come up before when rapidly changing the hue directly (via up or down arrow on the hue directly) but this was easily solved by adding a debounce timer. Now, it is self-limited to 20 changes per second at the max (50ms delay) but it's basically impossible to achieve 20 per second. With this delay, it'll be difficult to exceed 3 per second, well under any limit but quick enough to seem nearly instant.

### Pass Svelte Variables to CSS Variables

Many of the components use the [CSS variables • REPL • Svelte](https://svelte.dev/repl/4b1c649bc75f44eb9142dadc0322eccd?version=3.6.7) technique; it was much easier to calculate a derived color using [color2k](https://color2k.com/) functions in the `<script>` and pass them on to style with the CSS variable.

The tiles behind CPSG in the title, gradient background to the body, and more leverage this. Rather than altering the style tags directly, just override the variable. I expect to find styling information in the CSS, not in the Javascript. It may be more verbose than altering the `style=` attribute directly but I find this easier to conceptualize by keeping the application of styling in the `<style>` area.

## Conclusion

I really enjoyed making this app. Svelte is very fast, starting up quicker than React or Vue, incurring much less overhead for the framework and hot reloads are nearly instant.

I'm gaining greater competence and a greater understanding with each project but this one was especially fun and satisfying to watch the colors change.

I hope other web dev folks *(and maybe more?)* find this a helpful tool; ultimately the output is quite simple and could be abstracted into API