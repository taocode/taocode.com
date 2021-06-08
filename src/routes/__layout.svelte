<script context="module">
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
  import { isDev } from '../stores'
  import type { LoadInput } from '@sveltejs/kit/types/page'

  import 'prismjs/themes/prism-tomorrow.css'

  let fullURL: string = ''

  import 'virtual:windi.css'
  const updateSystemDarkThemePreference = () => {
    dark = ! matchMedia('(prefers-color-scheme: light)').matches
  }
  onMount(() => {
		import('virtual:windi-devtools')
    updateSystemDarkThemePreference();
    matchMedia('(prefers-color-scheme: light)')
    .addEventListener("change",updateSystemDarkThemePreference)
	});
  

  import Style from '../global.css'

  afterUpdate(() => {
    let tmpURL = window.location.href
    fullURL = tmpURL[tmpURL.length - 1] === '/' ? tmpURL : tmpURL + '/'
  })
  let dark = true
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

{#if !$isDev}
  <CookieNotice />
{/if}
</div>

<style>
  main {
    min-height: calc(100vh - 428px);
  }
</style>
