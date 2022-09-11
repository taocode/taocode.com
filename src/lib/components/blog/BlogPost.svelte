<script>
	import readingTime from 'reading-time';
	import BannerImage from '$lib/components/BannerImage.svelte';
	import SEO from '$lib/components/SEO/index.svelte';

	export let imageData;
	export let post;

	const {
		datePublished,
		featuredImageAlt,
		lastUpdated,
		title,
		seoMetaDescription: metadescription,
		slug,
	} = post;
	const { ogImage, ogSquareImage, src: featuredImage, twitterImage } = imageData;
	const timeToRead = Math.ceil(readingTime(post.body).minutes);

	const breadcrumbs = [
		{
			name: 'Home',
			slug: '',
		},
		{
			name: title,
			slug,
		},
	];
	const featuredImageObject = {
		url: featuredImage,
		alt: featuredImageAlt,
		width: 672,
		height: 448,
		caption: title,
	};
	const ogImageObject = ogImage
		? {
				url: ogImage,
				alt: featuredImageAlt,
		  }
		: null;
	const ogSquareImageObject = ogSquareImage
		? {
				url: ogSquareImage,
				alt: featuredImageAlt,
		  }
		: null;
	const twitterImageObject = twitterImage
		? {
				url: twitterImage,
				alt: featuredImageAlt,
		  }
		: null;


// throw new Error("@migration task: Add data prop (https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292707)");

import BackToBlogOverviewBtn from '$lib/components/blog/BackToBlogOverviewBtn.svelte';
  import BlogPostHeader from '$lib/components/blog/BlogPostHeader.svelte';
  // import BlogPostSidebar from '$lib/components/blog/BlogPostSidebar.svelte';
  import CommentsUtterances from '$lib/components/layout/CommentsUtterances.svelte';
  // import PrevNextArticle from '$lib/components/blog/PrevNextArticle.svelte';
  // import ShareButtons from '$lib/components/ShareButtons.svelte';
  // import type { Post } from '$lib/models/post';
  // import { page } from '$app/stores';
  // import SEO from '$lib/SEO.svelte';
  import { marked } from 'marked';

  import Icon from 'svelte-awesome';
  import { share } from 'svelte-awesome/icons';
import BlogOverviewHeader from './BlogOverviewHeader.svelte';

  // export let data
  // export let posts: Post[] = data.posts

  // $: post = posts.find((post) => post.slug === $page.params.slug);
  // $: postIndex = posts.findIndex((p) => p.slug === $page.params.slug);
  // $: previousArticle = posts[postIndex + 1];
  // $: nextArticle = posts[postIndex - 1];
  $: pageTitle = `${post?.title} | TAOCode`;
	// console.log({post})

</script>

<SEO
	article
	{breadcrumbs}
	{slug}
	{title}
	{datePublished}
	{lastUpdated}
	{metadescription}
	{timeToRead}
	featuredImage={featuredImageObject}
	ogImage={ogImageObject}
	ogSquareImage={ogSquareImageObject}
	twitterImage={twitterImageObject}
/>

<BlogPostHeader {post} {imageData}/>

<h1>{title}</h1>
