<script lang="ts">
  import { page } from '$app/state';
  import BlogPostCard from './BlogPostCard.svelte';
  import type { Post } from '#lib/models/post.js';

  interface Props {
    posts?: Post[];
    filteredByCategory?: boolean;
    filteredByTag?: boolean;
  }

  let {
    posts,
    filteredByCategory = false,
    filteredByTag = false,
  }: Props = $props();

  const sourcePosts = $derived(posts ?? page.data.posts ?? []);

  const uniqueCategories = $derived(
    sourcePosts
      .map((post: Post) => post.category)
      .filter(
        (category: string, idx: number, arr: string[]) =>
          arr.indexOf(category) === idx,
      ),
  );

  const uniqueTags = $derived(
    sourcePosts
      .flatMap((post: Post) => post.tags ?? [])
      .filter(
        (tag: string, idx: number, arr: string[]) => arr.indexOf(tag) === idx,
      ),
  );

  let textSearch = $state('');
  let categorySearch = $state('');
  let tagSearch = $state('');

  const filteredPosts = $derived(
    sourcePosts
      .filter((post: Post) =>
        post.title.toLowerCase().includes(textSearch.toLowerCase()),
      )
      .filter(
        (post: Post) =>
          !categorySearch || post.category.includes(categorySearch),
      )
      .filter((post: Post) => !tagSearch || post.tags.includes(tagSearch)),
  );
</script>

<div class="w-full lg:w-9/12 lg:pr-16">
  <div class="-mx-2 mb-10 flex flex-wrap items-center">
    <div class="my-2 w-full px-2">
      <label
        class="text-gray mb-2 text-sm font-bold tracking-wide"
        for="text-search">
        Search for blog posts
      </label>

      <input
        id="text-search"
        bind:value={textSearch}
        class="select-filter"
        type="text"
        placeholder="e.g: Why I started this blog" />
    </div>

    {#if !filteredByCategory && !filteredByTag}
      <div class="my-2 w-full px-2 sm:w-1/2">
        <label
          class="text-gray mb-2 text-sm font-bold tracking-wide"
          for="category-search">
          By category
        </label>
        <div class="relative">
          <select
            bind:value={categorySearch}
            class="select-filter"
            id="category-search">
            <option value="">Select a category</option>
            {#each uniqueCategories as category}
              <option value={category}>{category}</option>
            {/each}
          </select>
        </div>
      </div>

      <div class="my-2 w-full px-2 sm:w-1/2">
        <label
          class="text-gray mb-2 text-sm font-bold tracking-wide"
          for="tag-search">
          By tag
        </label>
        <div class="relative">
          <select bind:value={tagSearch} class="select-filter" id="tag-search">
            <option value="">Select a tag</option>
            {#each uniqueTags as tag}
              <option value={tag}>{tag}</option>
            {/each}
          </select>
        </div>
      </div>
    {/if}
  </div>

  {#if filteredPosts.length > 0}
    <p>
      Displaying
      <strong>{filteredPosts.length}</strong>
      of
      {sourcePosts.length}
      posts
    </p>
    <div class="-m-2 flex flex-wrap">
      {#each filteredPosts as post}
        <div class="flex w-full items-stretch p-2 sm:w-1/2">
          <BlogPostCard {post} />
        </div>
      {/each}
    </div>
  {:else}
    <div
      class="text-gray relative w-full rounded border border-gray-400 bg-gray-100 px-4 py-3 font-bold"
      role="alert">
      No blog posts found. Try another search.
    </div>
  {/if}
</div>

<style lang="postcss">
  @reference "../../../app.css";
  .select-filter {
    @apply w-full rounded border border-gray-400 px-2 text-gray-200 hover:border-gray-500 dark:text-gray-700;
  }
</style>
