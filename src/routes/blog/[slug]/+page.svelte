<script lang="ts">
  // throw new Error("@migration task: Add data prop (https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292707)");

  import BackToBlogOverviewBtn from '$lib/BackToBlogOverviewBtn.svelte';
  import BlogPostHeader from '$lib/BlogPostHeader.svelte';
  import BlogPostSidebar from '$lib/BlogPostSidebar.svelte';
  import CommentsUtterances from '$lib/CommentsUtterances.svelte';
  import PrevNextArticle from '$lib/PrevNextArticle.svelte';
  import ShareButtons from '$lib/ShareButtons.svelte';
  import type { Post } from '$lib/models/post';
  import { page } from '$app/stores';
  import SEO from '$lib/SEO.svelte';
  import { marked } from 'marked';

  import Icon from 'svelte-awesome';
  import { share } from 'svelte-awesome/icons';
import { parse } from 'date-fns/esm';

  export let data
  export let posts: Post[] = data.posts

  $: post = posts.find((post) => post.slug === $page.params.slug);
  $: postIndex = posts.findIndex((p) => p.slug === $page.params.slug);
  $: previousArticle = posts[postIndex + 1];
  $: nextArticle = posts[postIndex - 1];
  $: pageTitle = `${post?.title} | TAOCode`;

  $: blogPostInfo = post
    ? {
        title: pageTitle,
        excerpt: post.excerpt,
        creationDate: post.creationDate,
        cover: post.cover,
      }
    : {};
</script>

<svelte:head>
  <title>{pageTitle}</title>
</svelte:head>

<style>

</style>

<SEO blogPostInfo="{blogPostInfo}" />
<BlogPostHeader post="{post}" />
<section class="container flex flex-wrap mj-container">
  <article class="w-full pb-12 prose-lg lg:prose-xl blog lg:w-3/4 lg:pr-16">
    {#if post.lead }<p class="lead">{@html marked.parse(post.lead)}</p>{/if}
    {@html post.html}
    <div class="flex justify-between items-center w-auto max-w-xs mx-auto p-3 mt-6 mb-8 border-2 rounded bg-green-100 bg-opacity-70 border-green-700 dark:bg-green-900">
      <div class="h-full -m-3 mr-1 py-1 px-3 bg-green-700 text-green-100 dark:text-green-950">
        <Icon data="{share}" class="" scale="{1.5}" />
        <div class="font-display text-2xs">share</div>
      </div>
      <ShareButtons post="{post}" />
    </div>
    <div class="w-full">
      <CommentsUtterances />
    </div>
  
    <div class="flex items-center my-8">
      <BackToBlogOverviewBtn />
    </div>
    <PrevNextArticle
      previousArticle="{previousArticle}"
      nextArticle="{nextArticle}"
    />
  </article>
  <aside class="w-full mt-8 lg:mt-0 lg:w-3/12">
    <BlogPostSidebar {posts} />
  </aside>
</section> 
