---
title: Salem CAE
slug: salem-cae
creationDate: '2021-04-14'
published: 2021-04-14T09:20:00Z
category: 'Portfolio'
excerpt: Salem's Celebration of Academic Excellence Drupal powered micro site
lead: Built with a custom Bulma CSS based theme on Drupal 9
layout: blog
author: Mark Jones
thumbnail: /images/portfolio/salem-cae-thumbnail.jpg
tags:
  - Drupal 9
  - CMS
  - Bulma CSS
  - SASS/SCSS
---
The Celebration of Academic Excellence at Salem College is a tradition that just got a new home online. 

## Goals

1. Collaborative online editing
1. Embed videos of student presentations
1. High resolution images with PDF downloads
1. Organize Student Presentations by Session and Subject
1. Include a commenting system

Using Drupal 9 and Bulma CSS I was able to build the site in just under a week. Not bad but there were a few places I was hoping to "inject" some Bulma CSS classes using Drupal Views and/or Layout Builder but eventually I could only get the layout I wanted by customizing the main site CSS. Starting with Bulma still reduced my development time by providing an exceptional starting point. That being said, producing this site has revealed that I prefer TailwindCSS.

## Other CMS Options

Since many Content Management Systems can provide video and comments/discussions, we explored a few fairly standard options.

### WordPress

WordPress is immensely popular and I use it for some sites, often where the principal consideration is the maintainer's familiarity; if the main stake-holder in the site is already familiar with WordPress and it seems like a good fit for the project I'll use WordPress. It has many plugins and themes and the recent versions have a pretty cool page builder, similar to ConcreteCMS. Drupal's layout builder starts to introduce this to the Drupalverse but I've found Concrete or WordPress a nicer UI.

However, WordPress sites are always being attacked by hackers... always. I get daily alerts about 'admin' user being locked out for failing repeated login attempts. It's immensely helpful to have some kind of security plugin with WordPress to help defend your site. I rarely feel this way about Drupal and is why I almost always prefer a static site.

### Google Sites

Google Sites has been a friendly way to put together fairly simple web sites, especially when collaborating to produce the site as multiple editors can work on the site like a Google Doc.

Unfortunately the lack of 2 critical things -- listing pages and theme customization -- lead us away from Google Sites. You can do limited theme customization with Google Sites that would likely be acceptable style-wise for this site. That you can't list out the projects or tag items made it unappealing... Having to add a Presentation and then a custom preview to mimic listing just seemed like more work and error prone than we wanted.

### Why Drupal?

Partly familiarity (5+ years) but largely because it's a very capable platform; this site is a trivial use-case for what Drupal can provide.

I've previously put in lots of theme work when developing a site on Drupal but this time I explored a few of the most popular themes, settling on Bulma because it generally did a fair job making the basic layout that I could work with. I'd hoped to simply add CSS classes to enhance the layout in a declarative(?) way like TailwindCSS but found that more difficult than simply dropping in some custom CSS... Not very tailwind like but gets the job done. 