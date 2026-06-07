<script lang="ts">
  import { fade } from 'svelte/transition';
  import Icon from '@iconify/svelte';
  import SEO from '$lib/components/layout/SEO.svelte';
  import ExternalLink from '$lib/components/ExternalLink.svelte';

  let didSubmit = $state(false);

  async function handleSubmit(event: SubmitEvent) {
    event.preventDefault();
    const form = event.currentTarget as HTMLFormElement;
    const body = new URLSearchParams(new FormData(form) as unknown as Record<string, string>).toString();

    try {
      await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body
      });
      form.reset();
      didSubmit = true;
      setTimeout(() => {
        didSubmit = false;
      }, 5000);
    } catch (submitError) {
      console.error(submitError);
    }
  }
</script>

<svelte:head>
  <title>Contact | Mark Jones</title>
  <meta
    name="description"
    content="If you want to say hello, the best way you can reach me is through these channels below."
  />
</svelte:head>

<SEO />

<section class="container mj-container">
  <h1>Contact for business inquiries</h1>

  <p>
    You can find an overview of the services that I offer under the
    <a href="/services" data-sveltekit-prefetch>Services</a>
    tab. I will get back to you within 48 hours.
  </p>
  <form
    name="contact"
    class="mt-3 mb-8"
    netlify-honeypot="bot-field"
    data-netlify="true"
    onsubmit={handleSubmit}
  >
    <div
      class="flex flex-wrap p-3 bg-gray-light border border-gray-500 rounded dark:border-gray-700"
    >
      <input type="hidden" name="form-name" value="contact" />
      <input type="text" name="bot-field" class="hidden" />
      <div class="w-1/2 px-2 my-2">
        <label for="name">Name</label>
        <input
          type="text"
          name="name"
          id="name"
          required
          minlength="2"
          class="w-full text-gray-700 border border-gray-400 rounded hover:border-gray-500"
        />
      </div>

      <div class="w-1/2 px-2 my-2">
        <label for="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          required
          class="w-full text-gray-700 border border-gray-400 rounded hover:border-gray-500"
        />
      </div>

      <div class="w-full px-2 my-2">
        <label for="comment">Comment</label>
        <textarea
          rows="5"
          name="comment"
          id="comment"
          required
          class="w-full text-gray-700 border border-gray-400 rounded hover:border-gray-500"
        ></textarea>
      </div>

      <div class="w-full px-2 my-2">
        <button
          type="submit"
          class="btn preset-filled-primary-700-300 w-full text-lg rounded"
        >
          Submit
        </button>
      </div>

      {#if didSubmit}
        <div class="w-full px-2 my-2" transition:fade|global>
          <div class="preset-filled-success-100-900 p-4 rounded flex items-center gap-3">
            <Icon icon="fa6-solid:circle-check" class="text-[1.5em]" />
            Message submitted successfully!
          </div>
        </div>
      {/if}
    </div>
  </form>

  <div class="md:flex gap-x-6">
    <div class="md:max-w-2/5">
      <h2>Projects That Interest Me</h2>
      <ul>
        <li>awesome animations</li>
        <li>medium duration; one quarter to half year with follow-up projects</li>
        <li>remote only or near Winston-Salem, North Carolina</li>
      </ul>
    </div>
    <div>
      <h2>Serious Inquiry?</h2>
      <p>As best as you can estimate, please answer any of these:</p>
      <ul>
        <li>How many hours are needed?</li>
        <li>Approximate deadline?</li>
        <li>Type of company? (Startup, Midsize or large corporation)</li>
        <li>Years in business?</li>
        <li>How did you hear about us?</li>
        <li>Why did you decide to work with us?</li>
      </ul>
    </div>
  </div>

  <h2>Not convinced?</h2>
  <p>
    You can find my up-to-date CV under
    <a data-sveltekit-prefetch href="/resume">Resume</a>
    for all my professional references and experience.
  </p>

  <h2>Across the web</h2>
  <p>If you just want to say hello, the best way you can reach me is through these channels below.</p>

  <div class="biglinks">
    <ExternalLink
      href="mailto:mark@taocode.com"
      ariaLabel="Write me a mail"
      customClass="inline-flex text-green-900 hover:text-green-700"
    >
      <Icon icon="fa6-solid:envelope" class="icon" />
    </ExternalLink>
    <ExternalLink
      href="https://github.com/taocode"
      ariaLabel="Follow me on GitHub"
      customClass="inline-flex text-green-900 hover:text-green-700"
    >
      <Icon icon="fa6-brands:github" class="icon" />
    </ExternalLink>
    <ExternalLink
      href="https://www.linkedin.com/in/taocode/"
      ariaLabel="Network with me on Linkedin"
      customClass="inline-flex text-green-900 hover:text-green-700"
    >
      <Icon icon="fa6-brands:linkedin" class="icon" />
    </ExternalLink>
  </div>

  <div class="flex flex-wrap">
    <div class="w-full sm:w-1/3">
      <h3>Found an unexpected bug?</h3>
      <ExternalLink href="https://github.com/taocode/taocode.com/issues/new" customClass="inline-flex">
        Submit issue
        <Icon icon="feather:external-link" class="icon" />
      </ExternalLink>
    </div>
    <div class="w-full sm:w-1/3">
      <h3>Improvements for the website?</h3>
      <ExternalLink href="https://github.com/taocode/taocode.com/issues/new" customClass="inline-flex">
        Request feature
        <Icon icon="feather:external-link" class="icon" />
      </ExternalLink>
    </div>
    <div class="w-full sm:w-1/3">
      <h3>Got a blog post topic proposal?</h3>
      <ExternalLink href="https://github.com/taocode/taocode.com/issues/new" customClass="inline-flex">
        Suggest content
        <Icon icon="feather:external-link" class="icon" />
      </ExternalLink>
    </div>
  </div>
</section>

<style lang="postcss">
  @reference "../../app.css";
  label {
    @apply font-display text-sm font-bold tracking-wide text-gray-700 dark:text-gray-300 mb-2;
  }
  .biglinks {
    @apply flex flex-wrap mb-6 gap-6;
    :global(.icon) {
      @apply text-[1.75em];
    }
  }
  :global(.icon) {
    @apply text-[1.34em] ml-2;
  }
</style>
