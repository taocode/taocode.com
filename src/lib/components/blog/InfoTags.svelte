<script lang="ts">
  import readingTime from 'reading-time'
  import { formatDate, convertToSlug } from '$lib/utils'
  import type { Post } from '$lib/models/post'

  export let post: Post
  let { category } = post
  $: timeToRead = readingTime(post.body)['text']
  $: ({ category } = post)
</script>

<span class="text-green-750 dark:text-green-200">{formatDate(post.datePublished)}</span>
&middot;
<span class="text-green-750 dark:text-green-200">{timeToRead}</span>
{#if category}
<span>
&middot;
<a data-sveltekit-prefetch href="/categories/{convertToSlug(category)}"
  >{category}
</a>
</span>
{/if}
