<script lang="ts">
  import InfoTags from './InfoTags.svelte';
  import type { Post } from '$lib/models/post';
  import BlogPostThumbnail from './BlogPostThumbnail.svelte';

  // import Icon from 'svelte-awesome';
  // import { faQuoteLeft, faQuoteRight } from '@fortawesome/free-solid-svg-icons';

  export let post: Post;
</script>

<div class="blog-post-card">
  <a data-sveltekit-prefetch href="/blog/{post.slug}" class="link-inherit"
  aria-label="{post.slug}"
      >
    <div class="card-transform bg-gray-100 border-gray-400 dark:(bg-gray-900 border-gray-700)">
    <div class="card-face card-face-front dark:bg-gray-900">
      <div class="px-6 py-8">
        <div class="my-3 text-xl font-bold font-display">
          {post.title}
        </div>

        <div class="my-3 font-display">
          <InfoTags {post} hideCategory readTimeText />
        </div>

        {#if post.excerpt}
          <p aria-hidden="true" class="mt-3 mb-12">
            {@html post.excerpt.length > 100
              ? `${post.excerpt.substr(0, 100)}...`
              : post.excerpt}
          </p>
        {/if}
      </div>
      <div class="absolute bottom-0 right-0 pt-4 pl-6">
        <span
          aria-hidden="true"
          class="inline-block rounded-br btn-primary"
        >
          Read more 
        </span>
      </div>
    </div>
    <div class="card-face card-face-back">
      <div class="w-full absolute -z-10 top-0 left-0 right-0 bottom-0">
        <BlogPostThumbnail {post} />
      </div>
      <div aria-hidden="true" class="text-black font-display leading-10 font-extrabold 
      text-3xl md:text-6xl lg:text-4xl p-3 bg-green-600 bg-opacity-70">
         {post.title}
      </div>
    </div>
  </div>
  </a>
</div>

<style type="postcss" global>
  .blog-post-card {
    @apply relative w-full h-full;
  }
  .card-transform {
    /* @apply relative h-full w-full; */
    @apply aspect-1/1 border-2 rounded;
    width: 100%;
    height: 100%;
    transition: transform 0.6s ease;
    transform-style: preserve-3d;
  }
  .blog-post-card:hover .card-transform,
  .blog-post-card:focus-within .card-transform {
    transform: perspective(25rem) rotateY(180deg);
  }
  .card-face {
    position: absolute;
    height: 100%;
    width: 100%;
    backface-visibility: hidden;
  }
  .card-face-back {
    @apply bg-green-600 items-center justify-center flex text-center overflow-hidden;
    transform: rotateY( 180deg );
  }

</style>
