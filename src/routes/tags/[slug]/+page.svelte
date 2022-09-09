<script lang="ts">
  // throw new Error("@migration task: Add data prop (https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292707)");

  import BlogOverviewHeader from '$lib/components/blog/BlogOverviewHeader.svelte'
  import BlogPostSidebar from '$lib/components/blog/BlogPostSidebar.svelte'
  import BlogPostFilters from '$lib/components/blog/BlogPostFilters.svelte'
  import SEO from '$lib/components/SEO/index.svelte'
  import type { Post } from '$lib/models/post'
  import type { PageData } from './$types';

  import { convertToSentenceCase } from '$lib/utils'

  export let data: PageData
  export let { slug, posts, postsByTag } = data
  $: ({ slug, posts, postsByTag } = data) // so it stays in sync when `data` changes

  const readableSlug = convertToSentenceCase(slug);
  const { author, siteUrl } = website

let title = 'Home';
const breadcrumbs = [
  {
    name: 'Home',
    slug: '',
  },
];
let metadescription =
  'SvelteKit MDsvex Blog Starter - starter code by Rodney Lab to help you get going on your next blog site';
const featuredImageAlt =
  'picture of a person with long, curly hair, wearing a red had taking a picture with an analogue camera';
const featuredImage = {
  url: featuredImageSrc,
  alt: featuredImageAlt,
  width: 672,
  height: 448,
  caption: 'Home page',
};
const ogImage = {
  url: ogImageSrc,
  alt: featuredImageAlt,
};
const ogSquareImage = {
  url: ogSquareImageSrc,
  alt: featuredImageAlt,
};

const twitterImage = {
  url: twitterImageSrc,
  alt: featuredImageAlt,
};
const entityMeta = {
  url: `${siteUrl}/`,
  faviconWidth: 512,
  faviconHeight: 512,
  caption: author,
};
const seoProps = {
  title,
  slug: '',
  entityMeta,
  datePublished: '2021-07-07T14:19:33.000+0100',
  lastUpdated: '2021-07-07T14:19:33.000+0100',
  breadcrumbs,
  metadescription,
  featuredImage,
  ogImage,
  ogSquareImage,
  twitterImage,
}
</script>

<svelte:head>
  <title>{readableSlug} | Mark Jones</title>

  <meta name="description" content="Posts tagged with {readableSlug}." />
</svelte:head>

<SEO {...seoProps} />

<BlogOverviewHeader>
  <h1>
    Posts tagged with
    <span class="underline">{readableSlug}</span>
  </h1>
</BlogOverviewHeader>

<section class="container flex flex-wrap mj-container">
  <BlogPostFilters posts="{postsByTag}" filteredByTag />

  <aside class="w-full mt-8 lg:mt-0 lg:w-3/12">
    <BlogPostSidebar posts="{posts}" />
  </aside>
</section>
