<script lang="ts">
  import Icon from 'svelte-awesome/components/Icon.svelte';
  import {
    faGithub,
    faLinkedin,
    faReddit,
  } from '@fortawesome/free-brands-svg-icons';
  import { faEnvelope, faRss } from '@fortawesome/free-solid-svg-icons';
  // import { faRss } from 'svelte-awesome/icons';
  import ExternalLink from './ExternalLink.svelte';
  import SpeedlifyFooter from './SpeedlifyFooter.svelte';
  import PrivacyPolicyLink from './PrivacyPolicyLink.svelte';
  // import TermsConditionsLink from './TermsConditionsLink.svelte';
</script>

<footer class="text-green-200 border-t-4 border-green-700 applause-gradient bg-green-800">
  <div
    class="container flex flex-wrap items-top justify-between px-3 py-5 mx-auto"
  >
    <div class="w-full mb-6 sm:mb-0 sm:w-1/3">
      <SpeedlifyFooter />
    </div>

    <div class="w-full mb-6 sm:mb-0 sm:w-1/3">
    <nav
      aria-label="Left footer navigation"
      class="bg-green-900 bg-opacity-40 py-1 px-3 rounded sm:mr-3"
    >
      <a sveltekit:prefetch href="/about" class="footer-link"> About </a>
      <a sveltekit:prefetch href="/blog" class="footer-link"> Blog </a>
      <div class="ml-2">
        <a
          sveltekit:prefetch
          href="/categories/programming"
          class="italic footer-link"
        >
          Programming
        </a>
        <a
          sveltekit:prefetch
          href="/categories/portfolio"
          class="italic footer-link"
        >
          Portfolio
        </a>
        <a
          sveltekit:prefetch
          href="/categories/life"
          class="italic footer-link"
        >
          Life
        </a>
      </div>
    </nav>
    </div>
    <div class="w-full mb-6 sm:mb-0 sm:w-1/3">
    <nav
      aria-label="Right footer navigation"
      class="bg-green-900 bg-opacity-40 py-1 px-3 rounded"
    >
      <a sveltekit:prefetch href="/services" class="footer-link"> Services </a>
      <a sveltekit:prefetch href="/contact" class="footer-link"> Contact </a>
      <!-- <a sveltekit:prefetch href="/resume" class="footer-link"> Resume </a> -->
      <!-- <a sveltekit:prefetch href="/imprint" class="footer-link"> Imprint </a> -->
      
      <PrivacyPolicyLink />

    </nav>
    </div>

    <nav class="w-full mt-6 sm:w-2/3">
      <ExternalLink
        href="mailto:mark@taocode.com"
        ariaLabel="Write an email to me"
        customClass="inline-flex mt-4 lg:mt-0 hover:text-white"
      >
        <Icon data="{faEnvelope}" class="mr-3" scale="{1.5}" />
      </ExternalLink>

      <ExternalLink
        href="https://github.com/taocode"
        ariaLabel="Follow me on GitHub"
        customClass="inline-flex mt-4 lg:mt-0 hover:text-white"
        rel="me"
      >
        <Icon data="{faGithub}" class="mr-3" scale="{1.5}" />
      </ExternalLink>

      <ExternalLink
        href="https://www.linkedin.com/in/taocode/"
        ariaLabel="Network with me on Linkedin"
        customClass="inline-flex mt-4 lg:mt-0 hover:text-white"
      >
        <Icon data="{faLinkedin}" class="mr-3" scale="{1.5}" />
      </ExternalLink>

      <ExternalLink
        href="https://www.reddit.com/user/taocode"
        ariaLabel="Follow me Reddit"
        customClass="inline-flex mt-4 lg:mt-0 hover:text-white"
      >
        <Icon data="{faReddit}" class="mr-3" scale="{1.5}" />
      </ExternalLink>

      <ExternalLink
        href="https://www.taocode.com/rss.xml"
        ariaLabel="Read the RSS feed"
        customClass="inline-flex mt-4 lg:mt-0 hover:text-white"
      >
        <Icon data="{faRss}" class="mr-3" scale="{1.5}" />
      </ExternalLink>
    </nav>

    <div class="w-full mt-0 sm:w-1/3 sm:mt-6">
      <small class="text-sm">
        <span class="hidden md:inline">Copyright</span>
        © 2020 - {new Date().getFullYear()} Mark Jones
      </small>
    </div>
  </div>
</footer>
