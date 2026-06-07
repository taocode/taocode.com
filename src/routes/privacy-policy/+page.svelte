<script>
  import PrivacyPolicyLink from '$lib/components/layout/PrivacyPolicyLink.svelte';
  import { onMount } from 'svelte';
  import SEO from '$lib/components/layout/SEO.svelte';

  onMount(() => {
    const s = document.createElement('script');
    const tag = document.getElementsByTagName('script')[0];
    s.src = 'https://cdn.iubenda.com/iubenda.js';
    tag.parentNode?.insertBefore(s, tag);
  });
</script>

<svelte:head>
  <title>Privacy Policy | Mark Jones</title>
  <meta name="description" content="Privacy policy for taocode.com" />
</svelte:head>

<SEO />
<div class="mj-container container py-12">
  <h1 class="text-center">Privacy Policy</h1>
  <p class="text-center">
    <PrivacyPolicyLink />
  </p>

  <div class="prose mx-auto mt-8 max-w-2xl">
    <h2>What this site uses</h2>
    <ul>
      <li>
        <strong>No analytics cookies</strong> — we do not run Google Analytics, Splitbee,
        or similar trackers.
      </li>
      <li>
        <strong>Google Fonts</strong> — Rubik and Spectral fonts are loaded from Google
        when you visit.
      </li>
      <li><strong>Iubenda</strong> — hosts our privacy policy embed.</li>
      <li>
        <strong>Utterances</strong> — GitHub-based comments on blog posts (GitHub
        may set cookies if you sign in).
      </li>
      <li>
        <strong>Mailchimp</strong> — newsletter signup form; data is sent only when
        you subscribe.
      </li>
      <li>
        <strong>Netlify Forms</strong> — contact form submissions are processed by
        Netlify.
      </li>
    </ul>
    <p>
      Dark mode preference is stored on the page via <code>data-mode</code> on the
      document element, not in a persistent cookie.
    </p>
  </div>
</div>
