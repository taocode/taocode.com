<script lang="ts">
  import Introduction from '$lib/Introduction.svelte'
  import CurrentProjects from '$lib/CurrentProjects.svelte'
  import Experience from "$lib/Experience.svelte"

  import RecentPosts from '$lib/RecentPosts.svelte'
  import SEO from '$lib/SEO.svelte'
  import type { Post } from '$lib/models/post'
  import ServicesCallToAction from '$lib/ServicesCallToAction.svelte'

  import { posts } from '$lib/stores'

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

<RecentPosts />

<ServicesCallToAction />

<CurrentProjects />

