<script lang="ts">
  import { getThumbnail } from '#lib/images/thumbnails.js';
  import type { Post } from '#lib/models/post.js';

  interface Props {
    post: Post;
  }

  let { post }: Props = $props();

  const picture = $derived(getThumbnail(post.thumbnail));
</script>

{#if picture}
  <figure class="block w-full flex-none">
    <enhanced:img
      class="w-full rounded"
      src={picture}
      alt="{post.title} Thumbnail"
      loading="lazy" />
  </figure>
{/if}
