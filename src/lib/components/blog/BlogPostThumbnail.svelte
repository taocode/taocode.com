<script>
	import { onMount } from 'svelte';
	import { browser } from '$app/environment';
	import { Image } from '@rodneylab/sveltekit-components';

	export let imageData;

	onMount(() => {
		if (browser) {
			document.lazyloadInstance.update();
		}
	});

	const { alt, width, height, src, sources, placeholder } = imageData;
	const sizes = '(max-width: 672px) calc(100vw - 32px), 672px';
  const style = `
  max-width: 100%;`
</script>
<div class="max-w-full">
  <Image
    {alt}
    {width}
    loading="eager"
    {height}
    {src}
    {sources}
    {placeholder}
    {sizes}
    {style}
  />
</div>
