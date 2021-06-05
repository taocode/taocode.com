<script context="module">
  export async function load({ fetch }: LoadInput) {
    const blog = await fetch(`/blog.json`);
    const posts = await blog.json();

    return {
      props: {
        posts,
      },
    };
  }
</script>

<script lang="ts">
  import Introduction from '$lib/Introduction.svelte';
  import CurrentProjects from '$lib/CurrentProjects.svelte';
  import Experience from "$lib/Experience.svelte";

  import RecentPosts from '$lib/RecentPosts.svelte';
  import SEO from '$lib/SEO.svelte';
  import type { Post } from '../models/post';
  import ServicesCallToAction from '$lib/ServicesCallToAction.svelte';
  import type { LoadInput } from '@sveltejs/kit/types/page';

  export let posts: Post[];
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

