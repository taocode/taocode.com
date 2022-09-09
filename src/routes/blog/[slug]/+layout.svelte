<script>
	import lazyload from 'vanilla-lazyload';
	import { browser } from '$app/environment';
	import { onMount } from 'svelte';

	if (browser && !document.lazyloadInstance) {
		document.lazyloadInstance = new lazyload();
	}
</script>

<slot />
