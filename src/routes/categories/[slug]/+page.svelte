<script lang="ts">
  import BlogOverviewHeader from '$lib/components/blog/BlogOverviewHeader.svelte';
  import BlogPostSidebar from '$lib/components/blog/BlogPostSidebar.svelte';
  import BlogPostFilters from '$lib/components/blog/BlogPostFilters.svelte';
  import CurrentGoals from '$lib/components/content/CurrentGoals.svelte';
  import SEO from '$lib/components/layout/SEO.svelte';
  import { convertToSentenceCase } from '$lib/utils';
  import EmpurrorSunNap from '$lib/images/empurror-scratcher-sun-nap.jpg';
  import MillerParkMushrooms from '$lib/images/miller-park-tree-mushrooms.jpg';
  import MillerParkGreenery from '$lib/images/miller-park-greenery.jpg';
  import type { PageData } from './$types';

  let { data }: { data: PageData } = $props();

  const accentImage = {
    Life: {
      alt: 'Black cat napping in the sun on a cardboard scratcher',
      img: EmpurrorSunNap
    },
    Programming: {
      alt: 'Miller Park green space framed by trees',
      img: MillerParkGreenery
    },
    Portfolio: {
      alt: 'Cherry blossoms on ground and tree',
      img: MillerParkMushrooms
    }
  };

  const readableSlug = $derived(convertToSentenceCase(data.slug));
  const postsByCategory = $derived(data.postsByCategory);
  const headerImage = $derived(accentImage[readableSlug as keyof typeof accentImage]);
</script>

<svelte:head>
  <title>{readableSlug} | Mark Jones</title>
  <meta name="description" content="Opinions and viewpoints about {readableSlug}." />
</svelte:head>

<SEO />

<BlogOverviewHeader image={headerImage.img} alt={headerImage.alt}>
  <CurrentGoals {readableSlug} />
</BlogOverviewHeader>

<section class="container flex flex-wrap mj-container">
  <BlogPostFilters posts={postsByCategory} filteredByCategory />

  <aside class="w-full mt-8 lg:mt-0 lg:w-3/12">
    <BlogPostSidebar />
  </aside>
</section>
