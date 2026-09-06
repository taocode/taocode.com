<script lang="ts">
  import type { Post } from '$lib/models/post';

  interface Props {
    post: Post;
  }

  let { post }: Props = $props();
</script>

{#if post.thumbnail}
  <figure class="block w-full flex-none">
    <img
      class="rounded"
      src={post.thumbnail}
      alt="{post.title} Thumbnail"
      loading="lazy" />
  </figure>
{/if}
