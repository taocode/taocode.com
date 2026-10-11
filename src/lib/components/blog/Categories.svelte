<script lang="ts">
  import { page } from '$app/state';
  import { convertToSlug } from '#lib/utils.js';

  const uniqueCategories = $derived(
    (page.data.posts ?? [])
      .map((post) => post.category)
      .filter((category, idx, arr) => arr.indexOf(category) === idx),
  );
</script>

<div class="mb-16">
  <header class="topic-box">
    <h2>Categories</h2>
  </header>

  <nav role="complementary">
    {#each uniqueCategories as category}
      <a
        class="block border-b border-gray-600 py-4"
        href="/categories/{convertToSlug(category)}">
        {category}
      </a>
    {/each}
  </nav>
</div>
