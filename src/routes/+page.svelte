<script lang="ts">
  import { page } from '$app/state';
  import Introduction from '$lib/components/content/Introduction.svelte';
  import CurrentProjects from '$lib/components/content/CurrentProjects.svelte';
  import Experience from '$lib/components/experience/Experience.svelte';
  import RecentPosts from '$lib/components/blog/RecentPosts.svelte';
  import SEO from '$lib/components/layout/SEO.svelte';
  import ServicesCallToAction from '$lib/components/content/ServicesCallToAction.svelte';

  const posts = $derived(page.data.posts ?? []);
</script>

<svelte:head>
  <title>The Art of Code</title>
  <meta name="description" content="Personal website and blog with SvelteKit and TailwindCSS." />
</svelte:head>

<SEO />

<Introduction />

<Experience />

<RecentPosts {posts} />

<ServicesCallToAction />

<CurrentProjects />
