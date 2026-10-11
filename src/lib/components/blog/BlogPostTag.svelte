<script lang="ts">
  import { convertToSlug } from '#lib/utils.js';

  interface Props {
    tags: string[];
  }

  let { tags }: Props = $props();
</script>

<div class="mt-5 flex flex-wrap justify-center gap-2 text-sm">
  {#each tags as tag (tag)}
    <a
      data-sveltekit-prefetch
      class="badge preset-tonal-primary"
      href="/tags/{convertToSlug(tag)}">{tag}</a>
  {/each}
</div>

<style>
  /* Beat unlayered `.mj a` so the pill keeps the tonal text token. */
  a.badge.preset-tonal-primary,
  a.badge.preset-tonal-primary:hover {
    color: var(--color-primary-950-50);
  }
  a.badge.preset-tonal-primary:hover {
    text-decoration-line: underline;
  }
</style>
