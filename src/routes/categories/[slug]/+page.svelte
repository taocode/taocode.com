<script lang="ts" context="module">
  import { convertToSentenceCase } from '../../utils';

  export async function load({ page, fetch }: LoadInput) {
    try {
      const allPosts = await fetch(`/blog.json`);
      const posts = await allPosts.json();

      const postsByCategory = posts.filter(
        (post: Post) =>
          post.category === convertToSentenceCase(page.params.slug),
      );

      return { props: { posts, postsByCategory, slug: page.params.slug } };
    } catch (error) {
      console.error(error);
    }
  }
</script>

<script lang="ts">
  import BlogOverviewHeader from '$lib/BlogOverviewHeader.svelte';
  import BlogPostSidebar from '$lib/BlogPostSidebar.svelte';
  import BlogPostFilters from '$lib/BlogPostFilters.svelte';
  import CurrentGoals from '$lib/CurrentGoals.svelte';
  import SEO from '$lib/SEO.svelte';
  import { page } from '$app/stores';
  import type { Post } from '../../models/post';
  import type { LoadInput } from '@sveltejs/kit/types/page';

  import EmpurrorSunNap from '../../../static/empurror-scratcher-sun-nap.jpg';
  import MillerParkMushrooms from '../../../static/miller-park-tree-mushrooms.jpg';
  import MillerParkGreenery from '../../../static/miller-park-greenery.jpg';

  const accentImage = {
    'Life': {
      'alt': 'Black cat napping in the sun on a cardboard scratcher',
      'img': EmpurrorSunNap,
    },
    'Programming': {
      'alt': "Miller Park green space framed by trees",
      'img': MillerParkGreenery,
    },
    'Portfolio': {
      'alt': "Cherry blossoms on ground and tree",
      'img': MillerParkMushrooms,
    },
  }

  export let postsByCategory: Post[];
  export let posts: Post[];

  $: readableSlug = convertToSentenceCase($page.params.slug);
</script>

<svelte:head>
  <title>{readableSlug} | Mark Jones</title>

  <meta
    name="description"
    content="Opinions and viewpoints about {readableSlug}."
  />
</svelte:head>

<SEO />

<BlogOverviewHeader image={accentImage[readableSlug].img} alt={accentImage[readableSlug].alt}>
  <CurrentGoals readableSlug="{readableSlug}" />
</BlogOverviewHeader>

<section class="container flex flex-wrap mj-container">
  <BlogPostFilters posts="{postsByCategory}" filteredByCategory />

  <aside class="w-full mt-8 lg:mt-0 lg:w-3/12">
    <BlogPostSidebar posts="{posts}" />
  </aside>
</section>
