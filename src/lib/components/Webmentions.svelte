<script lang="ts">
  let { webmentionCounts } = $props();
</script>

❤️
{webmentionCounts.type.like + webmentionCounts.type.repost || 0}
💬
{webmentionCounts.type.mention + webmentionCounts.type.reply || 0}
