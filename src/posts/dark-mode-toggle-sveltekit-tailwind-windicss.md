---
title: "Dark Mode Toggle for SvelteKit with Tailwind or WindiCSS"
slug: dark-mode-toggle-sveltekit-tailwind-windicss
category: Programming
creationDate: '2021-06-06'
excerpt: How I added a dark mode toggle and headroom fixed header hiding feature to this SvelteKit site.
lead: Dark mode toggle, headroom fixed header hider, back to top
author: Mark Jones
tags:
  - Static Site
  - SvelteKit
  - WindiCSS
  - Dark Mode
---

I prefer dark themes, which is why dark mode is enabled by default on my site. In the future I may add code to catch your preference setting for the initial setting of the dark mode toggle.

## ≠ Minor

From a diff summary comparison `37 files changed, 160 insertions(+), 306 deletions(-)`. It's probably easier if you start with plans for dark mode but adding it involves some analisys:

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

## Toggle adapted from munxar's windicss example

I'm thankful for [munxar's WindiCSS+SvelteKit example](https://github.com/munxar/sveltekit-tailwind). It was critical in helping me migrate to WindiCSS for this site. Awesomely, munxar's example included a svelte way to toggle the dark mode. I updated the styling to be up/down but otherwise, the example gave me critical insight into at least 1 way to include a dark mode toggle.

## 3D Rotation Effect on Blog Cards

When you hover or focus on a blog card, a 3D animation rotates and shows the thumbnail image or title. 

I thought this might help a slow browser or connection feel faster. Upon tapping the card to the blog entry, you hover/focus briefly before navigating to the actual page. But page navigation is so fast that the animation is rarely ever seen when you tap on the entry. *Is it worth adding a delay for touch events to see the animation just before navigationg?* Tell me below.

## Headroom Fixed Header Hider

I like *and loathe* fixed headers. They're great, except when they cover the #target or take up too much space on my not-very-tall laptop screen. There are many ways to adjust this but getting it entirely out of the way seems perfect to me.

Headroom just lets me show the fixed navigation when you scroll up at all, making the assumption that you may want to use the navigation. The Back To Top link borrows the same technique and both will show when you're at the bottom of the page.

What do you think? Do you loathe fixed headers? *Love them?*

## Improvement Recommendations Welcome

If you've got a better way to handle the dark shift, something that's handled better by the tailwind/windi theme, please tell me how I may improve my approach. I feel like there must be a better way to this; inverting most everything (with exclusions) could be much simpler... What do you think? How do you add Dark Mode? Any neat tricks?
