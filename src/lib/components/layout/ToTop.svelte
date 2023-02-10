<script>
  import Headroom from '@taocode/svelte-headroom'
</script>

<div class="z-20 right-[5%] absolute bottom-0 pr-10">
<Headroom bottom hideAtTop showAtBottom tolerance={20} offsetTop={100} offsetBottom={300}>
  <div class="pt-3 mb-6">
  <button aria-label="back to top" class="btn-primary rounded shadow-totop inline-block p-2 pt-0" on:click={()=>{ window.scroll(0,0) }}>
  <div class="i-fa6-solid-chevron-up"></div></button></div>
</Headroom>
</div>
