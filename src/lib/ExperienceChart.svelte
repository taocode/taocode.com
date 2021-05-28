<script>
import { fade } from 'svelte/transition';
import * as Pancake from '@sveltejs/pancake';
import techEx from './experience';

const colors = ['bg-green-650', 'bg-green-650', 'bg-green-650', 'bg-green-650', 'bg-green-650', 'bg-green-650', 'bg-green-600'];

const techs = ['years'];
let dChildren = techEx; 
// dChildren = techEx[0].children
let stacks;
let currentChild;
$: {
  stacks = Pancake.stacks(dChildren, techs, 'name');
// console.log('stacks:',stacks);
 }
		
$: max = stacks.reduce((max, stack) => Math.max(max, ...stack.values.map(v => v.end)), 0);

</script>
<style lang="postcss">
	.chart {
		position: relative;
	}

	.grid-line {
		position: relative;
		display: block;
	}

	.grid-line.horizontal {
		width: calc(100% + 3em);
		left: -3em;
	}

	.grid-line.vertical {
		height: 100%;
		border-left: 1px dashed #ccc;
	}

	.grid-line span {
		position: absolute;
		left: 0;
		bottom: -0.5em;
		font-family: sans-serif;
		font-size: 14px;
		color: #999;
		line-height: 1;
	}

	.x-label {
    @apply absolute text-gray-500;
		width: 4em;
		left: -2em;
		bottom: -2em;
		font-family: sans-serif;
		font-size: 14px;
		text-align: center;
	}
  .x-meta-label {
    @apply text-center pointer-events-none pt-4 text-base font-display text-gray-500;
  }

	.box {
		position: absolute;
		left: 0;
		top: 2px;
		width: 100%;
		height: calc(100% - 4px);
		border-radius: 2px;
	}
  .has-children {
    cursor: pointer;
  }
  .has-children:hover {
    @apply bg-green-800;
  }
  .overview {
    @apply text-white cursor-auto pointer-events-none border-gray-200 border-2 border-opacity-25 
  transition duration-200 ease-out ;
  }
  .activated {
    @apply text-primary cursor-pointer pointer-events-auto;
  }
  .activated:hover {
    @apply border-gray-900 bg-gray-700 shadow-glow-primary;
  }
</style>

<div class="chart -mt-3 lg:-mt-10 lg:pl-3 max-w-screen-sm mx-auto">
  <button class="overview font-display text-sm uppercase py-1 px-2 my-2 rounded"
  class:activated={currentChild}
  on:click={() => { dChildren = techEx; currentChild = ''; }}>Overview</button>
  {#if currentChild}
  <span transition:fade class="inline-block font-display text-sm px-2">{currentChild}</span>
  {/if}
  <Pancake.Chart x1={0} x2={max} y1={3.5} y2={-0.5}>
    <Pancake.Grid horizontal count={techEx.length} let:value let:first>
      <div transition:fade class="grid-line horizontal"></div>
    </Pancake.Grid>

    <Pancake.Grid vertical count={5} let:value>
      <div transition:fade class="grid-line vertical"></div>
      <span class="x-label">{value}</span>
    </Pancake.Grid>

    {#each stacks as stack, i}
      {#each stack.values as d, n}
      
        <Pancake.Box
          x1="{d.start}"
          x2="{d.end}"
          y1="{n - 0.5}"
          y2="{n + 0.5}"
        >
          <div class="box pl-2 py-2 absolute left-0 {colors[n]} transition duration-150
           opacity-80 hover:opacity-100"
          class:has-children={dChildren[n].children}
          on:click={()=>{ if (!currentChild && techEx[n].children) {
            dChildren =  techEx[n].children;
            currentChild = techEx[n].name
            }; }}></div>
        </Pancake.Box>
        <label class="relative pointer-events-none z-0 p-2 block font-display text-sm text-gray-300 font-semibold">{dChildren[n].name}</label>
      {/each}
    {/each}
  </Pancake.Chart>
  <div class="x-meta-label ">Years of Experience</div>
</div>