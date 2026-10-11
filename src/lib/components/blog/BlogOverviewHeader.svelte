<script lang="ts">
  import type { Picture } from '@sveltejs/enhanced-img';
  import type { Snippet } from 'svelte';

  interface Props {
    image?: Picture;
    alt?: string;
    children?: Snippet;
  }

  let { image, alt = '', children }: Props = $props();
</script>

<section class="applause-gradient blog-applause rotating-bg">
  <div
    class="mj-container container flex flex-col-reverse items-center gap-4 md:flex-row">
    <div class="blog-header overview-header max-w-xl flex-shrink px-12 py-8">
      <div class="">
        {@render children?.()}
      </div>
    </div>
    {#if image}
      <div class="blog-header-image flex-grow">
        <div
          class="max-width mx-auto w-3/5 overflow-hidden rounded bg-gray-200/50 p-2 md:w-full
      dark:bg-gray-900/50">
          <enhanced:img class="w-full rounded" src={image} {alt} />
        </div>
      </div>
    {/if}
  </div>
</section>
