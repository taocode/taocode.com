<script lang="ts">
  import Introduction from '$lib/components/content/Introduction.svelte'
  import CurrentProjects from '$lib/components/content/CurrentProjects.svelte'
  import Experience from "$lib/components/experience/Experience.svelte"

  import RecentPosts from '$lib/components/blog/RecentPosts.svelte'
  import SEO from '$lib/components/SEO/index.svelte'
  import website from '$lib/config/website'
  import type { Post } from '$lib/models/post'
  import ServicesCallToAction from '$lib/components/content/ServicesCallToAction.svelte'
import BlogRoll from '$lib/components/BlogRoll.svelte';

  export let data
  export let { posts } = data
  const { author, siteUrl } = website

  let title = 'Home';
  const breadcrumbs = [
    {
      name: 'Home',
      slug: '',
    },
  ];
  const featuredImageSrc = 'because'
  const ogImageSrc = 'another'
  const ogSquareImageSrc = 'another'
  const twitterImageSrc = 'another'
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
  <title>The Art of Code</title>
  <meta
    name="description"
    content="Personal website and blog with SvelteKit and TailwindCSS."
  />
</svelte:head>

<SEO {...seoProps} />


<Introduction />

<Experience />


<BlogRoll {posts} />

<ServicesCallToAction />

<CurrentProjects />

