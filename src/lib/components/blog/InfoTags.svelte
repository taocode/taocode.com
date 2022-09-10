<script lang="ts">
  import readingTime from 'reading-time'
  import { formatDate, convertToSlug } from '$lib/utils'
  import type { Post } from '$lib/models/post'

  export let post: Post;
  export let hide_category = false;
  $: timeToRead = readingTime(post.body)['text']
</script>
<style>
  .hide_category {
    display: none;
  }
</style>

<span class="text-green-750 dark:text-green-200">{formatDate(post.datePublished)}</span>
&middot;
<span class="text-green-750 dark:text-green-200">{timeToRead}</span>
<span class:hide_category>
&middot;
<a data-sveltekit-prefetch href="/categories/{convertToSlug(post.category)}"
  >{post.category}
</a>
</span>
