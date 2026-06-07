<script lang="ts">
  import Icon from '@iconify/svelte';
  import { page } from '$app/state';
  import type { Post } from '$lib/models/post';

  interface Props {
    post: Post;
  }

  let { post }: Props = $props();

  const fullURL = `https://www.taocode.com${page.url.pathname}`;
  const encodedURL = encodeURIComponent(fullURL);
  const encodedPostTitle = encodeURIComponent(post.title);
  const encodedPostExcerpt = encodeURIComponent(post.excerpt);
</script>

<div class="share-buttons">
  <a
    aria-label="Share on Facebook"
    href="https://www.facebook.com/sharer/sharer.php?u={encodedURL}"
    target="_blank"
    rel="noopener noreferrer"
    class="share-btn"
    title="Share on Facebook">
    <Icon icon="fa6-brands:facebook" />
  </a>
  <a
    aria-label="Share on LinkedIn"
    href="https://www.linkedin.com/shareArticle?mini=true&url={encodedURL}&title={encodedPostTitle}&summary={encodedPostExcerpt}&source=LinkedIn"
    target="_blank"
    rel="noopener noreferrer"
    class="share-btn"
    title="Share on LinkedIn">
    <Icon icon="fa6-brands:linkedin" />
  </a>
  <a
    aria-label="Share on Twitter"
    href="https://twitter.com/intent/tweet?text={encodedPostTitle}&url={encodedURL}"
    target="_blank"
    rel="noopener noreferrer"
    class="share-btn"
    title="Share on Twitter">
    <Icon icon="fa6-brands:twitter" />
  </a>
  <a
    aria-label="Share on Reddit"
    href="https://www.reddit.com/submit?url={encodedURL}&title={encodedPostTitle}"
    target="_blank"
    rel="noopener noreferrer"
    class="share-btn"
    title="Share on Reddit">
    <Icon icon="fa6-brands:reddit" />
  </a>
  <a
    aria-label="Share on Pinterest"
    href="https://pinterest.com/pin/create/button/?url={encodedURL}"
    target="_blank"
    rel="noopener noreferrer"
    class="share-btn"
    title="Share on Pinterest">
    <Icon icon="fa6-brands:pinterest" />
  </a>
</div>

<style lang="postcss">
  @reference "../../app.css";
  .share-buttons {
    @apply flex w-full justify-evenly gap-[0.75em] text-[1.5em];
  }
  .share-btn {
    @apply inline-flex text-green-900 hover:text-green-800;
  }
</style>
