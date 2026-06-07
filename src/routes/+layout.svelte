<script lang="ts">
  import { onMount } from 'svelte';
  import BreakpointHelper from '$lib/components/layout/BreakpointHelper.svelte';
  import NProgress from '$lib/components/layout/NProgress.svelte';
  import Nav from '$lib/components/layout/Nav.svelte';
  import Footer from '$lib/components/layout/Footer.svelte';
  import type { LayoutData } from './$types';

  import '../app.css';
  import '$lib/assets/css/global.css';
  import 'prismjs/themes/prism-tomorrow.css';

  let { children, data }: { children: import('svelte').Snippet; data: LayoutData } = $props();

  let dark = $state(true);
  let fullURL = $state('');

  const updateSystemPreferenceDarkTheme = () => {
    dark = !matchMedia('(prefers-color-scheme: light)').matches;
  };

  onMount(() => {
    updateSystemPreferenceDarkTheme();
    matchMedia('(prefers-color-scheme: light)').addEventListener('change', updateSystemPreferenceDarkTheme);

    const syncCanonical = () => {
      const tmpURL = window.location.href;
      fullURL = tmpURL.endsWith('/') ? tmpURL : `${tmpURL}/`;
    };
    syncCanonical();
    window.addEventListener('popstate', syncCanonical);

    return () => window.removeEventListener('popstate', syncCanonical);
  });
</script>

<svelte:head>
  <link rel="canonical" href={fullURL} />
</svelte:head>

<BreakpointHelper />

<NProgress />

<Nav bind:darkMode={dark} />

<main class="pb-12 mj">
  {@render children()}
</main>

<Footer />

<style>
  main {
    min-height: calc(100vh - 428px);
  }
</style>
