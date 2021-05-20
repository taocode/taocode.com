<script>
  import { onMount } from 'svelte';
  import SEO from '$lib/SEO.svelte';

  onMount(() => {
    var s = document.createElement('script'),
      tag = document.getElementsByTagName('script')[0];
    s.src = 'https://cdn.iubenda.com/iubenda.js';
    tag.parentNode.insertBefore(s, tag);
  });
</script>

<svelte:head>
  <title>Terms and conditions | TAOCode</title>

  <meta
    name="description"
    content="Terms and conditions for taocode.com"
  />
</svelte:head>

<SEO />

<span>
  <!-- todo: terms and conditions with iubenda? maybe -->
  <a
    href="https://www.iubenda.com/terms-and-conditions/82646403"
    class="iubenda-white no-brand iubenda-embed iub-body-embed"
    title="Terms and Conditions">Terms and Conditions</a
  >
</span>
