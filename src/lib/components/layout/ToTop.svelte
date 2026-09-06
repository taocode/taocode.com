<script>
  import Icon from '@iconify/svelte';
  import Headroom from '@taocode/svelte-headroom';
</script>

<div class="z-20 right-[5%] absolute bottom-0 pr-10">
  <Headroom
    bottom
    hideAtTop
    showAtBottom
    tolerance={20}
    offsetTop={100}
    offsetBottom={300}>
    <div class="pt-3 mb-6">
      <button
        aria-label="back to top"
        class="btn btn-sm preset-filled-primary rounded shadow-totop inline-block p-2 pt-0"
        onclick={() => {
          window.scroll(0, 0);
        }}>
        <Icon icon="fa6-solid:chevron-up" /></button>
    </div>
  </Headroom>
</div>
