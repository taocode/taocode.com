<script lang="ts">

  import BackToBlogOverviewBtn from '$lib/components/blog/BackToBlogOverviewBtn.svelte'
  import BlogPostHeader from '$lib/components/blog/BlogPostHeader.svelte'
  import BlogPostSidebar from '$lib/components/blog/BlogPostSidebar.svelte'
  import CommentsUtterances from '$lib/components/layout/CommentsUtterances.svelte'
  import PrevNextArticle from '$lib/components/blog/PrevNextArticle.svelte'
  import ShareButtons from '$lib/components/ShareButtons.svelte'
  import type { Post } from '$lib/models/post'
  import { page } from '$app/stores'
  import SEO from '$lib/components/layout/SEO.svelte'
  import { marked } from 'marked'

  import { posts } from '$lib/stores'

  export let data
  let pageComponent = data.pageComponent
  let metadata = data.metadata
  $: pageComponent = data.pageComponent

  $: slug = $page.params.slug
  $: postIndex = $posts.findIndex((p) => p.slug === slug)
  $: post = $posts[postIndex]
  $: previousArticle = $posts[postIndex + 1]
  $: nextArticle = $posts[postIndex - 1]
  $: pageTitle = `${post?.title} | TAOCode`
  $: description = post.description

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
  <meta name="description" content={description} />
</svelte:head>


<SEO {blogPostInfo} />
<BlogPostHeader {post} />
<section class="container flex flex-col gap-6 md:flex-row mj-container">
  <article class="prose blog flex-grow">
    {#if post.lead }<p class="lead">{@html marked.parse(post.lead)}</p>{/if}
    <svelte:component this={pageComponent} />
    <div class="share-post bg-green-100 bg-opacity-70 border-green-700 dark:bg-green-900">
      <div class="share-icon bg-green-700 text-green-100 dark:text-green-950">
        <div class="icon text-[1.5em]">
          <div class="i-fa6-solid-share"></div>
        </div>
        <div class="font-display text-2xs">share</div>
      </div>
      <ShareButtons {post} />
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
  <aside class="">
    <BlogPostSidebar />
  </aside>
</section> 

<style lang="postcss">
.share-post {
  @apply flex justify-between items-center w-auto max-w-xs mx-auto p-3 mt-12 mb-9 border-2 rounded;
}
.share-icon {
  @apply h-full -m-3 mr-1 py-1 px-3;
}
.lead {
  @apply font-semibold;
}
</style>
