<script lang="ts">
  import BlogPostHeaderImage from '$lib/images/b-flopped-on-sidewalk.jpg'
  import BlogOverviewHeader from '$lib/components/blog/BlogOverviewHeader.svelte'
  import BlogPostFilters from '$lib/components/blog/BlogPostFilters.svelte'
  import BlogPostSidebar from '$lib/components/blog/BlogPostSidebar.svelte'
  import SEO from '$lib/components/layout/SEO.svelte'
  import type { Post } from '$lib/models/post'

  import { posts } from '$lib/stores'

  // console.log('/blog/+page.svelte',{data,posts})
</script>

<svelte:head>
  <title>Blog | TAOCode</title>
  <meta
    name="description"
    content="Insights and things learned about Programming websites and other topics."
  />
</svelte:head>

<SEO />

<style lang="postcss">
a {
  @apply underline;
}
</style>

<BlogOverviewHeader image={BlogPostHeaderImage}>
  <div class="w-full">
    <h1>Blog</h1>
    <p>
      Insights and things I've learned working on the web for over 2 decades:
      <a href="/categories/programming" data-sveltekit-prefetch>Programming</a>,
      <a href="/categories/portfolio" data-sveltekit-prefetch>Portfolio</a>, and 
      <a href="/categories/life" data-sveltekit-prefetch>Life</a>.
    </p>
    <h2>Blog post topic?</h2>
    <p>
      Suggest content on the
      <a
        href="https://github.com/taocode/taocode.com/issues/new"
        target="_blank"
        rel="noopener noreferrer"
      >
        taocode.com GitHub project page
      </a>
      or through my socials.
    </p>
  </div>
</BlogOverviewHeader>

<section class="container flex flex-wrap mj-container">
  <BlogPostFilters />

  <aside class="w-full mt-8 lg:mt-0 lg:w-3/12">
    <BlogPostSidebar />
  </aside>
</section>
