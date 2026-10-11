<script lang="ts">
  import Icon from '@iconify/svelte';
  import { browser } from '$app/env';

  interface Props {
    enabled?: boolean;
  }

  let {
    enabled = $bindable(
      browser && document
        ? document.documentElement?.getAttribute('data-mode') === 'dark'
        : true,
    ),
  }: Props = $props();

  $effect(() => {
    if (browser && document) {
      document.documentElement?.setAttribute(
        'data-mode',
        enabled ? 'dark' : 'light',
      );
    }
  });

  const toggle = () => {
    enabled = !enabled;
  };
</script>

<button
  type="button"
  title="Toggle Dark Mode"
  class:bg-gray-800={enabled}
  class="focus:ring-offset relative inline-flex h-8 w-5 flex-shrink-0 cursor-pointer rounded border-2 border-transparent bg-gray-500 transition-colors duration-200 ease-in-out focus:ring focus:ring-green-500 focus:outline-none dark:bg-gray-700 dark:text-gray-200"
  aria-pressed={enabled}
  onclick={toggle}>
  <span class="sr-only">Use setting</span>
  <div
    class="{enabled
      ? 'translate-y-3 rounded-b bg-gray-800'
      : 'translate-y-0 rounded-t'} pointer-events-none relative inline-block h-4 w-4 transform bg-white ring-0 transition duration-200 ease-in-out dark:bg-black dark:text-white">
    <div
      class="{enabled
        ? 'opacity-0'
        : 'opacity-100'} absolute flex h-full w-full items-center justify-center p-[2.5px] transition-opacity duration-75 duration-200 ease-in"
      aria-hidden="true">
      <Icon icon="carbon:sun" />
    </div>
    <div
      class="{enabled
        ? 'opacity-100 duration-200 ease-in'
        : 'opacity-0 duration-100 ease-out'} absolute inset-0 flex h-full w-full items-center justify-center p-[1.75px] transition-opacity duration-75"
      aria-hidden="true">
      <Icon icon="carbon:moon" />
    </div>
  </div>
</button>
