<script lang="ts">
  import BackToBlogOverviewBtn from '$lib/components/blog/BackToBlogOverviewBtn.svelte';
  import BlogPostHeader from '$lib/components/blog/BlogPostHeader.svelte';
  import BlogPostSidebar from '$lib/components/blog/BlogPostSidebar.svelte';
  import CommentsUtterances from '$lib/components/layout/CommentsUtterances.svelte';
  import PrevNextArticle from '$lib/components/blog/PrevNextArticle.svelte';
  import ShareButtons from '$lib/components/ShareButtons.svelte';
  import Icon from '@iconify/svelte';
  import SEO from '$lib/components/layout/SEO.svelte';
  import { marked } from 'marked';
  import type { PageData } from './$types';

  let { data }: { data: PageData } = $props();

  const post = $derived(data.post);
  const PostContent = $derived(data.pageComponent);
  const previousArticle = $derived(data.previousArticle);
  const nextArticle = $derived(data.nextArticle);
  const pageTitle = $derived(`${post.title} | TAOCode`);
  const description = $derived(post.description ?? post.excerpt);
  const blogPostInfo = $derived({
    title: pageTitle,
    excerpt: post.excerpt,
    creationDate: post.creationDate,
    cover: post.cover,
  });
</script>

<svelte:head>
  <title>{pageTitle}</title>
  <meta name="description" content={description} />
</svelte:head>

<SEO {blogPostInfo} />
<BlogPostHeader {post} />
<section class="container flex flex-col gap-6 md:flex-row mj-container">
  <article class="prose blog flex-grow">
    {#if post.lead}<p class="lead">{@html marked.parse(post.lead)}</p>{/if}
    <PostContent />
    <div
      class="share-post bg-green-100 bg-opacity-70 border-green-700 dark:bg-green-900">
      <div class="share-icon bg-green-700 text-green-100 dark:text-green-950">
        <div class="icon text-[1.5em]">
          <Icon icon="fa6-solid:share" />
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
    <PrevNextArticle {previousArticle} {nextArticle} />
  </article>
  <aside class="">
    <BlogPostSidebar />
  </aside>
</section>

<style lang="postcss">
  @reference "../../../app.css";
  .share-post {
    @apply mx-auto mt-12 mb-9 flex w-auto max-w-xs items-center justify-between rounded border-2 p-3;
  }
  .share-icon {
    @apply -m-3 mr-1 h-full px-3 py-1;
  }
  .lead {
    @apply font-semibold;
  }
</style>
