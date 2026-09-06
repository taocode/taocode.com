<script lang="ts">
  import { dev } from '$app/environment';
</script>

<svelte:head>
  {#if !dev}
    <script
      defer
      src="https://analytics.taocode.com/script.js"
      data-website-id="1057f9c8-5b12-477e-b92f-4f286e00e1c2"></script>
  {/if}
</svelte:head>
