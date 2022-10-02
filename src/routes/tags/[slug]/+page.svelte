<script lang="ts">
  // throw new Error("@migration task: Add data prop (https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292707)");

  import BlogOverviewHeader from '$lib/components/blog/BlogOverviewHeader.svelte'
  import BlogPostSidebar from '$lib/components/blog/BlogPostSidebar.svelte'
  import BlogPostFilters from '$lib/components/blog/BlogPostFilters.svelte'
  import SEO from '$lib/components/layout/SEO.svelte'
  import type { Post } from '$lib/models/post'
  import type { PageData } from './$types';

  import { convertToSentenceCase } from '$lib/utils'

  import { posts } from '$lib/stores'

  export let data: PageData
  export let { slug, postsByTag } = data
  $: ({ slug, postsByTag } = data) // so it stays in sync when `data` changes

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
    <BlogPostSidebar posts="{$posts}" />
  </aside>
</section>
