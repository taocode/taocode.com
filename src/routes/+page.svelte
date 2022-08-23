<script lang="ts">
  // throw new Error("@migration task: Add data prop (https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292707)");

  import Introduction from '$lib/Introduction.svelte';
  import CurrentProjects from '$lib/CurrentProjects.svelte';
  import Experience from "$lib/Experience.svelte";

  import RecentPosts from '$lib/RecentPosts.svelte';
  import SEO from '$lib/SEO.svelte';
  import type { Post } from '../models/post';
  import ServicesCallToAction from '$lib/ServicesCallToAction.svelte';
  import type { LoadInput } from '@sveltejs/kit/types/page';

  export let data
  export let posts: Post[]
</script>

<svelte:head>
  <title>The Art of Code</title>
  <meta
    name="description"
    content="Personal website and blog with SvelteKit and TailwindCSS."
  />
</svelte:head>

<SEO />

<Introduction />

<Experience />

<RecentPosts posts="{posts}" />

<ServicesCallToAction />

<CurrentProjects />

