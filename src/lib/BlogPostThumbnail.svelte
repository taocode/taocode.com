<script>
  export let post;
</script>
{#if post.thumbnail}
<div class="w-8/11 mx-auto mt-4 mb-6 sm:w-7/11 md:w-1/3 lg:w-1/4">
  <figure class="mx-auto max-w-screen">
    <img src="{post.thumbnail}" alt="{post.title} Thumbnail" loading="lazy" />
  </figure>
</div>
{/if}