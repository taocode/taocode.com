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

I wanted an HSL based shade generator and thought color theory is a fine way to explore accent colors based on a primary so I proudly present to you: 

[color-palette-shade-generator.web.app](https://color-palette-shade-generator.web.app/)

A Svelte app that let's you explore colors using a few, standard, color theory schemes.

## Lessons Learned

As this was my first from-scratch Svelte project, I learned a few things along the way.

### Converting colors between notation systems is imperfect

I started with a Hexadecimal notation of the color, like `color=9132a4`, on the query string

### Stores are cool

While I don't think they were necessary to make this, I use several fairly simple stores that multiple components interface with.

### Debounce URL History

Once I added the Hue slider, it resulted in an error of too many history calls in a set duration of time.


