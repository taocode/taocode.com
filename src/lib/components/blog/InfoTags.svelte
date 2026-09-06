<script lang="ts">
  import { formatDate, convertToSlug } from '$lib/utils';
  import type { Post } from '$lib/models/post';

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
    showWordCount = true,
  }: Props = $props();
</script>

<span>{formatDate(post.creationDate)}</span>
{#if readTimeText}
  ·
  <span>{post.readingTimeText}</span>
{/if}
{#if showWordCount}
  ·
  <span>{post.wordCount} words</span>
{/if}
{#if !hideCategory}
  <span>
    ·
    <a data-sveltekit-prefetch href="/categories/{convertToSlug(post.category)}"
      >{post.category}
    </a>
  </span>
{/if}

<style lang="postcss">
  @reference "../../../app.css";
  span {
    @apply text-green-750 dark:text-green-200;
  }
</style>
