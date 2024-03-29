<script lang="ts">
  import { fade } from 'svelte/transition'
  import { createForm } from 'svelte-forms-lib'
  import * as yup from 'yup'
  import axios from 'redaxios'
  import SEO from '$lib/components/layout/SEO.svelte'
  import ExternalLink from '$lib/components/ExternalLink.svelte'

  let didSubmit = false;

  const encode = (data: any) => {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]),
      )
      .join('&');
  };

  const {
    form,
    errors,
    isValid,
    isSubmitting,
    handleChange,
    handleSubmit,
    handleReset,
  } = createForm({
    initialValues: {
      name: '',
      email: '',
      comment: '',
    },
    validationSchema: yup.object().shape({
      name: yup
        .string()
        .required('Name is a required field.')
        .min(
          2,
          (value) => `Name must be at least ${value.min} characters long.`,
        ),
      email: yup
        .string()
        .email('Email must be a valid email.')
        .required('Email is a required field.'),
      comment: yup.string().required('Comment is a required field.'),
    }),
    onSubmit: (values: { name: string; email: string; comment: string }) => {
      axios
        .post('/', encode({ 'form-name': 'contact', ...values }), {
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        })
        .then(() => {
          handleReset();
          didSubmit = true;
          setTimeout(() => {
            didSubmit = false;
          }, 5000);
        })
        .catch((error) => console.error(error));
    },
  });
</script>

<svelte:head>
  <title>Contact | Mark Jones</title>
  <meta
    name="description"
    content="If you want to say hello, the best way you can reach me is through these channels
    below."
  />
</svelte:head>


<SEO />

<section class="container mj-container">
  <h1>Contact for business inquiries</h1>

  <p>
    You can find an
    overview of the services that I offer under the
    <a href="/services" data-sveltekit-prefetch>Services</a>
    tab. I will get back to you within 48 hours.</p>
  <form
    name="contact"
    class="mt-3 mb-8"
    netlify-honeypot="bot-field"
    data-netlify="true"
    on:submit="{handleSubmit}"
  >
    <div class="flex flex-wrap p-3 bg-gray-light border border-gray-500 rounded dark:border-gray-700">
      <input type="hidden" name="form-name" value="contact" />
      <input type="text" name="bot-field" class="hidden" />
      <div class="w-1/2 px-2 my-2">
        <label for="name"
          >Name</label
        >
        <input
          type="text"
          name="name"
          id="name"
          class="w-full text-gray-700 border border-gray-400 rounded hover:border-gray-500"
          on:blur="{handleChange}"
          on:change="{handleChange}"
          bind:value="{$form.name}"
        />
        {#if $errors.name}<small class="form-error" transition:fade>{$errors.name}</small>{/if}
      </div>

      <div class="w-1/2 px-2 my-2">
        <label for="email"
          >Email</label
        >
        <input
          type="text"
          name="email"
          id="email"
          class="w-full text-gray-700 border border-gray-400 rounded hover:border-gray-500"
          on:blur="{handleChange}"
          on:change="{handleChange}"
          bind:value="{$form.email}"
        />
        {#if $errors.email}<small class="form-error" transition:fade>{$errors.email}</small>{/if}
      </div>

      <div class="w-full px-2 my-2">
        <label for="comment"
          >Comment</label
        >
        <textarea
          rows="5"
          name="comment"
          id="comment"
          class="w-full text-gray-700 border border-gray-400 rounded hover:border-gray-500"
          on:blur="{handleChange}"
          on:change="{handleChange}"
          bind:value="{$form.comment}"></textarea>
        {#if $errors.comment}
          <small class="form-error" transition:fade>{$errors.comment}</small>
        {/if}
      </div>

      <div class="w-full px-2 my-2">
        <button
          type="submit"
          class="w-full text-lg rounded disabled:cursor-not-allowed disabled:opacity-50 btn-primary"
          disabled="{!$isValid || $isSubmitting}"
        >
          Submit
        </button>
      </div>

      {#if didSubmit }
        <div class="w-full px-2 my-2" transition:fade>
          <div class="alert-success">
            <div class="inline-block mr-3 text-green-500 text-[1.5em]">
              <div class="i-fa6-solid-circle-check"></div>
            </div>
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
  <p>
    If you just want to say hello, the best way you can reach me is through
    these channels below.
  </p>

  <div class="biglinks">
    <ExternalLink
      href="mailto:mark@taocode.com"
      ariaLabel="Write me a mail"
      customClass="inline-flex text-green-900 hover:text-green-700"
    >
      <div class="icon">
        <div class="i-fa6-solid-envelope"></div>
      </div>
    </ExternalLink>
    <ExternalLink
      href="https://github.com/taocode"
      ariaLabel="Follow me on GitHub"
      customClass="inline-flex text-green-900 hover:text-green-700"
    >
      <div class="icon">
        <div class="i-fa6-brands-github"></div>
      </div>
    </ExternalLink>

    <ExternalLink
      href="https://www.linkedin.com/in/taocode/"
      ariaLabel="Network with me on Linkedin"
      customClass="inline-flex text-green-900 hover:text-green-700"
    >
      <div class="icon">
        <div class="i-fa6-brands-linkedin"></div>
      </div>
    </ExternalLink>

  </div>

  <div class="flex flex-wrap">
    <div class="w-full sm:w-1/3">
      <h3>Found an unexpected bug?</h3>
      <ExternalLink
        href="https://github.com/taocode/taocode.com/issues/new"
        customClass="inline-flex"
      >
        Submit issue
        <div class="icon">
          <div class="i-feather-external-link"></div>
        </div>
      </ExternalLink>
    </div>
    <div class="w-full sm:w-1/3">
      <h3>Improvements for the website?</h3>
      <ExternalLink
        href="https://github.com/taocode/taocode.com/issues/new"
        customClass="inline-flex"
      >
        Request feature
        <div class="icon">
          <div class="i-feather-external-link"></div>
        </div>
      </ExternalLink>
    </div>
    <div class="w-full sm:w-1/3">
      <h3>Got a blog post topic proposal?</h3>
      <ExternalLink
        href="https://github.com/taocode/taocode.com/issues/new"
        customClass="inline-flex"
      >
        Suggest content
        <div class="icon">
          <div class="i-feather-external-link"></div>
        </div>
      </ExternalLink>
    </div>
  </div>
</section>

<style type="postcss">
  label {
    @apply font-display text-sm font-bold tracking-wide text-gray mb-2;
  }
  .biglinks {
    @apply flex flex-wrap mb-6 gap-6;
    .icon {
      @apply text-[1.75em];
    }
  }
  .icon {
    @apply text-[1.34em] ml-2;
  }
</style>
