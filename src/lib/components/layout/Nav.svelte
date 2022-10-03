<script lang="ts">
  import Icon from 'svelte-awesome';
  import { faBars } from '@fortawesome/free-solid-svg-icons';
  import ClickOutside from 'svelte-click-outside';
  import TaocodeLogo from '../svg/TaocodeLogo.svelte';

  import ToTop from './ToTop.svelte';
  import Headroom from "./headroom/index.svelte";
  // import Headroom from "@taocode/svelte-headroom";
	import DarkModeToggle from '$lib/components/layout/DarkModeToggle.svelte';

  let open = false;
	export let darkMode = false;

  const toggleHamburgerMenu = () => {
    open = !open;
  };
</script>
<div id="top" hidden></div>

<Headroom styleClass="z-20 w-full" showAtTop={true} showAtBottom={true}>
<header class="w-full bg-gray-900 header-box-shadow">
  <div
    class="container relative flex flex-wrap items-center justify-between p-3 mx-auto"
  >
    <div class="flex">
      <a
        data-sveltekit-prefetch
        href="/"
        class="mt-0 text-xl font-semibold tracking-tight nav-link text-green-500 md:inline-block"
      >
        <TaocodeLogo classes="h-8 -mt-3"/>
      </a>
    </div>
    <div class="flex-grow text-right mr-2 
    md:(absolute right-0 flex-none)">
      <DarkModeToggle bind:enabled={darkMode} />
    </div>
    <div class="ml-auto flex-shrink md:hidden">
      <ClickOutside on:clickoutside="{() => (open = false)}">
        <button
          class="flex items-center rounded px-3 py-2 bg-green-500 border border-green-500
          text-black
          hover:bg-green-400 hover:border-green-400"
          aria-label="Hamburger menu"
          on:click="{toggleHamburgerMenu}"
        >
          <Icon data="{faBars}" />
        </button>
      </ClickOutside>
    </div>
    <nav
      aria-label="Header navigation"
      class:hidden="{!open}"
      class="w-full ml-auto md:(flex w-auto mr-4)"
    >
      <a
        data-sveltekit-prefetch
        href="/about"
        class="nav-link md:inline-block md:mt-0"
      >
        About
      </a>
      <a
        data-sveltekit-prefetch
        href="/blog"
        class="nav-link md:inline-block md:mt-0"
      >
        Blog
      </a>
      <a
        data-sveltekit-prefetch
        href="/services"
        class="nav-link md:inline-block md:mt-0"
      >
        Services
      </a>
      <a
        data-sveltekit-prefetch
        href="/contact"
        class="nav-link md:inline-block md:mt-0"
      >
        Contact
      </a>
    </nav>
  </div>
</header>
</Headroom>

<ToTop />

<style>
  .header-box-shadow {
    box-shadow: 0 -0.2rem 0.9rem 0.2rem rgba(0, 0, 0, 0.5);
  }

  header {
    z-index: 1;
  }
  
</style>
