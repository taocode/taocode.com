<script lang="ts">
  import Icon from '@iconify/svelte';
  import { page } from '$app/state';
  import { backIn, backOut } from 'svelte/easing';
  import type { Attachment } from 'svelte/attachments';
  import type { Post } from '#lib/models/post.js';

  interface Network {
    label: string;
    icon: string;
    href: string;
  }

  interface Props {
    post: Post;
    /** Hide the network icons until the share control is opened. */
    collapsed?: boolean;
  }

  let { post, collapsed = false }: Props = $props();

  let open = $state(false);

  const fullURL = $derived(`https://www.taocode.com${page.url.pathname}`);
  const encodedURL = $derived(encodeURIComponent(fullURL));
  const encodedPostTitle = $derived(encodeURIComponent(post.title));
  const encodedPostExcerpt = $derived(encodeURIComponent(post.excerpt));

  const closeOnOutside: Attachment<HTMLElement> = (node) => {
    const onPointerDown = (event: PointerEvent) => {
      if (!open) return;
      if (event.target instanceof Node && !node.contains(event.target)) {
        open = false;
      }
    };
    const onKeyDown = (event: KeyboardEvent) => {
      if (open && event.key === 'Escape') open = false;
    };
    document.addEventListener('pointerdown', onPointerDown);
    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.removeEventListener('pointerdown', onPointerDown);
      document.removeEventListener('keydown', onKeyDown);
    };
  };

  const networks = $derived<Network[]>([
    {
      label: 'Facebook',
      icon: 'fa6-brands:facebook',
      href: `https://www.facebook.com/sharer/sharer.php?u=${encodedURL}`,
    },
    {
      label: 'LinkedIn',
      icon: 'fa6-brands:linkedin',
      href: `https://www.linkedin.com/shareArticle?mini=true&url=${encodedURL}&title=${encodedPostTitle}&summary=${encodedPostExcerpt}&source=LinkedIn`,
    },
    {
      label: 'Twitter',
      icon: 'fa6-brands:twitter',
      href: `https://twitter.com/intent/tweet?text=${encodedPostTitle}&url=${encodedURL}`,
    },
    {
      label: 'Reddit',
      icon: 'fa6-brands:reddit',
      href: `https://www.reddit.com/submit?url=${encodedURL}&title=${encodedPostTitle}`,
    },
    {
      label: 'Pinterest',
      icon: 'fa6-brands:pinterest',
      href: `https://pinterest.com/pin/create/button/?url=${encodedURL}`,
    },
  ]);

  function rise(_node: Element, { duration = 420, intro = true } = {}) {
    const reduce = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches;
    return {
      duration: reduce ? 0 : duration,
      easing: intro ? backOut : backIn,
      css: (t: number) => {
        const opacity = Math.max(0, Math.min(1, t));
        const y = (1 - t) * 18;
        const scale = 0.55 + t * 0.45;
        return `opacity: ${opacity}; transform: translateY(${y}px) scale(${scale}); transform-origin: center bottom;`;
      },
    };
  }
</script>

{#snippet networkLink(network: Network)}
  <a
    aria-label="Share on {network.label}"
    href={network.href}
    target="_blank"
    rel="noopener noreferrer"
    class="share-btn"
    title="Share on {network.label}">
    <Icon icon={network.icon} />
  </a>
{/snippet}

{#if collapsed}
  <div class="share-disclosure" {@attach closeOnOutside}>
    <button
      type="button"
      class="share-toggle"
      aria-expanded={open}
      aria-controls={open ? 'share-network-links' : undefined}
      aria-label={open ? 'Close share' : undefined}
      onclick={() => (open = !open)}>
      <Icon icon={open ? 'fa6-solid:xmark' : 'fa6-solid:share'} />
      Share
    </button>
    {#if open}
      <div
        id="share-network-links"
        class="share-bubble"
        in:rise|global
        out:rise|global={{ duration: 240, intro: false }}>
        {#each networks as network (network.label)}
          {@render networkLink(network)}
        {/each}
      </div>
    {/if}
  </div>
{:else}
  <div class="share-buttons">
    {#each networks as network (network.label)}
      {@render networkLink(network)}
    {/each}
  </div>
{/if}

<style lang="postcss">
  @reference "../../app.css";
  .share-buttons {
    @apply flex w-full justify-evenly gap-[0.75em] text-[1.5em];
  }
  .share-btn {
    @apply inline-flex text-green-900 hover:text-green-800;
  }
  .share-disclosure {
    @apply relative inline-flex items-center justify-center;
  }
  .share-bubble {
    position: absolute;
    z-index: 2;
    bottom: calc(100% + 0.7rem);
    left: 50%;
    translate: -50% 0;
    transform-origin: center bottom;
    @apply inline-flex items-center gap-[0.85em] rounded-full border border-current bg-white/30 px-3.5 py-2 text-[1.35em] text-green-950 shadow-xl backdrop-blur-xl dark:bg-black/40 dark:text-green-300;
  }
  .share-toggle {
    @apply inline-flex cursor-pointer items-center gap-1.5 rounded-full border border-current px-3 py-1 text-[0.67em] text-green-950 dark:text-green-300;
  }
  .share-toggle:hover,
  .share-toggle:focus-visible {
    background: color-mix(in srgb, currentColor 14%, transparent);
  }
</style>
