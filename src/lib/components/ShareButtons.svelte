<script lang="ts">
  import { page } from '$app/stores';
  import type { Post } from '$lib/models/post';

  export let post: Post;

  const fullURL = `https://www.taocode.com${$page.url.pathname}`;
  const encodedURL = encodeURIComponent(fullURL);
  const encodedPostTitle = encodeURIComponent(post.title);
  const encodedPostExcerpt = encodeURIComponent(post.excerpt);

</script>

<div class="share-buttons">
  <a
    href="https://www.facebook.com/sharer/sharer.php?u={encodedURL}"
    target="_blank"
    rel="noopener noreferrer"
    class="share-btn"
    title="Share on Facebook"
  >
    <div class="i-fa6-brands-facebook"></div>
  </a>
  <a
    href="https://www.linkedin.com/shareArticle?mini=true&url={encodedURL}&title={encodedPostTitle}&summary={encodedPostExcerpt}&source=LinkedIn"
    target="_blank"
    rel="noopener noreferrer"
    class="share-btn"
    title="Share on LinkedIn"
  >
    <div class="i-fa6-brands-linkedin"></div>
  </a>
  <a
    href="https://twitter.com/intent/tweet?text={encodedPostTitle}&url={encodedURL}"
    target="_blank"
    rel="noopener noreferrer"
    class="share-btn"
    title="Share on Twitter"
  >
    <div class="i-fa6-brands-twitter"></div>
  </a>
  <a
    href="https://www.reddit.com/submit?url={encodedURL}&title={encodedPostTitle}"
    target="_blank"
    rel="noopener noreferrer"
    class="share-btn"
    title="Share on Reddit"
  >
    <div class="i-fa6-brands-reddit"></div>
    </a>
  <a
    href="https://pinterest.com/pin/create/button/?url={encodedURL}"
    target="_blank"
    rel="noopener noreferrer"
    class="share-btn"
    title="Share on Pinterest"
  >
    <div class="i-fa6-brands-pinterest"></div>
  </a>
</div>
<style lang="postcss">
  .share-buttons {
    @apply text-[1.5em] flex gap-3 w-full justify-evenly;
  }
  .share-btn {
    @apply inline-flex text-green-700 hover:text-green-800;
  }
</style>