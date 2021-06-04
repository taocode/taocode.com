<script>
  export let post;
</script>
{#if post.thumbnail}
  <figure>
    <img class="rounded" src="{post.thumbnail}" alt="{post.title} Thumbnail" loading="lazy" />
  </figure>
{/if}