---
title: Optimize Firebase Hosting Caching Rules
slug: optimum-firebase-hosting-caching-rules
creationDate: '2021-09-01'
published: 2021-09-01T09:20:00Z
category: 'Programming'
excerpt: A quick look at rules I use to improve caching on Firebase hosting.
lead: How to improve website caching rules with Firebase hosting
layout: blog
author: Mark Jones
thumbnail: /images/programming/firebase-cache-smarter.png
tags:
  - Optimizations
  - Firebase hosting
---

Firebase hosting is really quite amazing. I've generally found it to be faster than netlify, often by a couple hundred milliseconds or more. To win at the web, you often need to do those extra things that help improve the site experience. From optimized images to caching rules, all the pieces have their place.

Add these or your own cache control headers to `firebase.json` in your Firebase project.

## General Rules for Firebase Hosting

These headers translate to: *cache images for 6 hours* and *everything else for 15 minutes*. Very basic but a helpful starting point; obiously override max-age as appropriate for your project.

``` json
"headers": [ {
    "key": "Cache-Control",
    "value": "public, max-age=900"
  } ]}, {
  "source": "**/*.@(jpg|jpeg|png|gif|webp)", 
  "headers": [ {
    "key": "Cache-Control",
    "value": "public, max-age=21600"
  } ]}
]
```

## Caching Rules for Hugo site on Firebase hosting

Extending the rules to the basic cache control above, these rules for Firebase hosting allow visitors to cache Hugo processed images and all CSS/JS as "good forever" by setting the max-age to 1 year *(31540000 seconds max-age)* and adding immutable. What about images that were not processed by Hugo? They cache for 6 hours only *(21600 seconds max-age)*. Everthing else defaults to 15 minutes *(900 seconds max-age)*.

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

