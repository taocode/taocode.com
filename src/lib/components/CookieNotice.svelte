<script>
  import { onMount } from 'svelte'
  import cookies from 'js-cookie'
  import ExternalLink from './ExternalLink.svelte'
  import PrivacyPolicyLink from './layout/PrivacyPolicyLink.svelte'

  // We don't want the cookie notice to flash on every page reload, therefore hidden by default
  export let showCookieNotice = false
  export let didOptOut = false
  export let consentGiven = false

  onMount(() => {
    const hasDNTEnabled =
      navigator.doNotTrack === '1' || window.doNotTrack === '1';
    // Hide cookie notice if the opt-out cookie exists or user has DNT enabled
    if (cookies.get('didOptOut') === 'true' || hasDNTEnabled) {
      didOptOut = true;
    } else {
      // Cookie notice is shown when no sb_uid cookie from Splitbee (user didn't accept or decline yet
      // If sb_uid cookie is there, we know that user consented to Splitbee collection in the past
      consentGiven = !!cookies.get('sb_uid');
      showCookieNotice = !cookies.get('sb_uid');
    }
  });

  const onConfirm = () => {
    showCookieNotice = false;
    consentGiven = true;
  };

  const onDecline = () => {
    cookies.set('didOptOut', 'true', { expires: 365, secure: true });
    showCookieNotice = false;
  };
</script>

{#if showCookieNotice}
  <div
    class="fixed z-10 bottom-0 w-full p-3 text-sm text-center text-white bg-gray-800"
  >
    <p class="mb-3">
      Our website uses cookies to analyze how the site is used and to ensure
      your experience is consistent between visits.
      <PrivacyPolicyLink />
      <ExternalLink
        href="https://www.cookiesandyou.com/"
        customClass="underline"
      >
        Learn more about cookies
      </ExternalLink>
    </p>

    <div class="text-center">
      <button class="mr-3 cookie-notice-btn" on:click="{onConfirm}"
        >Accept</button
      >
      <button class="cookie-notice-btn" on:click="{onDecline}">Decline</button>
    </div>
  </div>
{/if}


<style type="postcss">
  .cookie-notice-btn {
    @apply px-5 py-2 mr-3 font-semibold text-white bg-green-700 rounded text-sm;
  }

  .cookie-notice-btn:hover {
    @apply bg-green-800;
  }
</style>
