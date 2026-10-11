<script lang="ts">
  import BackToBlogOverviewBtn from '#lib/components/blog/BackToBlogOverviewBtn.svelte';
  import BlogPostHeader from '#lib/components/blog/BlogPostHeader.svelte';
  import BlogPostSidebar from '#lib/components/blog/BlogPostSidebar.svelte';
  import CommentsUtterances from '#lib/components/layout/CommentsUtterances.svelte';
  import PrevNextArticle from '#lib/components/blog/PrevNextArticle.svelte';
  import ShareButtons from '#lib/components/ShareButtons.svelte';
  import Icon from '@iconify/svelte';
  import SEO from '#lib/components/layout/SEO.svelte';
  import { marked } from 'marked';
  import type { PageData } from './$types';

  let { data }: { data: PageData } = $props();

  const post = $derived(data.post);
  const PostContent = $derived(data.pageComponent);
  const previousArticle = $derived(data.previousArticle);
  const nextArticle = $derived(data.nextArticle);
  const earlier = $derived(data.earlier);
  const followUps = $derived(data.followUps);
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
<section class="mj-container container flex flex-col gap-6 md:flex-row">
  <article class="blog prose flex-grow">
    {#if post.lead}<p class="lead">{@html marked.parse(post.lead)}</p>{/if}
    <PostContent />
    {#if earlier || followUps.length > 0}
      <nav class="not-prose post-thread" aria-label="Post thread">
        {#if earlier}
          <p class="thread-label">Follows</p>
          <ul>
            <li>
              <a data-sveltekit-prefetch href="/blog/{earlier.slug}"
                >{earlier.title}</a>
            </li>
          </ul>
        {/if}
        {#if followUps.length > 0}
          <p class="thread-label">Follow-ups</p>
          <ul>
            {#each followUps as followUp (followUp.slug)}
              <li>
                <a data-sveltekit-prefetch href="/blog/{followUp.slug}"
                  >{followUp.title}</a>
              </li>
            {/each}
          </ul>
        {/if}
      </nav>
    {/if}
    <div
      class="share-post bg-opacity-70 border-green-700 bg-green-100 dark:bg-green-900">
      <div class="share-icon bg-green-700 text-green-100 dark:text-green-950">
        <div class="icon text-[1.5em]">
          <Icon icon="fa6-solid:share" />
        </div>
        <div class="text-2xs font-display">share</div>
      </div>
      <ShareButtons {post} />
    </div>
    <div class="w-full">
      <CommentsUtterances />
    </div>

    <div class="my-8 flex items-center">
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
  .post-thread {
    @apply mt-10 border-t border-gray-300 pt-6 dark:border-gray-700;
  }
  .thread-label {
    @apply mb-1 font-display text-sm font-semibold tracking-wide text-gray-600 uppercase dark:text-gray-400;
  }
  .post-thread ul {
    @apply mb-4 list-none pl-0;
  }
  .post-thread a {
    @apply text-green-800 underline dark:text-green-300;
  }
</style>
