<script lang="ts">
  import { run } from 'svelte/legacy';

  import { createEventDispatcher, onMount } from 'svelte';
  import validate from './validation';

  interface Props {
    duration?: string;
    offset?: number;
    tolerance?: number;
    bottom?: boolean;
    hideAtBottom?: boolean;
    hideAtTop?: boolean;
    showAtBottom?: boolean;
    showAtTop?: boolean;
    styleClass?: string;
    children?: import('svelte').Snippet;
  }

  let {
    duration = '300ms',
    offset = 0,
    tolerance = 0,
    bottom = false,
    hideAtBottom = false,
    hideAtTop = false,
    showAtBottom = false,
    showAtTop = false,
    styleClass = '',
    children,
  }: Props = $props();

  let headerClass = $state('pin');
  let lastHeaderClass = $state('pin');
  let y = $state(0);
  let lastY = 0;
  let atTop: boolean = $state(true);
  let atBottom: boolean = $state(false);
  let win: Window = $state();

  const dispatch = createEventDispatcher();

  onMount(() => {
    win = window;
  });

  function deriveClass(y = 0, scrolled = 0) {
    if (y < offset) return 'pin';
    if (!scrolled || Math.abs(scrolled) < tolerance) return headerClass;
    const dir = scrolled < 0 ? 'down' : 'up';
    if (dir === 'up') return 'pin';
    if (dir === 'down') return 'unpin';
    return headerClass;
  }

  function updateClass(y = 0) {
    const scrolledPxs = lastY - y;
    const result = deriveClass(y, scrolledPxs);
    lastY = y;
    return result;
  }

  function action(node) {
    node.style.transitionDuration = duration;
  }

  run(() => {
    validate({ duration, offset, tolerance });
    headerClass = updateClass(y);
    atTop = y <= 2;
    atBottom =
      win &&
      win.innerHeight + win.pageYOffset >= document?.body.offsetHeight - 2;
    if (headerClass !== lastHeaderClass) {
      dispatch(headerClass ? 'unpin' : 'pin');
    }
    lastHeaderClass = headerClass;
  });
</script>

<svelte:window bind:scrollY={y} />
<div
  use:action
  class={styleClass + ' ' + headerClass}
  class:bottom
  class:atTop
  class:atBottom
  class:showAtTop
  class:hideAtTop
  class:showAtBottom
  class:hideAtBottom>
  {@render children?.()}
</div>

<style>
  div {
    position: fixed;
    width: 100%;
    top: 0;
    transition: transform 300ms linear;
  }
  .bottom {
    top: auto;
    bottom: 0;
    width: auto;
    /* so a single back to top button, for example, doesn't cover (and block) page links */
  }
  .pin,
  .atTop.showAtTop.unpin,
  .atBottom.showAtBottom.unpin {
    transform: translateY(0%);
  }
  .unpin,
  .atTop.hideAtTop,
  .atBottom.hideAtBottom {
    transform: translateY(-100%);
  }
  .bottom.unpin,
  .bottom.atTop.hideAtTop,
  .bottom.atBottom.hideAtBottom {
    transform: translateY(100%);
  }
</style>
