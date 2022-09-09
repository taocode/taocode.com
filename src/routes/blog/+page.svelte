<script lang="ts">
  // throw new Error("@migration task: Add data prop (https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292707)");

  import BlogPostHeaderImage from '$lib/images/b-flopped-on-sidewalk.jpg'
  import BlogOverviewHeader from '$lib/components/blog/BlogOverviewHeader.svelte'
  import BlogPostFilters from '$lib/components/blog/BlogPostFilters.svelte'
  import BlogPostSidebar from '$lib/components/blog/BlogPostSidebar.svelte'
  import SEO from '$lib/components/SEO/index.svelte'
  import type { Post } from '$lib/models/post'

  export let data
  export let { posts } = data
  // console.log('/blog/+page.svelte',{data,posts})
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
  <title>Blog | TAOCode</title>
  <meta
    name="description"
    content="Insights and things learned about Programming websites and other topics."
  />
</svelte:head>

<SEO {...seoProps}/>

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
