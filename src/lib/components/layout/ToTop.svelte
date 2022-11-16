<script>
  import Icon from 'svelte-awesome'
  import { chevronUp } from 'svelte-awesome/icons'
  import Headroom from '@taocode/svelte-headroom'
</script>

<div class="z-20 right-[5%] absolute bottom-0 pr-10">
<Headroom bottom hideAtTop showAtBottom tolerance={20} offsetTop={100} offsetBottom={300}>
  <div class="pt-2 pb-10">
  <button aria-label="back to top" class="btn-primary rounded shadow-totop inline-block p-2 pt-0" on:click={()=>{ window.scroll(0,0) }}><Icon data={chevronUp}/></button></div>
</Headroom>
</div>
