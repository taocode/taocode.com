<script lang="ts">
  // throw new Error("@migration task: Add data prop (https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292707)");

  import BlogOverviewHeader from '$lib/BlogOverviewHeader.svelte';
  import BlogPostSidebar from '$lib/BlogPostSidebar.svelte';
  import BlogPostFilters from '$lib/BlogPostFilters.svelte';
  import SEO from '$lib/SEO.svelte';
  import type { Post } from '../../../models/post';

  import { convertToSentenceCase } from '$lib/utils'

  export let data
  export let { slug, posts, postsByTag } = data
  $: ({ slug, posts, postsByTag } = data) // so it stays in sync when `data` changes

  const readableSlug = convertToSentenceCase(slug);
</script>

<svelte:head>
  <title>{readableSlug} | Mark Jones</title>

  <meta name="description" content="Posts tagged with {readableSlug}." />
</svelte:head>

<SEO />

<BlogOverviewHeader>
  <h1>
    Posts tagged with
    <span class="underline">{readableSlug}</span>
  </h1>
</BlogOverviewHeader>

<section class="container flex flex-wrap mj-container">
  <BlogPostFilters posts="{postsByTag}" filteredByTag />

  <aside class="w-full mt-8 lg:mt-0 lg:w-3/12">
    <BlogPostSidebar posts="{posts}" />
  </aside>
</section>
