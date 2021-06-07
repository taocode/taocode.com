<script>
  export let image;
  export let alt: string = "";
</script>
<section class="applause-gradient blog-applause rotating-bg">
  <div class="container mj-container flex flex-col-reverse items-center gap-4 md:flex-row">
    <div class="blog-header overview-header max-w-xl flex-shrink px-12 py-8">
      <div class="">
        <slot />
      </div>
    </div>
    {#if image}
    <div class="blog-header-image flex-grow">
      <div class="rounded overflow-hidden bg-gray-200 bg-opacity-50 w-3/5 p-2 mx-auto max-width 
      md:w-full 
      dark:(bg-gray-900 bg-opacity-50)">
        <img class="rounded" srcset="{image}" type="image/webp" alt={alt} />
      </div>
    </div>
    {/if}
  </div>
</section>

