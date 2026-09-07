<script lang="ts">
  import { getThumbnail } from '$lib/images/thumbnails';
  import type { Post } from '$lib/models/post';

  interface Props {
    post: Post;
  }

  let { post }: Props = $props();

  const picture = $derived(getThumbnail(post.thumbnail));
</script>

{#if picture}
  <figure class="block w-full flex-none">
    <enhanced:img
      class="rounded w-full"
      src={picture}
      alt="{post.title} Thumbnail"
      loading="lazy" />
  </figure>
{/if}
