<script lang="ts">
  import { convertToSlug } from '$lib/utils'

  export let tags: string[];
</script>

<div class="mt-3 text-sm">
  {#each tags as tag}
    <a data-sveltekit-prefetch class="info-tag" href="/tags/{convertToSlug(tag)}"
      >{tag}</a
    >
  {/each}
</div>
