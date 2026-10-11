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
    /** Darker meta text for the frosted post header. */
    highContrast?: boolean;
  }

  let {
    post,
    hideCategory = false,
    readTimeText = true,
    showWordCount = true,
    highContrast = false,
  }: Props = $props();
</script>

<div class={['info-row', highContrast && 'high-contrast']}>
  <span class="info">{formatDate(post.creationDate)}</span>
  {#if readTimeText}
    <span class="info meta-chip">
      {post.readingTimeText.replace(/ min read$/, 'm')}
      <Glasses class="meta-icon" role="img" aria-label="read time" />
    </span>
  {/if}
  {#if showWordCount}
    <span class="info meta-chip">
      {post.wordCount}
      <Icon
        icon="carbon:string-text"
        class="meta-icon"
        aria-hidden="false"
        role="img"
        aria-label="words" />
    </span>
  {/if}
  {#if !hideCategory}
    <span class="info">
      <a
        data-sveltekit-prefetch
        class={{ 'header-meta': highContrast }}
        href="/categories/{convertToSlug(post.category)}">{post.category}</a>
    </span>
  {/if}
</div>

<style lang="postcss">
  @reference "../../../app.css";
  .info-row {
    @apply inline-flex max-w-full flex-wrap items-center gap-3;
  }
  .info {
    @apply whitespace-nowrap text-green-750 dark:text-green-200;
  }
  .info-row.high-contrast .info {
    @apply text-green-950 dark:text-green-200;
  }
  .meta-chip {
    display: inline-flex;
    align-items: center;
    line-height: 1;
    padding: 0.125em 0.5em;
    border-radius: 0.4em;
    background: color-mix(in srgb, currentColor 16%, transparent);
  }
  :global(.meta-icon) {
    display: inline-block;
    width: 1.15em;
    height: 1.15em;
    margin-inline-start: 0.15em;
    vertical-align: -0.2em;
  }
</style>
