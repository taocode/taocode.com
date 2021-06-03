<script>
  export let post;
</script>
{#if post.thumbnail}
<div class="w-3/5 mx-auto mt-4 mb-6 md:w-1/3 lg:w-1/4 ring-6 ring-opacity-40 ring-white rounded bg-opacity-40 bg-white md:flex-shrink">
  <figure class="mx-auto max-w-screen">
    <img class="rounded-lg" src="{post.thumbnail}" alt="{post.title} Thumbnail" loading="lazy" />
  </figure>
</div>
{/if}