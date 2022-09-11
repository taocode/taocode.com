<script lang="ts">
  import BlogPostThumbnail from './BlogPostThumbnail.svelte'
  import BlogPostTag from './BlogPostTag.svelte'
  import ShareButtons from '../ShareButtons.svelte'
  import InfoTags from './InfoTags.svelte'
  import type { Post } from '$lib/models/post'

  import Icon from 'svelte-awesome'
  import { faExternalLinkSquareAlt } from '@fortawesome/free-solid-svg-icons'

  export let post: Post;
  export let imageData
</script>
<style lang="postcss">
  .applause-gradient {
    @apply font-display;
  }
  h1 {
    @apply mt-2;
  }
</style>
<section class="applause-gradient blog-post-header rotating-bg">
  <div class="container mj-container md:flex 
  md:items-center
  md:gap-8">
    {#if true || post.thumbnail}
    <div class="w-3/5 mx-auto mb-6 flex-shrink align-middle
    p-2 rounded bg-opacity-40 bg-white dark:(bg-black bg-opacity-40)
    md:mb-0 md:w-1/3 lg:w-1/4 ">
      <BlogPostThumbnail {imageData} />
    </div>
    {/if}
    <div
      class="blog-header p-3 text-center
      
      sm:flex-row sm:flex-nowrap sm:mx-auto flex-grow"
    >
      <div class="w-full px-4">
        <h1>{post.title}</h1>
        {#if post.siteUrl}
          <div><a target="_blank" href={post.siteUrl}>{post.siteUrl.slice(8)}
            <Icon data="{faExternalLinkSquareAlt}" class="text-green-700 -mt-1 inline-block" scale="{0.8}" />
          </a></div>
        {/if}
        <InfoTags post="{post}" />


        <BlogPostTag tags="{post.tags}" />

        <div class="flex flex-wrap justify-center my-5">
          <ShareButtons post="{post}" />
        </div>

        {#if post.hasAffiliateLink}
          <div class="text-sm text-gray-700 italic" role="alert">
            Disclosure: This article may contain affiliate links, meaning I
            receive a commission for purchases made through these links, at no
            cost to you.
          </div>
        {/if}
      </div>
    </div>
  </div>
</section>
