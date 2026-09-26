<script lang="ts">
  import { dev } from '$app/environment';
  import { page } from '$app/state';
  import NotFound from '$lib/components/content/NotFound.svelte';

  let {
    error,
  }: {
    error: App.Error & { message: string };
  } = $props();

  const isNotFound = $derived(page.status === 404);

  $effect(() => {
    if (!isNotFound) {
      console.error('/+error.svelte', error);
    }
  });
</script>

<svelte:head>
  {#if isNotFound}
    <title>Page not found | TAOCode</title>
    <meta name="robots" content="noindex" />
  {:else}
    <title>{error?.message ?? 'Error'}</title>
  {/if}
</svelte:head>

{#if isNotFound}
  <NotFound />
{:else}
  <div class="text-center mj-container">
    <h1>Something went wrong</h1>
    <p>{error?.message}</p>
  </div>

  {#if dev && error?.stack}
    <pre>{error.stack}</pre>
    <hr />
  {/if}
{/if}

<style>
  h1,
  p {
    margin: 0 auto;
  }

  h1 {
    font-size: 2.8em;
    font-weight: 700;
    margin: 0 0 0.5em 0;
  }

  p {
    margin: 1em auto;
  }

  @media (min-width: 480px) {
    h1 {
      font-size: 4em;
    }
  }
</style>
