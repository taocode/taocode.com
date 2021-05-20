<script>
  import CodeReview from '../../static/code-review.png';
  import IntoTheNight from '../../static/into-the-night.png';
  import Icon from 'svelte-awesome/components/Icon.svelte';
  import { faCheck } from '@fortawesome/free-solid-svg-icons';
  import { faClock } from '@fortawesome/free-regular-svg-icons';

  // adding types throws compiler error for some reason
  // need https://github.com/sveltejs/svelte/pull/4282 to get merged
  export let readableSlug: string;

  const programmingGoals = [
    {
      text: 'Learn Svelte',
      reached: false,
    },
    {
      text: 'Learn TailwindCSS',
      reached: true,
    },
    {
      text: 'Contribute to an Open Source project',
      reached: false,
    },
  ];


  const lifeGoals = [
    {
      text: 'Workout more than 30 minutes a day, 6 days a week',
      reached: true,
    },
    {
      text: 'Fast for 12+ hours every night',
      reached: true,
    },
    {
      text: 'Replace all cleaning products with zero-waste solutions',
      reached: false,
    },
    {
      text: 'Fast for a full day',
      reached: false,
    },
    {
      text: 'Participate in a 140km bike race',
      reached: false,
    },
  ];

  $: isProgrammingCategory = readableSlug !== 'Life';
  $: goals = isProgrammingCategory ? programmingGoals : lifeGoals;
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
<div class="w-full md:w-2/4">
  {#if isProgrammingCategory}
    <img srcset="{CodeReview}" type="image/webp" alt="Man with code editor" />
  {:else}
    <img
      srcset="{IntoTheNight}"
      type="image/webp"
      alt="Man sitting next to campfire"
    />
  {/if}
</div>
