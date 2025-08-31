<script lang="ts">
  import { formatDate, convertToSlug } from '$lib/utils'
  import type { Post } from '$lib/models/post'

  interface Props {
    post: Post;
    hideCategory?: boolean;
    readTimeText?: boolean;
    showWordCount?: boolean;
  }

  let {
    post,
    hideCategory = false,
    readTimeText = true,
    showWordCount = true
  }: Props = $props();
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
