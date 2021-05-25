<script lang="ts">
  import BlogPostTag from './BlogPostTag.svelte';
  import ShareButtons from './ShareButtons.svelte';
  import InfoTags from './InfoTags.svelte';
  import type { Post } from '../models/post';

  import Icon from 'svelte-awesome/components/Icon.svelte';
  import { faExternalLinkSquareAlt } from '@fortawesome/free-solid-svg-icons';

  export let post: Post;
</script>

<section class="applause-gradient">
  <div class="container mh-container">
    <div
      class="flex flex-wrap items-center justify-between p-6 text-center bg-white bg-opacity-70 rounded shadow-xl
      sm:flex-row sm:flex-nowrap"
    >
      {#if post.thumbnail}
      <div class="w-1/2 mx-auto sm:w-1/2 md:w-1/3 lg:w-1/4">
        <figure class="mx-auto max-w-screen">
          <img src="{post.thumbnail}" alt="{post.title} Thumbnail" loading="lazy" />
        </figure>
      </div>
      {/if}
      <div class="w-full">
        <h1>{post.title}</h1>
        {#if post.site_url}
          <div><a target="_blank" href={post.site_url}>{post.site_url.substr(8)}
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
