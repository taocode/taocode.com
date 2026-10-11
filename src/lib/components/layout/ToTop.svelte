<script>
  import Icon from '@iconify/svelte';
  import Headroom from '@taocode/svelte-headroom';
</script>

<div class="absolute right-[5%] bottom-0 z-20 pr-10">
  <Headroom
    bottom
    hideAtTop
    showAtBottom
    tolerance={20}
    offsetTop={100}
    offsetBottom={300}>
    <div class="mb-6 pt-3">
      <button
        aria-label="back to top"
        class="preset-filled-primary shadow-totop btn inline-block rounded p-2 pt-0 btn-sm"
        onclick={() => {
          window.scroll(0, 0);
        }}>
        <Icon icon="fa6-solid:chevron-up" /></button>
    </div>
  </Headroom>
</div>
