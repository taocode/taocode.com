<script lang="ts">
  import { formatDate, convertToSlug } from '../utils';
  import type { Post } from '../models/post';

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
<span class="text-green-750 dark:text-green-200">{post.readingTime}</span>
<span class:hide_category>
&middot;
<a sveltekit:prefetch href="/categories/{convertToSlug(post.category)}"
  >{post.category}
</a>
</span>
