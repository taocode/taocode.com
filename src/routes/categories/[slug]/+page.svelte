<script lang="ts">
  // throw new Error("@migration task: Add data prop (https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292707)");

  import BlogOverviewHeader from '$lib/BlogOverviewHeader.svelte';
  import BlogPostSidebar from '$lib/BlogPostSidebar.svelte';
  import BlogPostFilters from '$lib/BlogPostFilters.svelte';
  import CurrentGoals from '$lib/CurrentGoals.svelte';
  import SEO from '$lib/SEO.svelte';
  import { page } from '$app/stores';
  import type { Post } from '../../../models/post';
  import type { LoadInput } from '@sveltejs/kit/types/page';

  import EmpurrorSunNap from '../../../../static/empurror-scratcher-sun-nap.jpg';
  import MillerParkMushrooms from '../../../../static/miller-park-tree-mushrooms.jpg';
  import MillerParkGreenery from '../../../../static/miller-park-greenery.jpg';

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

  export let data
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
