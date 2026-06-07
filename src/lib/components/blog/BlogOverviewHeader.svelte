<script lang="ts">
  interface Props {
    image?: string;
    alt?: string;
    children?: import('svelte').Snippet;
  }

  let { image, alt = '', children }: Props = $props();
</script>
<section class="applause-gradient blog-applause rotating-bg">
  <div class="container mj-container flex flex-col-reverse items-center gap-4 md:flex-row">
    <div class="blog-header overview-header max-w-xl flex-shrink px-12 py-8">
      <div class="">
        {@render children?.()}
      </div>
    </div>
    {#if image}
    <div class="blog-header-image flex-grow">
      <div class="rounded overflow-hidden bg-gray-200/50 dark:bg-gray-900/50 w-3/5 p-2 mx-auto max-width 
      md:w-full">
        <img class="rounded" srcset="{image}" type="image/webp" alt={alt} />
      </div>
    </div>
    {/if}
  </div>
</section>

