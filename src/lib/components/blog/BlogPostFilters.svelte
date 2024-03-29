<script lang="ts">
  import BlogPostCard from './BlogPostCard.svelte'
  import type { Post } from '$lib/models/post'

  import { posts as sPosts } from '$lib/stores'

  export let posts: Post[] = $sPosts
  export let filteredByCategory: boolean = false
  export let filteredByTag: boolean = false

  const uniqueCategories: string[] = posts
    .map((post: Post) => post.category)
    .filter(
      (category: string, idx: number, arr: string[]) =>
        arr.indexOf(category) === idx,
    );

  const allTags: string[][] = posts.map((post: Post) => post.tags);
  const uniqueTags: string[] = allTags.flat(Infinity).filter(
    (tag: string, idx: number, arr: string[]) => arr.indexOf(tag) === idx,
  );

  let textSearch: string = ''
  let categorySearch: string = ''
  let tagSearch: string = ''

  let filteredPosts: Post[] = []

  $: {
    filteredPosts = posts.filter((post: Post) =>
      post.title.toLowerCase().includes(textSearch.toLowerCase()),
    )

    if (categorySearch) {
      filteredPosts = filteredPosts.filter((post: Post) =>
        post.category.includes(categorySearch),
      )
    }

    if (tagSearch) {
      filteredPosts = filteredPosts.filter((post: Post) =>
        post.tags.includes(tagSearch),
      )
    }
  }
</script>

<div class="w-full lg:w-9/12 lg:pr-16">
  <div class="flex flex-wrap items-center mb-10 -mx-2">
    <div class="w-full px-2 my-2">
      <label
        class="mb-2 text-sm font-bold tracking-wide text-gray"
        for="text-search"
      >
        Search for blog posts
      </label>

      <input
        id="text-search"
        bind:value="{textSearch}"
        class="select-filter"
        type="text"
        placeholder="e.g: Why I started this blog"
      />
    </div>

    {#if !filteredByCategory && !filteredByTag}
      <div class="w-full px-2 my-2 sm:w-1/2">
        <label
          class="mb-2 text-sm font-bold tracking-wide text-gray"
          for="category-search"
        >
          By category
        </label>
        <div class="relative">
          <select
            bind:value="{categorySearch}"
            class="select-filter"
            id="category-search"
          >
            <option value="">Select a category</option>
            {#each uniqueCategories as category}
              <option value="{category}">{category}</option>
            {/each}
          </select>
        </div>
      </div>

      <div class="w-full px-2 my-2 sm:w-1/2">
        <label
          class="mb-2 text-sm font-bold tracking-wide text-gray"
          for="tag-search"
        >
          By tag
        </label>
        <div class="relative">
          <select
            bind:value="{tagSearch}"
            class="select-filter"
            id="tag-search"
          >
            <option value="">Select a tag</option>
            {#each uniqueTags as tag}
              <option value="{tag}">{tag}</option>
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
      {posts.length}
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
      role="alert"
    >
      No blog posts found. Try another search.
    </div>
  {/if}
</div>

<style lang="postcss">
  .select-filter {
    @apply w-full px-2 text-gray-light border border-gray-400 rounded hover:border-gray-500;
  }
</style>