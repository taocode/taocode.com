<script lang="ts">
  import { afterUpdate, onMount } from 'svelte'
  import BreakpointHelper from '$lib/components/layout/BreakpointHelper.svelte'
  import CookieNotice from '$lib/components/CookieNotice.svelte'
  import NProgress from '$lib/components/layout/NProgress.svelte'
  import Nav from '$lib/components/layout/Nav.svelte'
  import Footer from '$lib/components/layout/Footer.svelte'
  import { browser, dev } from '$app/environment';
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
  
  import '../vars.css'
  import '../fonts.css'
  import '../global.css'

  import { allPosts } from '$lib/stores'
  import type { PageData } from './$types'

  afterUpdate(() => {
    let tmpURL = window.location.href
    fullURL = tmpURL[tmpURL.length - 1] === '/' ? tmpURL : tmpURL + '/'
  })

  export let data: PageData
  $: allPosts.set(data.posts)
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
