<script lang="ts">
  interface Props {
    href: string;
    title?: string | undefined;
    customClass?: string;
    ariaLabel?: string | undefined;
    isAffiliateLink?: boolean;
    children?: import('svelte').Snippet;
  }

  let {
    href,
    title = undefined,
    customClass = '',
    ariaLabel = undefined,
    isAffiliateLink = false,
    children
  }: Props = $props();
</script>

<a
  href="{href}"
  target="_blank"
  rel="noreferrer noopener"
  class="cursor-pointer {customClass}"
  title="{title}"
  aria-label="{ariaLabel}"
>
  <!-- prettier-ignore -->
  {@render children?.()}{isAffiliateLink ? '*' : ''}
</a>
