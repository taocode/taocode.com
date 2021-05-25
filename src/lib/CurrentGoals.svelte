<script>
  import EmpurrorSunNap from '../../static/empurror-scratcher-sun-nap.jpg';
  import MillerParkMushrooms from '../../static/miller-park-tree-mushrooms.jpg';
  import MillerParkGreenery from '../../static/miller-park-greenery.jpg';
  import Icon from 'svelte-awesome/components/Icon.svelte';
  import { faCheck } from '@fortawesome/free-solid-svg-icons';
  import { faClock } from '@fortawesome/free-regular-svg-icons';

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
        text: 'Workout 30+ minutes a day',
        reached: true,
      },
      {
        text: 'Fast for 12+ hours every night',
        reached: true,
      },
      {
        text: 'Compost kitchen scraps',
        reached: false,
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

<div class="w-full md:w-2/4">
  <h1>{readableSlug}</h1>
  <h2>Current goals</h2>

  {#each goals as goal}
    <div class="flex items-baseline italic">
      {#if goal.reached}
        <Icon data="{faCheck}" class="mr-3 text-green-500" />
      {:else}
        <Icon data="{faClock}" class="mr-3 text-gray-600" />
      {/if}
      <p>{goal.text}</p>
    </div>
  {/each}
</div>
<div class="w-3/4 md:w-2/4">
    <img srcset="{accentImage[readableSlug]['img']}" type="image/webp" alt="{accentImage[readableSlug]['alt']}" />
</div>
