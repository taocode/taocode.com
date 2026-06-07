<script lang="ts">
  import { page } from '$app/state';
  import BlogPostCard from './BlogPostCard.svelte';
  import type { Post } from '$lib/models/post';

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
  <div class="flex flex-wrap items-center mb-10 -mx-2">
    <div class="w-full px-2 my-2">
      <label
        class="mb-2 text-sm font-bold tracking-wide text-gray"
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
      <div class="w-full px-2 my-2 sm:w-1/2">
        <label
          class="mb-2 text-sm font-bold tracking-wide text-gray"
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

      <div class="w-full px-2 my-2 sm:w-1/2">
        <label
          class="mb-2 text-sm font-bold tracking-wide text-gray"
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
    <div class="flex flex-wrap -m-2">
      {#each filteredPosts as post}
        <div class="flex items-stretch w-full p-2 sm:w-1/2">
          <BlogPostCard {post} />
        </div>
      {/each}
    </div>
  {:else}
    <div
      class="relative w-full px-4 py-3 font-bold text-gray bg-gray-100 border border-gray-400 rounded"
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
