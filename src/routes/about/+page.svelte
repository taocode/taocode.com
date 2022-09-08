<script>
  import SEO from '$lib/components/layout/SEO.svelte'
  // import ExternalLink from '$lib/ExternalLink.svelte';
  // import AffiliateNotice from '$lib/AffiliateNotice.svelte';
</script>

<svelte:head>
  <title>About | TAOCode</title>
  <meta
    name="description"
    content="Elevate my position on the web as a developer and to share what I've learned over the years."
  />
</svelte:head>

<SEO />

<section class="container mj-container">
  <h1>About Me</h1>
  
  <p>
    Hi, my name is Mark Jones and I'm a freelance full stack web developer, voice over artist, musician and more. 
  </p>

  <p>
    I created this website to hold and share my thoughts as a developer and human being. I anticipate being found by other programmers trying to find some solution to an error or build environment question. I wrote 
    <a sveltekit:prefetch href="/blog/why-i-started-this-blog">
      why I started this blog</a
    > for a deeper look.
  </p>

  <p>
    I'm keen on application performance
    optimization, dependency upgrades, code quality, technical SEO and
    accessibility.
  </p>

  <p>
    Thanks for checking me out, I hope we may work on something awesome together. Reach out via the
    <a href="/contact">Contact form</a> or send me an email.
  </p>

</section>

