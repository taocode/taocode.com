---
title: "Dark Mode Toggle for SvelteKit with Tailwind or WindiCSS"
slug: dark-mode-toggle-sveltekit-tailwind-windicss
category: Programming
creationDate: '2021-06-06'
excerpt: How I added a dark mode toggle and headroom fixed header hiding feature to this SvelteKit site.
lead: How I added dark mode toggle, headroom fixed header hider, and back to top features; dark mode honor's your system preference.
author: Mark Jones
tags:
  - Dark Mode
  - WindiCSS
  - SvelteKit
  - Static Site
---

My dark mode toggle honors your system preferences: if your system theme preference is light, you may notice a dark-to-light switch on first load as I enabled it by default, since dark mode is my preference, and then switch to your preference.

## ≠ Minor Upgrade

From a diff summary comparison `37 files changed, 160 insertions(+), 306 deletions(-)`. This included a few other updates but the majority was dark mode edits. It's probably easier if you start with plans for dark mode but adding it involves some analisys:

**Just add *dark:(bg-color text-color)* or abstract a common CSS class?** The answer varies.

## Additional color abstractions

An additional color abstraction can be helpful; the color 'text-gray' can become an easy inversion; dark (text-gray-700) for the light theme and light (text-gray-400) for the dark theme.

### WindiCSS Example

``` js
// windi.config.js
theme: {
  colors: {
    gray: {
      DEFAULT: '#4a5568', // gray-700
      light: '#cbd5e0', // gray-400
      100: '#f1f2f5',
      ...,
      400: '#cbd5e0',
      ...,
      700: '#4a5568',
      800: '#2d3748',
      900: '#1a202c',
    }
  }
}
```

### Global CSS Dark Inversion for Color Abstractions

``` css
/* global.css */
.dark .bg-gray {
  @apply bg-gray-700;
}
.dark .text-gray {
  @apply text-gray-400;
}
.dark .bg-gray-light {
  @apply bg-gray-800;
}
.dark .text-gray-light {
  @apply text-gray-700;
}
```

## Consider Nightwind for TailwindCSS

[JJRanalli](https://github.com/jjranalli) came up with a clever solution inverting your colors called [Nightwind](https://nightwindcss.com/). Seems pretty cool and includes honoring your system preference and *even though it defaults to light,* I won't hold that against it. Maybe WindiCSS will get something like that too.

## Toggle adapted from munxar's windicss example

I'm thankful for [munxar's WindiCSS+SvelteKit example](https://github.com/munxar/sveltekit-tailwind). It was critical in helping me migrate to WindiCSS for this site. Awesomely, munxar's example included a Svelte way to toggle the dark mode. I updated the styling to be up/down but otherwise, the example gave me critical insight into including a dark mode toggle.

### Preferred Color Scheme Default

By using `window.matchMedia('(prefers-color-scheme: ...)').matches` I can honor your preference. Using the code below, it ultimately defaults to dark but adjusts on first loading and upon changing your system's setting.

``` js
let dark = true
const updateSystemPreferenceDarkTheme = () => {
  dark = ! matchMedia('(prefers-color-scheme: light)').matches
}
onMount(() => {
  updateSystemPreferenceDarkTheme();
  matchMedia('(prefers-color-scheme: light)')
    .addEventListener("change",updateSystemPreferenceDarkTheme)
});

```

## 3D Rotation Effect on Blog Cards

When you hover or focus on a blog card, a 3D animation rotates and shows the thumbnail image or title. 

I thought this might help a slow browser or connection feel faster. Upon tapping the card to the blog entry, you hover/focus briefly before navigating to the actual page. But page navigation is so fast that the animation is rarely ever seen when you tap on the entry. *Is it worth adding a delay for touch events to see the animation just before navigationg?* Tell me below.

## Fixed Header Hider

I like *and loathe* fixed headers. They're great, except when they cover the #target or take up too much space on my not-very-tall laptop screen. There are many ways to adjust this but getting it entirely out of the way seems perfect to me.

[Headroom.js](https://wicky.nillia.ms/headroom.js/) allows one to show the fixed navigation when you scroll up, making the assumption that you may want to use the navigation. The Back To Top button on this site borrows the same technique and both will show when you're at the bottom of the page. I adapted [svelte-headroom](https://github.com/collardeau/svelte-headroom) to include options for pinning to the bottom *for Back To Top*, show and hide at top and bottom, similar to `headroom.js`.

What do you think? Do you loathe fixed headers? *Love them?*

## Improvement Recommendations Welcome

If you've got a better way to handle the dark mode toggle, something that's more intelligently integrated with the tailwind/windi theme, please share. I feel like there must be a better way to this; inverting most everything (with exclusions) could be much simpler... What do you think? How do you add Dark Mode? Any neat tricks?

