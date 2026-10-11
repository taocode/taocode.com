<script lang="ts">
  import Icon from '@iconify/svelte';
  import BlogPostThumbnail from './BlogPostThumbnail.svelte';
  import BlogPostTag from './BlogPostTag.svelte';
  import ShareButtons from '../ShareButtons.svelte';
  import InfoTags from './InfoTags.svelte';
  import type { Attachment } from 'svelte/attachments';
  import type { Post } from '#lib/models/post.js';

  interface Props {
    post: Post;
  }

  let { post }: Props = $props();

  function roundedRect(x: number, y: number, w: number, h: number, r: number) {
    const radius = Math.min(r, w / 2, h / 2);
    return `M${x + radius} ${y}H${x + w - radius}A${radius} ${radius} 0 0 1 ${x + w} ${y + radius}V${y + h - radius}A${radius} ${radius} 0 0 1 ${x + w - radius} ${y + h}H${x + radius}A${radius} ${radius} 0 0 1 ${x} ${y + h - radius}V${y + radius}A${radius} ${radius} 0 0 1 ${x + radius} ${y}Z`;
  }

  const maskChips: Attachment = (node) => {
    const fill = node.querySelector<HTMLElement>('.card-fill');
    if (!fill) return;

    const update = () => {
      const box = fill.getBoundingClientRect();
      if (box.width === 0 || box.height === 0) return;
      const holes = [...node.querySelectorAll<HTMLElement>('.meta-chip')]
        .map((chip) => {
          const rect = chip.getBoundingClientRect();
          const radius =
            Number.parseFloat(getComputedStyle(chip).borderTopLeftRadius) || 0;
          return roundedRect(
            rect.left - box.left,
            rect.top - box.top,
            rect.width,
            rect.height,
            radius,
          );
        })
        .join('');
      const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${box.width}" height="${box.height}"><path fill="white" fill-rule="evenodd" d="M0 0H${box.width}V${box.height}H0Z${holes}"/></svg>`;
      const mask = `url("data:image/svg+xml,${encodeURIComponent(svg)}")`;
      fill.style.maskImage = mask;
      fill.style.maskSize = '100% 100%';
      fill.style.maskRepeat = 'no-repeat';
    };

    update();
    const observer = new ResizeObserver(update);
    observer.observe(node);
    for (const chip of node.querySelectorAll('.meta-chip')) {
      observer.observe(chip);
    }
    let active = true;
    void document.fonts?.ready.then(() => {
      if (active) update();
    });

    return () => {
      active = false;
      observer.disconnect();
    };
  };
</script>

<section class="applause-gradient blog-post-header rotating-bg">
  <div
    class="mj-container container md:flex
  md:items-center
  md:gap-8">
    {#if post && post.thumbnail}
      <div
        class="mx-auto mb-6 w-3/5 flex-shrink rounded
    bg-white/40 p-2 align-middle md:mb-0
    md:w-1/3 lg:w-1/4 dark:bg-black/40">
        <BlogPostThumbnail {post} />
      </div>
    {/if}
    <div
      class="blog-header flex-grow p-3
      
      text-center sm:mx-auto sm:flex-row sm:flex-nowrap"
      {@attach maskChips}>
      <div class="card-fill" aria-hidden="true"></div>
      <div class="header-copy w-full px-4 text-gray-800 dark:text-gray-200">
        <h1>{post.title}</h1>
        {#if post.site_url}
          <div class="mb-3">
            <a
              target="site"
              href={post.site_url}
              class="header-meta inline-flex items-center gap-1">
              {post.site_url.replace(/^https?:\/\//, '')}
              <Icon icon="feather:external-link" />
            </a>
          </div>
        {/if}
        <InfoTags {post} highContrast />

        <BlogPostTag tags={post.tags} />

        <div class="my-5 flex flex-wrap justify-center">
          <ShareButtons {post} />
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

<style lang="postcss">
  @reference "../../../app.css";
  .applause-gradient {
    @apply font-display;
  }
  h1 {
    @apply mt-2;
  }
  .blog-header {
    position: relative;
    background-color: transparent;
  }
  .card-fill {
    position: absolute;
    z-index: 0;
    inset: 0;
    border-radius: inherit;
    pointer-events: none;
    @apply bg-white/70 dark:bg-black/70;
  }
  .header-copy {
    position: relative;
    z-index: 1;
  }
  .blog-header :global(.info-row span.meta-chip) {
    @apply bg-black/20 text-white;
  }
  /* Beat unlayered `.mj a` on the frosted card only. */
  .blog-header :global(a.header-meta) {
    @apply text-green-950 dark:text-green-300;
  }
  .blog-header :global(a.header-meta:hover) {
    @apply text-green-950 underline dark:text-green-300;
  }
</style>
