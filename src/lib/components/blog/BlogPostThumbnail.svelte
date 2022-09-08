<script lang="ts">
  export let post: Post;
</script>
{#if post.thumbnail}
  <figure class="block w-full flex-none">
    <img class="rounded" src="{post.thumbnail}" alt="{post.title} Thumbnail" loading="lazy" />
  </figure>
{/if}