<script>
  import ExternalLink from './ExternalLink.svelte'
</script>

<div class="subscribe-follow mb-16">
  <header class="topic-box">
    <h2>Subscribe & Follow</h2>
  </header>
  <div class="links">
    <ExternalLink
      href="https://github.com/taocode"
      ariaLabel="Follow me on GitHub"
      customClass="inline-flex text-green-900 hover:text-green-700"
    >
      <div class="i-fa6-brands-github"></div>
    </ExternalLink>
    <ExternalLink
      href="https://www.linkedin.com/in/taocode/"
      ariaLabel="Network with me on Linkedin"
      customClass="inline-flex text-green-900 hover:text-green-700"
    >
      <div class="i-fa6-brands-linkedin"></div>
    </ExternalLink>

    <ExternalLink
      href="https://www.reddit.com/user/taocode"
      ariaLabel="Follow me Reddit"
      customClass="inline-flex text-green-900 hover:text-green-700"
    >
      <div class="i-fa6-brands-reddit"></div>
    </ExternalLink>

    <ExternalLink
      href="https://www.taocode.com/rss.xml"
      ariaLabel="Read the RSS feed"
      customClass="inline-flex text-green-900 hover:text-green-700"
    >
      <div class="i-fa6-solid-rss"></div>
    </ExternalLink>
  </div>
</div>
<style lang="postcss">
  .subscribe-follow {
    @apply text-[2em];
  }
  .links {
    @apply flex flex-wrap gap-3 justify-center mt-5;
  }
</style>