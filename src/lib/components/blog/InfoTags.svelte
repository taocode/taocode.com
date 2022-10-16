<script lang="ts">
  import { formatDate, convertToSlug } from '$lib/utils'
  import type { Post } from '$lib/models/post'

  export let post: Post
  export let hideCategory = false
  export let readTimeText = true
  export let showWordCount = true
</script>

<span class="text-green-750 dark:text-green-200">{formatDate(post.creationDate)}</span>
{#if readTimeText}
&middot;
<span class="text-green-750 dark:text-green-200">{post.readingTimeText}</span>
{/if}
{#if showWordCount}
&middot;
<span class="text-green-750 dark:text-green-200">{post.wordCount} words</span>
{/if}
{#if !hideCategory}
<span class="text-green-750 dark:text-green-200">
&middot;
<a data-sveltekit-prefetch href="/categories/{convertToSlug(post.category)}"
  >{post.category}
</a>
</span>
{/if}

<style lang="postcss">
</style>
