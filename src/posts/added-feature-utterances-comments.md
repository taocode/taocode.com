---
title: "Added Feature: Utterances Comments"
slug: added-feature-utterances-comments
category: Programming
creationDate: '2021-06-02'
excerpt: Feel like commenting? Now you can.
lead: After evaluating a handful of commenting systems, Utterances likely provides the least friction for most developers.
author: Mark Jones
tags:
  - Static Site
  - SvelteKit
  - Comments
  - Utterances
---

I wanted a commenting feature for blog posts. Utterances is utterly simple and very easy to integrate.

## Other Commenting Systems Evaluated

I found (Uzay-G's article on dev.to about commenting systems for static sites)[https://dev.to/uzayg/how-to-add-comments-to-your-static-site-31od] helpful. I also considered:

- Disqus
- staticman
- commento

## References

- https://averagelinuxuser.com/static-website-commenting/

## Why Utterances?

The topics in this blog are generally of interest to other github developers, [utteranc.es](https://utteranc.es) seems a fairly easy choice. It's very easy for other github users to login and comment.

## Adapt Utterances Code to Svelte Component

### Utterances code
``` html
<script src="https://utteranc.es/client.js"
    repo="[user/repo]"
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
    const darkMode = ! matchMedia('(prefers-color-scheme: light)').matches
    const s = document.createElement('script')
    const tag = document.getElementById('utterances')
    s.setAttribute('repo',"[user/repo]")
    s.setAttribute('issue-term',"pathname")
    s.setAttribute('label',"✨💬")
    s.setAttribute('theme',"github-"+(darkMode)?"dark":"light")
    s.setAttribute('crossorigin',"anonymous")
    s.src = 'https://utteranc.es/client.js'
    tag.parentNode.insertBefore(s, tag)
});
</script>
<div id="utterances"></div>
```

The darkMode `window.matchMedia()` could be applied to the Utterances code but this is how I adapted the vanilla js utterances code.

## What do you think?

Now you can tell me! Scroll passed the `share widget` and give me clue! *Or better,* use the `share widget` *and add a comment below*.