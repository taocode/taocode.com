<script lang="ts">
  import { page } from '$app/stores'
  import { browser, dev } from '$app/environment'
  export let { data, error } = $page
  $: {
    console.log({data,error})
  }
</script>

<svelte:head>
  <title>{$page.status}</title>
</svelte:head>

<div class="text-center mj-container">
  <h1>{$page.status}</h1>

  <p>{$page.error.message}</p>
</div>

{#if browser && dev && $page.error.stack}
  <pre>{$page.error.stack}</pre>
  <hr>
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
