<script lang="ts">
  import { formatDate, convertToSlug } from '../utils';
  import type { Post } from '../models/post';

  export let post: Post;
</script>

<span class="text-green-700">{formatDate(post.creationDate)}</span>
&middot;
<span class="text-green-700">{post.readingTime}</span>
