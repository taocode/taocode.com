---
title: Stephen Czaikoski
slug: stephenc
creationDate: '2021-07-07'
published: 2021-07-07T09:20:00Z
category: 'Portfolio'
excerpt: Artist Stephen Czaikoski's virtual online gallery.
lead: Built with Hugo and WidiCSS with Swiper carousel.
site_url: https://StephenC.art
layout: blog
author: Mark Jones
thumbnail: /images/portfolio/stephenc-thumbnail.jpg
tags:
  - Hugo
  - WindiCSS
  - Swiper.js
  - LazyLoad
  - Firebase hosting
---

Stephen Czaikoski is a talented artist that I've known for my entire life because he's also my cousin. I've admired his work both in quality and quantity and am impressed with his inner drive that moves him down his artistic path. When he asked if I could help him with a website, I was very pleased and wanted to make something special to showcase his art.

## Goals

Show off Stephen's art via

1. Image Gallery
1. Carousel
1. Zoom enabled for detailed views

Using [Hugo's native image processing](https://gohugo.io/content-management/image-processing/) with [WindiCSS](https://windicss.org/) and [Swiper](https://swiperjs.com/), I combined them all to provide www.stephenc.art.

## Hugo Image Optimization

One of the biggest pieces to this site is handling the images intelligently, optimally. Hugo has fantastic image processing that I leverage to produce web optimized sizes to improve delivery time and reduce download overhead.

## Firebase Hosting

This static site is delivered very cheaply (free with current traffic) via Firebase hosting. The CSS is optimized and the javascript is minimal but one of the speed advantages is leveraging browser caching by providing [optimized caching rules](/blog/optimize-firebase-hosting-cache-rules) that can make the Hugo-processed, optimized images have a longer caching period; the cache headers allow the browser to not even bother to check for updates on items that won't change like fingerprinted CSS, JS and optimized images.

## LazyLoad Media

The site also uses [Vanilla Lazyload](https://www.andreaverlicchi.eu/vanilla-lazyload/) to lazyload the images. This resulted in some cross behavior with swiper, especially when attempting to use swiper's lazy load in addition to vanilla. I ended up stick with vanilla-lazyload and excluding swiper's lazyload; they seem to get along now and I get to use lazyload for non-swiper images as well, so win-win.

## Swiper for Carousels

[Swiper](https://swiperjs.com/) is awesome. This is my first use and it's so much better than my own custom carousels. I didn't want to have to learn the details on handling the swipe and why should I? Swiper solves this problem with far more options that I could've produced. Kudos to the swiper team.