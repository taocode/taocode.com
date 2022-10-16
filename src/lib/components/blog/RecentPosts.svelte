<script lang="ts">
  import Icon from 'svelte-awesome/components/Icon.svelte';
  import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
  import BlogPostCard from './BlogPostCard.svelte';
  import type { Post } from '$lib/models/post';

  export let posts: Post[];
  const filteredPosts = posts.filter((_post: Post, idx: number) => idx < 3);
</script>

<section class="container mj-container">
  <h2>Recent Posts</h2>

  <div class="recent-posts">
    {#each filteredPosts as post}
      <div class="card-post">
        <BlogPostCard {post} />
      </div>
    {/each}
  </div>

  <a
    data-sveltekit-prefetch
    href="/blog"
    class="inline-flex items-center mt-8 font-bold rounded text-md btn-primary"
  >
    View all blog posts
    <Icon data="{faAngleRight}" class="ml-3" scale="{1.5}" />
  </a>
</section>

<style lang="postcss">
  .card-post {
    @apply flex items-stretch w-full p-2 sm:w-1/2 lg:w-1/3;
    &:nth-child(3) {
      @apply hidden lg:block;
    }
  }
  .recent-posts {
    @apply flex flex-wrap -mx-2;
  }
  section {
    @apply mb-9;
  }
</style>