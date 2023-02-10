<script lang="ts">
  import EmpurrorSunNap from '$lib/images/empurror-scratcher-sun-nap.jpg';
  import MillerParkMushrooms from '$lib/images/miller-park-tree-mushrooms.jpg';
  import MillerParkGreenery from '$lib/images/miller-park-greenery.jpg';

  // adding types throws compiler error for some reason
  // need https://github.com/sveltejs/svelte/pull/4282 to get merged
  export let readableSlug: string;

  const accentImage = {
    'Life': {
      'alt': 'Black cat napping in the sun on a cardboard scratcher',
      'img': EmpurrorSunNap,
    },
    'Programming': {
      'alt': "Miller Park green space framed by trees",
      'img': MillerParkGreenery,
    },
    'Portfolio': {
      'alt': "Cherry blossoms on ground and tree",
      'img': MillerParkMushrooms,
    },
  }
  const goalCats = {
    'Programming': [
      {
        text: 'Learn Svelte',
        reached: true,
      },
      {
        text: 'Learn TailwindCSS',
        reached: true,
      },
      {
        text: 'Contribute to an Open Source project',
        reached: false,
      },
    ],
    'Life': [
      {
        text: 'Workout 3+ times a week',
        reached: true,
      },
      {
        text: 'Fast for 12+ hours every night',
        reached: true,
      },
      {
        text: 'Compost kitchen scraps',
        reached: true,
      },
      {
        text: 'Learn to ride an EUC',
        reached: true,
      },
      {
        text: 'Get a bike',
        reached: false,
      },
    ],
    "Portfolio": [
      {
        text: 'Create a Svelte App',
        reached: true,
      },
      {
        text: 'Migrate legacy Drupal 7 site to D9',
        reached: false,
      },
    ],
  }

  $: goals = goalCats[readableSlug];
</script>

<div class="w-full flex-shrink">
  <h1>{readableSlug}</h1>
  <h2>Current goals</h2>

  {#each goals as goal}
    <div class="flex items-baseline italic">
      {#if goal.reached}
        <div class="text-green-500 text-[1.1em] mr-3">
          <div class="i-fa6-solid-check"></div>
        </div>
      {:else}
        <div class="mr-3 text-gray-600">
          <div class="i-fa6-regular-clock"></div>
        </div>
      {/if}
      <p>{goal.text}</p>
    </div>
  {/each}
</div>

