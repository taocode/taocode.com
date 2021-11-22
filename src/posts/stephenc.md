---
title: Stephen Czaikoski
slug: stephenc
creationDate: '2021-07-07'
published: 2021-07-07T09:20:00Z
category: 'Portfolio'
excerpt: Artist Stephen Czaikoski's virtual online gallery.
lead: Built with Hugo and WidiCSS with Swiper carousel.
layout: blog
author: Mark Jones
thumbnail: /images/portfolio/stephenc-thumbnail.jpg
tags:
  - Hugo
  - WindiCSS
  - Swiper.js
  - Lazy media
  - Firebase hosting
---

Stephen Czaikoski is a talented artist that I've known for my entire life because he's also my cousin. I've always admired his work both in quality and quantity. I'm impressed with his inner drive that moves him down his artistic path and when he asked if I could help him with a website, I was very pleased and wanted to make something special to showcase his art.

## Goals

Show off Stephen's art via

1. Image Gallery
1. Carousel
1. Zoom enabled for detailed views

Using [Hugo's native image processing](https://gohugo.io/content-management/image-processing/) with [WindiCSS](https://windicss.org/) and [Swiper.js](https://swiperjs.com/), I combined them all to provide www.stephenc.art.

## Hugo Image Optimization

One of the biggest pieces to this site is handling the images intelligently, optimally. Hugo has fantastic image processing that I leverage to produce web optimized sizes to improve delivery time and reduce download overhead.

## Firebase Hosting

This static site is delivered via Firebase hosting. The CSS is optimized and the javascript is minimal but one of the speed advantages is using specific caching rules that can make the Hugo-processed, optimized images have a longer caching period, it can improve the loading time of these higher resolution images.

### Caching Rules

These headers rules for Firebase hosting allow visitors to cache Hugo processed images and all CSS/JS as "good forever" by setting the max-age to 1 year *(31540000 seconds max-age)* and adding immutable. What about images that were not processed by Hugo? They cache for 6 hours only *(21600 seconds max-age)*. Everthing else defaults to 15 minutes *(900 seconds max-age)*.

``` json
"headers": [ {
    "key": "Cache-Control",
    "value": "public, max-age=900"
  } ]}, {
  "source": "**/*.@(jpg|jpeg|png|gif|webp)", 
  "headers": [ {
    "key": "Cache-Control",
    "value": "public, max-age=21600"
  } ]}, {
  "source": "**/*_@(resize|fit|fill)_q*.@(jpg|jpeg|png|gif|webp)", 
  "headers": [ {
    "key": "Cache-Control",
    "value": "public, max-age=31540000, immutable"
  } ]}, {
  "source": "**/*.@(css|js)", 
  "headers": [ {
    "key": "Cache-Control",
    "value": "public, max-age=31540000, immutable"
  } ]}
]
```

***But wait‽*** won't that mean nobody ever gets CSS or JS updates? *No,* because these files are "fingerprinted" by Hugo, similar to the images it processes; they really are immutable as no change will happen at that URL. These fingerprinted items will be included via new URLs to produce the next version, if they change.

