<script>
  import Icon from 'svelte-awesome';
  import { chevronUp } from 'svelte-awesome/icons';
  import Headroom from "./headroom/index.svelte";
  // import Headroom from "@taocode/svelte-headroom";
</script>

<Headroom styleClass="z-20 w-auto right-0" bottom={true} hideAtTop={true} showAtBottom={true}>
  <div 
  class="pr-6 pb-6 md:pr-10 lg:pr-24 xl:pr-48 text-right mx-auto max-w-screen-xl">
  <button aria-label="back to top" class="btn-primary rounded shadow-totop inline-block pb-2 pt-0 px-2" on:click={()=>{ window.scroll(0,0) }}><Icon data={chevronUp}/></button></div>
</Headroom>

