<script lang="ts">
  import { dev } from '$app/environment';
  import type { PageData } from './$types';

  let {
    data,
    error,
  }: {
    data: PageData;
    error: App.Error & { message: string };
  } = $props();

  $effect(() => {
    console.error('/+error.svelte', error);
  });
</script>

<svelte:head>
  <title>{error?.message ?? 'Error'}</title>
</svelte:head>

<div class="text-center mj-container">
  <h1>Something went wrong</h1>
  <p>{error?.message}</p>
</div>

{#if dev && error?.stack}
  <pre>{error.stack}</pre>
  <hr />
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
