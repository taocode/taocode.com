<script lang="ts">
  import Icon from 'svelte-awesome/components/Icon.svelte';
  import { faBars } from '@fortawesome/free-solid-svg-icons';
  import { bars } from 'svelte-awesome/icons';
  import ClickOutside from 'svelte-click-outside';
  import TaocodeLogo from './TaocodeLogo.svelte';

  let open = false;

  const toggleHamburgerMenu = () => {
    open = !open;
  };
</script>

<header class="fixed top-0 z-20 w-full bg-gray-900 header-box-shadow">
  <div
    class="container flex flex-wrap items-center justify-between p-3 mx-auto"
  >
    <div class="flex">
      <a
        sveltekit:prefetch
        href="/"
        class="mt-0 text-xl font-semibold tracking-tight nav-link text-green-500 md:inline-block"
      >
        <TaocodeLogo classes="h-8"/>
      </a>
    </div>
    <div class="ml-auto md:hidden">
      <ClickOutside on:clickoutside="{() => (open = false)}">
        <button
          class="flex items-center rounded px-3 py-2 bg-green-500 border border-green-600 hover:bg-green-500 hover:border-green-500"
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
      class="w-full ml-auto md:flex md:w-auto"
    >
      <a
        sveltekit:prefetch
        href="/about"
        class="nav-link md:inline-block md:mt-0"
      >
        About
      </a>
      <a
        sveltekit:prefetch
        href="/blog"
        class="nav-link md:inline-block md:mt-0"
      >
        Blog
      </a>
      <a
        sveltekit:prefetch
        href="/services"
        class="nav-link md:inline-block md:mt-0"
      >
        Services
      </a>
      <a
        sveltekit:prefetch
        href="/contact"
        class="nav-link md:inline-block md:mt-0"
      >
        Contact
      </a>
    </nav>
  </div>
</header>

<style>
  .header-box-shadow {
    box-shadow: 0 -0.2rem 0.9rem 0.2rem rgba(0, 0, 0, 0.5);
  }

  header {
    z-index: 1;
  }
</style>
