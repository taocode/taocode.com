<script lang="ts">
  // throw new Error("@migration task: Add data prop (https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292707)");

  import BlogPostHeaderImage from '$lib/images/b-flopped-on-sidewalk.jpg';
  import BlogOverviewHeader from '$lib/BlogOverviewHeader.svelte';
  import BlogPostFilters from '$lib/BlogPostFilters.svelte';
  import BlogPostSidebar from '$lib/BlogPostSidebar.svelte';
  import SEO from '$lib/SEO.svelte';
  import type { Post } from '$lib/models/post'

  export let data
  export let posts: Post[] = data.posts
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

<style>
a {
  @apply underline;
}
</style>

<BlogOverviewHeader image={BlogPostHeaderImage}>
  <div class="w-full">
    <h1>Blog</h1>
    <p>
      Insights and things I've learned working on the web for over 2 decades:
      <a href="/categories/programming" sveltekit:prefetch>Programming</a>,
      <a href="/categories/portfolio" sveltekit:prefetch>Portfolio</a>, and 
      <a href="/categories/life" sveltekit:prefetch>Life</a>.
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
  <BlogPostFilters {posts} />

  <aside class="w-full mt-8 lg:mt-0 lg:w-3/12">
    <BlogPostSidebar {posts} />
  </aside>
</section>
