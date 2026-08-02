<script>
  import { fade } from 'svelte/transition';
  import * as Pancake from '@sveltejs/pancake';
  import techEx from './experience';

  const techs = ['years'];
  let dChildren = $state(techEx);
  let stacks = $derived(Pancake.stacks(dChildren, techs, 'name'));
  let currentChild = $state('');

  let max = $derived(
    stacks.reduce(
      (max, stack) => Math.max(max, ...stack.values.map((v) => v.end)),
      0,
    ),
  );

  const showChild = (n) => {
    if (!currentChild && techEx[n].children) {
      dChildren = techEx[n].children;
      currentChild = techEx[n].name;
    }
  };
  const showOverview = () => {
    dChildren = techEx;
    currentChild = '';
  };

  const barTitle = (item) => {
    const status = item.active ? 'active' : 'frozen';
    const pct = Math.round(item.intensity * 100);
    const yearsPart =
      item.intensity < 1
        ? `${item.years} yr effective (${item.calendarYears} calendar × ${pct}%)`
        : `${item.years} yr`;
    if (item.blurb) {
      return `${item.name}: ${item.blurb} (${yearsPart}, ${status})`;
    }
    return `${yearsPart} of experience with ${item.name} (${status})`;
  };
</script>

<div class="chart -mt-3 lg:-mt-10 lg:pl-3 max-w-screen-sm mx-auto">
  <button
    class="overview font-display text-sm uppercase py-1 px-2 my-2 rounded"
    class:activated={currentChild}
    onclick={showOverview}>Overview</button>
  {#if currentChild}
    <span transition:fade|global class="inline-block font-display text-sm px-2"
      >{currentChild}</span>
  {/if}
  <Pancake.Chart x1={0} x2={max} y1={dChildren.length - 0.5} y2={-0.5}>
    <Pancake.Grid horizontal count={dChildren.length}>
      {#snippet children({ value, first })}
        <div transition:fade|global class="grid-line horizontal"></div>
      {/snippet}
    </Pancake.Grid>

    <Pancake.Grid vertical count={5}>
      {#snippet children({ value })}
        <div transition:fade|global class="grid-line vertical"></div>
        <span class="x-label">{value}</span>
      {/snippet}
    </Pancake.Grid>

    {#each stacks as stack, i (i)}
      {#each stack.values as d, n (dChildren[n].name)}
        <Pancake.Box x1={d.start} x2={d.end} y1={n - 0.5} y2={n + 0.5}>
          <button
            class="experience box pl-2 py-2 absolute left-0 transition duration-150
           opacity-80 hover:opacity-100"
            class:frozen={!dChildren[n].active}
            disabled={!dChildren[n].children}
            class:has-children={dChildren[n].children}
            title={barTitle(dChildren[n])}
            onclick={() => showChild(n)}></button>
        </Pancake.Box>
        <div
          class="relative pointer-events-none z-0 p-2 block font-display text-sm font-semibold"
          class:text-gray-300={dChildren[n].active}
          class:text-gray-500={!dChildren[n].active}>
          {dChildren[n].name}
        </div>
      {/each}
    {/each}
  </Pancake.Chart>
  <div class="x-meta-label">Years of Experience</div>
</div>

<style lang="postcss" global>
  @reference "../../../app.css";
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
    @apply pointer-events-none pt-4 text-center font-display text-base text-gray-500;
  }

  .box {
    position: absolute;
    left: 0;
    top: 2px;
    width: 100%;
    height: calc(100% - 4px);
    border-radius: 2px;
  }
  button.experience {
    @apply bg-green-750;
    &:not([disabled]):hover {
      @apply bg-green-800;
    }
    &[disabled] {
      @apply cursor-default;
    }
    &.frozen {
      @apply bg-gray-600 opacity-50;
      &:hover {
        @apply bg-gray-500 opacity-70;
      }
    }
  }
  .overview {
    @apply pointer-events-none cursor-auto border-2 border-gray-200/25 text-white transition duration-200 ease-out;
  }
  .activated {
    @apply pointer-events-auto cursor-pointer text-primary-500;
  }
  .activated:hover {
    @apply border-gray-900 bg-gray-700;
  }
</style>
