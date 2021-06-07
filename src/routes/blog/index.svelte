<script context="module">
  export async function load({ fetch }: LoadInput) {
    try {
      const blog = await fetch(`/blog.json`);
      const posts = await blog.json();

      return { props: { posts } };
    } catch (error) {
      console.error(error);
    }
  }
</script>

<script lang="ts">
  import BlogPost from '../../../static/b-flopped-on-sidewalk.jpg';
  import BlogOverviewHeader from '$lib/BlogOverviewHeader.svelte';
  import BlogPostFilters from '$lib/BlogPostFilters.svelte';
  import BlogPostSidebar from '$lib/BlogPostSidebar.svelte';
  import SEO from '$lib/SEO.svelte';
  import type { LoadInput } from '@sveltejs/kit/types/page';
  import type { Post } from '../../models/post';

  export let posts: Post[];
</script>

<svelte:head>
  <title>Blog | Mark Jones</title>
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

<BlogOverviewHeader>
  <div class="w-full md:w-2/3 md:pr-10">
    <h1>Blog</h1>
    <p>
      Insights and things I've learned working on the web for over 2 decades:
      <a href="/categories/programming" sveltekit:prefetch>Programming</a>,
      <a href="/categories/portfolio" sveltekit:prefetch>Portfolio</a>,
      <a href="/categories/life" sveltekit:prefetch>Life</a>
      and other topics.
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
  <div class="w-3/5 mx-auto max-width sm:w-1/2 md:w-1/3">
    <img srcset="{BlogPost}" type="image/webp" alt="Blog post card" />
  </div>
</BlogOverviewHeader>

<section class="container flex flex-wrap mj-container">
  <BlogPostFilters posts="{posts}" />

  <aside class="w-full mt-8 lg:mt-0 lg:w-3/12">
    <BlogPostSidebar posts="{posts}" />
  </aside>
</section>
