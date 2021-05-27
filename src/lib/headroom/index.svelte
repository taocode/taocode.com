<script>
  import { createEventDispatcher, onMount } from "svelte";
  import validate from "./validation";

  export let duration = "300ms";
  export let offset = 0;
  export let tolerance = 0;
  export let bottom = false;

  let headerClass = "";
  let lastHeaderClass = "";
  let y = 0;
  let lastY = 0;
  let prefix = "svelte-headroom--";
  let attop = true;
  let atbottom = false;
  let win;

  const dispatch = createEventDispatcher();

  onMount(() => {
    win = window;
  });

  function deriveClass(y = 0, scrolled = 0) {
    if (y < offset) return "";
    if (Math.abs(scrolled) < tolerance) return headerClass;
    if (scrolled > 0) return "";
    if (scrolled < 0) return `${prefix}unpin`;
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

  $: {
    validate({ duration, offset, tolerance });
    headerClass = updateClass(y);
    attop = y <= 2;
    atbottom = win && (win.innerHeight + win.pageYOffset) >= document.body.offsetHeight - 2;
    if (headerClass !== lastHeaderClass) {
      dispatch(headerClass ? "unpin" : "pin");
    }
    lastHeaderClass = headerClass;
  }
</script>

<style>
  div {
    position: fixed;
    width: 100%;
    top: 0;
    transition: transform 300ms linear;
    transform: translateY(0%);
    z-index: 20;
  }
  .svelte-headroom--unpin {
    transform: translateY(-110%);
  }
  .atbottom.svelte-headroom--unpin {
    transform: translateY(0);
  }
  .bottom,
  .bottom.atbottom.svelte-headroom--unpin {
    top: auto;
    bottom: 0;
    width: auto;
    right: 0;
    transform: translateY(0);
  }
  .svelte-headroom--unpin.bottom,
  .bottom.attop {
    transform: translateY(110%);
  }
</style>

<svelte:window bind:scrollY={y} />
<div use:action class={headerClass} class:bottom class:attop class:atbottom>
  <slot /><button hidden></button>
</div>
