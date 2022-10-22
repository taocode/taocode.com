<script lang="ts">
  import Icon from 'svelte-awesome'
  import {
    faGithub,
    faLinkedin,
    faReddit,
  } from '@fortawesome/free-brands-svg-icons'
  import { faEnvelope, faRss } from '@fortawesome/free-solid-svg-icons'
  // import { faRss } from 'svelte-awesome/icons'
  import ExternalLink from '../ExternalLink.svelte'
  import SpeedlifyFooter from './SpeedlifyFooter.svelte'
  import PrivacyPolicyLink from '../layout/PrivacyPolicyLink.svelte'
  // import TermsConditionsLink from './TermsConditionsLink.svelte'
</script>

<style lang="postcss">
  nav {
    @apply p-3;
  }
  .boxed nav {
    @apply bg-green-900 bg-opacity-40 rounded;
  }
  .social {
    @apply mt-6;
  }
</style>

<footer class="text-green-200 border-t-4 border-green-700 applause-gradient bg-green-800">
  <div
    class="boxed flex gap-2 gap-y-6 flex-wrap items-top justify-around py-6 mx-auto lg:flex-nowrap"
  >

    <div>
      <nav
        aria-label="Left footer navigation"
        
      >
        <a data-sveltekit-prefetch href="/about" class="footer-link"> About </a>
        <a data-sveltekit-prefetch href="/blog" class="footer-link"> Blog </a>
        <div class="ml-2">
          <a
            data-sveltekit-prefetch
            href="/categories/programming"
            class="italic footer-link"
          >
            Programming
          </a>
          <a
            data-sveltekit-prefetch
            href="/categories/portfolio"
            class="italic footer-link"
          >
            Portfolio
          </a>
          <a
            data-sveltekit-prefetch
            href="/categories/life"
            class="italic footer-link"
          >
            Life
          </a>
        </div>
      </nav>
    </div>
    <div>
      <nav
        aria-label="Right footer navigation"
        
      >
        <a data-sveltekit-prefetch href="/services" class="footer-link"> Services </a>
        <a data-sveltekit-prefetch href="/contact" class="footer-link"> Contact </a>
        <!-- <a data-sveltekit-prefetch href="/resume" class="footer-link"> Resume </a> -->
        <!-- <a data-sveltekit-prefetch href="/imprint" class="footer-link"> Imprint </a> -->
        
        <PrivacyPolicyLink />

      </nav>
    </div>
    <div class="sm:order-first">
      <SpeedlifyFooter />
    </div>

  </div>
  <div class="text-center mx-auto">
    <nav class="social">
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
    <div class="px-3">
      <small class="text-sm">
        <span class="hidden md:inline">Copyright</span>
        © 2020 - {new Date().getFullYear()} Mark Jones
      </small>
    </div>
  </div>
</footer>
