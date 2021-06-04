<script>
  import { onMount } from 'svelte';
  import Icon from 'svelte-awesome';
  import { chevronUp } from 'svelte-awesome/icons';
  import Headroom from "./headroom/index.svelte";

</script>

<Headroom bottom={true}>
  <div 
  class="pr-6 pb-6 md:pr-10 lg:pr-24 xl:pr-48 text-right mx-auto max-w-screen-xl">
  <button aria-label="back to top" class="btn-primary rounded shadow-totop inline-block pb-2 pt-0 px-2" on:click={()=>{ window.scroll(0,0) }}><Icon data={chevronUp}/></button></div>
</Headroom>

