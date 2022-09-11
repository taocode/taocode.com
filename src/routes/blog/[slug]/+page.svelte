<script lang="ts">
	import { browser } from '$app/environment';
	import BlogPost from '$lib/components/blog/BlogPost.svelte';
	// import '$lib/styles/index.scss';
	// import '$lib/styles/normalise.css';
	import lazyload from 'vanilla-lazyload';

	export let data;

	const { page, post, imageData } = data;

	if (browser && !document.lazyloadInstance) {
		document.lazyloadInstance = new lazyload();
	}

</script>

<BlogPost {post} {imageData} />
<div class="post-body prose">
  <svelte:component this={page} />
</div>

<style lang="postcss">
  .post-body {
    @apply mx-auto;
  }
</style>

