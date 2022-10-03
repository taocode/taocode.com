<script lang="ts">
  import { formatDate, convertToSlug } from '$lib/utils'
  import type { Post } from '$lib/models/post'

  export let post: Post;
  export let hide_category = false;
</script>
<style>
  .hide_category {
    display: none;
  }
</style>

<span class="text-green-750 dark:text-green-200">{formatDate(post.creationDate)}</span>
&middot;
<span class="text-green-750 dark:text-green-200">{post.readingTimeText}</span>
<span class:hide_category>
&middot;
<a data-sveltekit-prefetch href="/categories/{convertToSlug(post.category)}"
  >{post.category}
</a>
</span>
