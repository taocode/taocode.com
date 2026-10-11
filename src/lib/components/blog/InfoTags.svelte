<script lang="ts">
  import Icon from '@iconify/svelte';
  import Glasses from '@iconify-svelte/iconoir/glasses';
  import { formatDate, convertToSlug } from '#lib/utils.js';
  import type { Post } from '#lib/models/post.js';

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

<span class="info">{formatDate(post.creationDate)}</span>
{#if readTimeText || showWordCount}
  <span class="info">
    <span class="meta-chip">
      {#if readTimeText}
        <span>
          <span class="sr-only">{post.readingTimeText}</span>
          <span aria-hidden="true">
            {post.readingTimeText.replace(/ min read$/, 'm')}
            <Glasses class="meta-icon" />
          </span>
        </span>
      {/if}
      {#if readTimeText && showWordCount}
        <span class="meta-sep" aria-hidden="true"></span>
      {/if}
      {#if showWordCount}
        <span>
          <span class="sr-only">{post.wordCount} words</span>
          <span aria-hidden="true">
            {post.wordCount}
            <Icon icon="carbon:string-text" class="meta-icon" />
          </span>
        </span>
      {/if}
    </span>
  </span>
{/if}
{#if !hideCategory}
  <span class="info">
    <a data-sveltekit-prefetch href="/categories/{convertToSlug(post.category)}">
      {post.category}
    </a>
  </span>
{/if}

<style lang="postcss">
  @reference "../../../app.css";
  .info {
    @apply text-green-750 whitespace-nowrap dark:text-green-200;
  }
  .info + .info {
    margin-inline-start: 0.55em;
  }
  .meta-chip {
    display: inline-flex;
    align-items: center;
    gap: 0.4em;
    line-height: 1;
    padding: 0 0.5em;
    border-radius: 0.55em;
    background: color-mix(in srgb, currentColor 16%, transparent);
    vertical-align: -0.05em;
  }
  .meta-sep {
    width: 1px;
    height: 0.9em;
    background: currentColor;
    opacity: 0.45;
  }
  :global(.meta-icon) {
    display: inline-block;
    width: 1.15em;
    height: 1.15em;
    margin-inline-start: 0.15em;
    vertical-align: -0.2em;
  }
</style>
