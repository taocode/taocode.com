<script lang="ts">
  import BlogOverviewHeader from '$lib/components/blog/BlogOverviewHeader.svelte';
  import BlogPostSidebar from '$lib/components/blog/BlogPostSidebar.svelte';
  import BlogPostFilters from '$lib/components/blog/BlogPostFilters.svelte';
  import SEO from '$lib/components/layout/SEO.svelte';
  import { convertToSentenceCase } from '$lib/utils';
  import type { PageData } from './$types';

  let { data }: { data: PageData } = $props();

  const readableSlug = $derived(convertToSentenceCase(data.slug));
  const postsByTag = $derived(data.postsByTag);
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
  <BlogPostFilters posts={postsByTag} filteredByTag />

  <aside class="w-full mt-8 lg:mt-0 lg:w-3/12">
    <BlogPostSidebar />
  </aside>
</section>
