<script lang="ts">
  import Icon from '@iconify/svelte';
  import BlogPostCard from './BlogPostCard.svelte';
  import type { Post } from '$lib/models/post';

  interface Props {
    posts: Post[];
  }

  let { posts }: Props = $props();
  const filteredPosts = $derived(
    posts.filter((_post: Post, idx: number) => idx < 3),
  );
</script>

<section class="container mj-container">
  <h2>Recent Posts</h2>

  <div class="recent-posts">
    {#each filteredPosts as post (post.slug)}
      <div class="card-post">
        <BlogPostCard {post} />
      </div>
    {/each}
  </div>

  <a
    data-sveltekit-prefetch
    href="/blog"
    class="btn btn-lg preset-filled-primary inline-flex items-center mt-8 font-bold rounded">
    View all blog posts
    <Icon icon="feather:chevron-right" />
  </a>
</section>

<style lang="postcss">
  @reference "../../../app.css";
  .card-post {
    @apply flex w-full items-stretch p-2 sm:w-1/2 lg:w-1/3;
    &:nth-child(3) {
      @apply hidden lg:block;
    }
  }
  .recent-posts {
    @apply -mx-2 flex flex-wrap;
  }
  section {
    @apply mb-9;
  }
</style>
