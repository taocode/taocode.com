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

I wanted a commenting feature for blog posts to make it feel more bloggy. Utterances is utterly simple and very easy to integrate to a project already on GitHub or .

## Other Commenting Systems Evaluated

I found [Uzay-G's article on dev.to about commenting systems for static sites](https://dev.to/uzayg/how-to-add-comments-to-your-static-site-31od) helpful. I also considered:

- Disqus
- staticman
- commento

While staticman appeals to the freegan in me, the set up requires more than Utterances. Given the low volume of visitors to my fledgling site, this is more of a step to be inviting for feedback from y'all.

## References

- https://averagelinuxuser.com/static-website-commenting/

## Why Utterances?

The topics in this blog are generally of interest to other developers *likely on GitHub*, [utteranc.es](https://utteranc.es) just makes that super easy.

## Adapt Utterances Code to Svelte Component

### Utterances code
``` html
<script src="https://utteranc.es/client.js"
    repo="[user/repo]"
    issue-term="pathname"
    label="✨💬"
    theme="preferred-color-scheme"
    crossorigin="anonymous"
    async>
</script>
```

### As a Svelte Component

``` html
// $lib/CommentsUtterances.svelte
<script>
import { onMount } from 'svelte';
onMount(() => {
    const s = document.createElement('script')
    const tag = document.getElementById('utterances')
    s.setAttribute('repo',"[user/repo]")
    s.setAttribute('issue-term',"pathname")
    s.setAttribute('label',"✨💬")
    s.setAttribute('theme',"preferred-color-scheme")
    s.setAttribute('crossorigin',"anonymous")
    s.src = 'https://utteranc.es/client.js'
    tag.parentNode.insertBefore(s, tag)
});
</script>
<div id="utterances"></div>
```

`theme="preferred-color-scheme"` magically observes your system preference. 

## What do you think?

Now you can tell me! Scroll passed the `share widget` and give me clue! *Or better,* use the `share widget` *and add a comment below*.