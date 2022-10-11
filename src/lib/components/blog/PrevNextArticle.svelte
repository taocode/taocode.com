<script lang="ts">
  import type { Post } from '$lib/models/post'

  export let previousArticle: Post
  export let nextArticle: Post

</script>

<div class="font-display flex flex-wrap mb-10 -m-2">
  {#if previousArticle}
    <div class="neighbor previous">
      <div class="card">
        <a data-sveltekit-prefetch href="/blog/{previousArticle.slug}">
          {previousArticle.title}
        </a>
      </div>
    </div>
  {/if}
  {#if nextArticle}
    <div class="neighbor next">
      <div class="card">
          <a data-sveltekit-prefetch href="/blog/{nextArticle.slug}">
            {nextArticle.title}
          </a>
      </div>
    </div>
  {/if}
</div>

<style lang="postcss">
.neighbor {
  @apply w-full p-2 md:w-1/2;
  &.previous {
    --label: 'Previous article';
  }
  &.next {
    --label: 'Next article';
  }
  .card {
    @apply relative flex h-full
      bg-gray-300 border-gray-400
      dark:(bg-gray-900 border-gray-800);
    &:hover {
      @apply border-gray-700;
    }
    &::before {
      content: var(--label);
      @apply absolute z-0 p-5 block text-sm text-gray-600 italic dark:text-gray-500;
    }
  }
  a {
    @apply z-10 block p-5 pt-12 text-xl no-underline font-bold text-[inherit] hover:(underline text-[inherit]);
  }
}

</style>