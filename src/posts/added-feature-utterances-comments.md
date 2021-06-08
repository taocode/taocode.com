---
title: "Added Feature: Utterances Comments"
slug: added-feature-utterances-comments
category: Programming
creationDate: '2021-06-02'
excerpt: Feel like commenting? Now you can.
lead: After evaluating commenting systems, I figure utterances is nice and would suffice!
layout: blog
author: Mark Jones
tags:
  - Static Site
  - SvelteKit
  - Comments
  - Utterances
---

I wanted a commenting feature for blog posts.

## Why Utterances?

The topics in this blog are generally of interest to other github developers, [utteranc.es](https://utteranc.es) seems a fairly easy choice. It's very easy for other github users to login and comment.

## Adapt Utterances Code to Svelte Component

### Utterances code
``` html
<script src="https://utteranc.es/client.js"
    repo="taocode/taocode.com"
    issue-term="pathname"
    label="✨💬"
    theme="github-dark"
    crossorigin="anonymous"
    async>
</script>
```

### As a Svelte Component

``` html
// CommentsUtterances.svelte
<script>
import { onMount } from 'svelte';
onMount(() => {
    var s = document.createElement('script'),
    tag = document.getElementById('utterances');
    s.setAttribute('repo',"taocode/taocode.com");
    s.setAttribute('issue-term',"pathname");
    s.setAttribute('label',"✨💬");
    s.setAttribute('theme',"github-dark");
    s.setAttribute('crossorigin',"anonymous");
    s.src = 'https://utteranc.es/client.js';
    tag.parentNode.insertBefore(s, tag);
});
</script>
<div id="utterances"></div>
```


## What do you think?

Now you can tell me! Scroll passed the `share widget` and give me clue! *Or better,* use the `share widget` *and add a comment below*.