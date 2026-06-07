<script>
  import PrivacyPolicyLink from '$lib/components/layout/PrivacyPolicyLink.svelte'
  import { onMount } from 'svelte'
  import SEO from '$lib/components/layout/SEO.svelte'

  onMount(() => {
    var s = document.createElement('script'),
      tag = document.getElementsByTagName('script')[0];
    s.src = 'https://cdn.iubenda.com/iubenda.js'
    tag.parentNode.insertBefore(s, tag)
  });
</script>

<svelte:head>
  <title>Privacy Policy | Mark Jones</title>

  <meta name="description" content="Privacy policy for taocode.com" />
</svelte:head>

<SEO />
<div class="mj-container container py-12 text-center">
  <h1>Privacy Policy</h1>
  <p>
  Click the button for taocode.com's privacy policy:
  </p><p>
  <PrivacyPolicyLink />
  </p>
</div>