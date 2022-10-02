<script lang="ts">
  // throw new Error("@migration task: Add data prop (https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292707)");

  import BlogOverviewHeader from '$lib/components/blog/BlogOverviewHeader.svelte'
  import BlogPostSidebar from '$lib/components/blog/BlogPostSidebar.svelte'
  import BlogPostFilters from '$lib/components/blog/BlogPostFilters.svelte'
  import CurrentGoals from '$lib/components/content/CurrentGoals.svelte'
  import SEO from '$lib/components/layout/SEO.svelte'
  import { page } from '$app/stores'
  import type { Post } from '$lib/models/post'
  import type { LoadInput } from '@sveltejs/kit/types/page'

  import { convertToSentenceCase } from '$lib/utils'

  import EmpurrorSunNap from '$lib/images/empurror-scratcher-sun-nap.jpg'
  import MillerParkMushrooms from '$lib/images/miller-park-tree-mushrooms.jpg'
  import MillerParkGreenery from '$lib/images/miller-park-greenery.jpg'

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

  import { posts } from '$lib/stores'

  export let data
  export let postsByCategory: Post[] = data.postsByCategory;
  // export let posts: Post[] = data.posts;
  // console.log('categories[slug]+page.svelte',{data, error})
  $: readableSlug = convertToSentenceCase(data.slug);
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
    <BlogPostSidebar posts={$posts} />
  </aside>
</section>
