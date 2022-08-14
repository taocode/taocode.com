<script lang="ts" context="module">
  export async function load({ fetch }: LoadInput) {
    try {
      await fetch('/sitemap.xml')
      await fetch('/rss.xml')

      return true
    } catch (error) {
      console.error(error)
    }
  }
</script>

<script lang="ts">
  import { afterUpdate, onMount } from 'svelte'
  import BreakpointHelper from '$lib/BreakpointHelper.svelte'
  import CookieNotice from '$lib/CookieNotice.svelte'
  import NProgress from '$lib/NProgress.svelte'
  import Nav from '$lib/Nav.svelte'
  import Footer from '$lib/Footer.svelte'
  import { browser, dev } from '$app/env';
  import type { LoadInput } from '@sveltejs/kit/types/page'

  import 'prismjs/themes/prism-tomorrow.css'

  let fullURL: string = ''

  import 'virtual:windi.css'

  let dark = true
  const updateSystemPreferenceDarkTheme = () => {
    dark = ! matchMedia('(prefers-color-scheme: light)').matches
  }
  onMount(() => {
		import('virtual:windi-devtools')
    updateSystemPreferenceDarkTheme()
    matchMedia('(prefers-color-scheme: light)')
    .addEventListener("change",updateSystemPreferenceDarkTheme)
	});
  

  import Style from '../global.css'

  afterUpdate(() => {
    let tmpURL = window.location.href
    fullURL = tmpURL[tmpURL.length - 1] === '/' ? tmpURL : tmpURL + '/'
  })
</script>

<svelte:head>
  <link rel="canonical" href="{fullURL}" />
</svelte:head>

<div class:dark>
<BreakpointHelper />

<NProgress />

<Nav bind:darkMode={dark} />

<main class="pb-12 mj">
  <slot />
</main>

<Footer />

{#if browser && !dev}
  <CookieNotice />
{/if}
</div>

<style>
  main {
    min-height: calc(100vh - 428px);
  }
</style>
