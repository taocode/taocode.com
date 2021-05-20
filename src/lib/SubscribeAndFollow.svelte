<script>
  import Icon from 'svelte-awesome/components/Icon.svelte';
  import {
    faTwitter,
    faMedium,
    faGithub,
    faLinkedin,
    faDev,
    faReddit,
  } from '@fortawesome/free-brands-svg-icons';
  import { faRss } from '@fortawesome/free-solid-svg-icons';
  import ExternalLink from './ExternalLink.svelte';
</script>

<div class="mb-16">
  <header class="topic-box">
    <h2>Subscribe & Follow</h2>
  </header>
  <div class="flex flex-wrap justify-center mt-5">
    <ExternalLink
      href="https://github.com/taocode"
      ariaLabel="Follow me on GitHub"
      customClass="inline-flex text-green-900 hover:text-green-700"
    >
      <Icon data="{faGithub}" class="m-3" scale="{2}" />
    </ExternalLink>
    <ExternalLink
      href="https://www.linkedin.com/in/taocode/"
      ariaLabel="Network with me on Linkedin"
      customClass="inline-flex text-green-900 hover:text-green-700"
    >
      <Icon data="{faLinkedin}" class="m-3" scale="{2}" />
    </ExternalLink>

    <ExternalLink
      href="https://www.reddit.com/user/taocode"
      ariaLabel="Follow me Reddit"
      customClass="inline-flex text-green-900 hover:text-green-700"
    >
      <Icon data="{faReddit}" class="m-3" scale="{2}" />
    </ExternalLink>

    <ExternalLink
      href="https://taocode.com/rss.xml"
      ariaLabel="Read the RSS feed"
      customClass="inline-flex text-green-900 hover:text-green-700"
    >
      <Icon data="{faRss}" class="m-3" scale="{2}" />
    </ExternalLink>
  </div>
</div>
