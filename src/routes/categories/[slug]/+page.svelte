<script lang="ts">
  // throw new Error("@migration task: Add data prop (https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292707)");

  import BlogOverviewHeader from '$lib/BlogOverviewHeader.svelte';
  import BlogPostSidebar from '$lib/BlogPostSidebar.svelte';
  import BlogPostFilters from '$lib/BlogPostFilters.svelte';
  import CurrentGoals from '$lib/CurrentGoals.svelte';
  import SEO from '$lib/SEO.svelte'
  import type { Post } from '$lib/models/post';
  import type { LoadInput } from '@sveltejs/kit/types/page';
  
  import { convertToSentenceCase } from '$lib/utils'
  
  import { page } from '$app/stores'
  import { posts } from '$lib/stores'

  import EmpurrorSunNap from '$lib/images/empurror-scratcher-sun-nap.jpg';
  import MillerParkMushrooms from '$lib/images/miller-park-tree-mushrooms.jpg';
  import MillerParkGreenery from '$lib/images/miller-park-greenery.jpg';

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

  let pn = $page.url.pathname 
  let slug = pn.substring(1+pn.lastIndexOf('/'))
  $: pn = $page.url.pathname
  $: slug = pn.substring(1+pn.lastIndexOf('/'))
  console.log('slug',{pn,slug})
  let postsByCategory = $posts.filter(
      (post: Post) =>
        post.category === convertToSentenceCase(slug)
    )
  // $: postsByCategory = 
  // console.log('categories[slug]+page.svelte',{data, error})
  $: readableSlug = convertToSentenceCase(slug)
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
  <CurrentGoals {readableSlug} />
</BlogOverviewHeader>

<section class="container flex flex-wrap mj-container">
  <BlogPostFilters posts={postsByCategory} filteredByCategory />

  <aside class="w-full mt-8 lg:mt-0 lg:w-3/12">
    <BlogPostSidebar posts={$posts} />
  </aside>
</section>
