<script lang="ts">
  import Icon from '@iconify/svelte';
  // import { faRss } from 'svelte-awesome/icons'
  import ExternalLink from '../ExternalLink.svelte';
  import SpeedlifyFooter from './SpeedlifyFooter.svelte';
  import PrivacyPolicyLink from '../layout/PrivacyPolicyLink.svelte';
  // import TermsConditionsLink from './TermsConditionsLink.svelte'
</script>

<footer
  class="applause-gradient border-t-4 border-green-700 bg-green-800 text-green-200">
  <div
    class="boxed items-top mx-auto flex flex-wrap justify-around gap-2 gap-y-6 py-6 lg:flex-nowrap">
    <div>
      <nav aria-label="Left footer navigation">
        <a data-sveltekit-prefetch href="/about" class="footer-link"> About </a>
        <a data-sveltekit-prefetch href="/blog" class="footer-link"> Blog </a>
        <div class="ml-2">
          <a
            data-sveltekit-prefetch
            href="/categories/programming"
            class="footer-link italic">
            Programming
          </a>
          <a
            data-sveltekit-prefetch
            href="/categories/portfolio"
            class="footer-link italic">
            Portfolio
          </a>
          <a
            data-sveltekit-prefetch
            href="/categories/life"
            class="footer-link italic">
            Life
          </a>
        </div>
      </nav>
    </div>
    <div>
      <nav aria-label="Right footer navigation">
        <a data-sveltekit-prefetch href="/services" class="footer-link">
          Services
        </a>
        <a data-sveltekit-prefetch href="/contact" class="footer-link">
          Contact
        </a>
        <!-- <a data-sveltekit-prefetch href="/resume" class="footer-link"> Resume </a> -->
        <!-- <a data-sveltekit-prefetch href="/imprint" class="footer-link"> Imprint </a> -->

        <PrivacyPolicyLink />
      </nav>
    </div>
    <div class="sm:order-first">
      <SpeedlifyFooter />
    </div>
  </div>
  <div class="mx-auto text-center">
    <nav class="social">
      <ExternalLink
        href="mailto:mark@taocode.com"
        ariaLabel="Write an email to me"
        customClass="inline-flex mt-4 lg:mt-0 hover:text-white">
        <Icon icon="fa6-solid:envelope" class="icon" />
      </ExternalLink>
      <ExternalLink
        href="https://github.com/taocode"
        ariaLabel="Follow me on GitHub"
        customClass="inline-flex mt-4 lg:mt-0 hover:text-white"
        rel="me">
        <Icon icon="fa6-brands:github" class="icon" />
      </ExternalLink>
      <ExternalLink
        href="https://www.linkedin.com/in/taocode/"
        ariaLabel="Network with me on Linkedin"
        customClass="inline-flex mt-4 lg:mt-0 hover:text-white">
        <Icon icon="fa6-brands:linkedin" class="icon" />
      </ExternalLink>
      <ExternalLink
        href="https://www.reddit.com/user/taocode"
        ariaLabel="Follow me Reddit"
        customClass="inline-flex mt-4 lg:mt-0 hover:text-white">
        <Icon icon="fa6-brands:reddit" class="icon" />
      </ExternalLink>
      <ExternalLink
        href="https://www.taocode.com/rss.xml"
        ariaLabel="Read the RSS feed"
        customClass="inline-flex mt-4 lg:mt-0 hover:text-white">
        <Icon icon="fa6-solid:rss" class="icon" />
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

<style lang="postcss">
  @reference "../../../app.css";
  nav {
    @apply p-3;
  }
  .boxed nav {
    @apply rounded bg-green-900/40;
  }
  .social {
    @apply mt-6 flex justify-center gap-[0.75em];
  }
  :global(.icon) {
    @apply text-[1.34em];
  }
</style>
