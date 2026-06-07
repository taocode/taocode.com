<script lang="ts">
  import { page } from '$app/state';
  import InfoTags from './InfoTags.svelte';

  const popularPosts = $derived((page.data.posts ?? []).filter((_post, idx) => idx < 3));
</script>

<div class="mb-16 font-display">
  <header class="topic-box">
    <h2>Popular Articles</h2>
  </header>

  {#each popularPosts as post}
    <div class="py-4 border-b border-gray-600">
      <InfoTags {post} />
      <br />
      <a data-sveltekit-prefetch href="/blog/{post.slug}" class="text-gray-800">{post.title}</a>
    </div>
  {/each}
</div>
