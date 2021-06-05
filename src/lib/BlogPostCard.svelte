<script lang="ts">
  import InfoTags from './InfoTags.svelte';
  import type { Post } from 'src/models/post';
  import BlogPostThumbnail from './BlogPostThumbnail.svelte';

  import Icon from 'svelte-awesome/components/Icon.svelte';
  import { faQuoteLeft, faQuoteRight } from '@fortawesome/free-solid-svg-icons';

  export let post: Post;
</script>
<style>
  .card {
    perspective: 600px;
  }
  .card-transform {
    /* @apply relative h-full w-full; */
    width: 100%;
    height: 100%;
    position: relative;
    transition: transform 0.6s ease;
    transform-style: preserve-3d;
    @apply aspect-6/6;
  }
  .card:hover .card-transform,
  .card:focus-within .card-transform {
    transform: rotateY(180deg);
  }
  .card-face {
    position: absolute;
    height: 100%;
    width: 100%;
    backface-visibility: hidden;
  }
  .card-face-back {
    @apply bg-green-600 items-center justify-center flex text-center;
    transform: rotateY( 180deg );
  }
</style>
<div class="card">
  <a sveltekit:prefetch href="/blog/{post.slug}" class="link-inherit"
  aria-label="{post.slug}"
      >
    <div class="card-transform">
    <div class="card-face card-face-front">
      <div class="px-6 py-8">
        <div class="my-3 text-xl font-bold">
          {post.title}
        </div>

        <div class="my-3">
          <InfoTags {post} hide_category={true} />
        </div>

        {#if post.excerpt}
          <p aria-hidden="true" class="mt-3 mb-12">
            {@html post.excerpt.length > 100
              ? `${post.excerpt.substr(0, 100)}...`
              : post.excerpt}
          </p>
        {/if}
      </div>
      <div class="absolute bottom-0 right-0 pt-4 pl-6 text-right">
        <span
          aria-hidden="true"
          class="inline-block rounded-br btn-primary"
        >
          Read more 
        </span>
      </div>
    </div>
    <div class="card-face card-face-back">
      <div class="w-full absolute top-0">
        <BlogPostThumbnail {post} />
      </div>
      <div aria-hidden="true" class="relative z-10 text-black font-display p-3 bg-green-600 bg-opacity-70">Read <Icon data="{faQuoteLeft}" class="-mt-2 ml-2 mr-1" scale="{0.75}" />{post.title}<Icon data="{faQuoteRight}" class="-mt-2 ml-1" scale="{0.75}" /></div>
    </div>
  </div>
  </a>
</div>

