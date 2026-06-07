<script lang="ts">
  import { convertToSlug } from '$lib/utils'

  interface Props {
    tags: string[];
  }

  let { tags }: Props = $props();
</script>

<div class="mt-3 text-sm">
  {#each tags as tag}
    <a data-sveltekit-prefetch class="badge preset-tonal-primary" href="/tags/{convertToSlug(tag)}"
      >{tag}</a
    >
  {/each}
</div>
