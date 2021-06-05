<script>
  // import ExternalLink from '$lib/ExternalLink.svelte';
  import SEO from '$lib/SEO.svelte';
</script>

<svelte:head>
  <title>Services | Mark Jones</title>
  <meta
    name="description"
    content="I create next-level web solutions customized for your needs."
  />
</svelte:head>

<SEO />

<section class="container mh-container">
  <h1>Services that I offer</h1>

  <p>
    I support website owners, companies, startups and individuals just
    like you to improve page performance, accessibility and save time and stress on the long
    run. I work efficiently to bring together the best experience.
    
I get accustomed to new projects quickly and
    understand that finding the perfect candidate for your project is not easy,
    but with me, you can be sure that I will always treat your project as if it would be my own!
  </p>

  <h2>I create next-level web solutions customized for your needs.</h2>

  <p>
    Launching a product or creating a website is complex and overwhelming
    process. That's why I'm here to help you through it to make sure your users
    get the experience they need. Your product has so much potential, so let's
    make it a mindblowing experience!
  </p>

  <h2>Interested in a collaboration?</h2>
  <p>
    You can send me a message through the
    <a href="/contact" sveltekit:prefetch>Contact</a>
    page. Additionally, my CV is available and can be downloaded on the
    <a href="/resume" sveltekit:prefetch>Resume</a>
    page.
  </p>

  <div class="flex flex-wrap -m-2">
    <div class="flex w-full p-2 lg:w-1/2">
      <div class="px-6 py-4 card">
        <h2>
          <!-- <Icon data="{faDraftingCompass}" class="mr-3" scale="{2}" /> -->
          Prototyping your idea
        </h2>

        <p>
          Do you have a idea on paper that needs to be realised and tested for
          viability?
        </p>
        <p>
          I can create a first iteration of a prototype based off mockups for
          you in no time, so that you can re-evaluate the product.
        </p>
      </div>
    </div>
    <div class="flex w-full p-2 lg:w-1/2">
      <div class="px-6 py-4 card">
        <h2>
          <!-- <Icon data="{faClipboardList}" class="mr-3" scale="{2}" /> -->
          Continue an existing product
        </h2>

        <p>
          You can hire me to implement new features for your product and improve
          it according to your needs.
        </p>
      </div>
    </div>
    <div class="flex w-full p-2 lg:w-1/2">
      <div class="px-6 py-4 card">
        <h2>
          <!-- <Icon data="{faChalkboardTeacher}" class="mr-3" scale="{2}" /> -->
          Project review
        </h2>

        <p>
          Do you have issues with your website or product that keep users from
          enjoying it? Are you experiencing some of the following issues:
        </p>
        <ul>
          <li>bad user experience</li>
          <li>slow and laggy page performance</li>
          <li>your technical SEO is lacking</li>
          <li>handicapped users cannot user your site effectively</li>
        </ul>

        <p>
          I can review your website and give you a detailed analysis about the
          bottlenecks.
        </p>
      </div>
    </div>

    <div class="flex w-full p-2 lg:w-1/2">
      <div class="px-6 py-4 card">
        <h2>
          <!-- <Icon data="{faPenFancy}" class="mr-3" scale="{2}" /> -->
          Accessibility Review
        </h2>

        <p>
          Accessibility is always a primary consideration for my projects.
          It's important for anyone who would like their project to be viable 
          within the education sector and for those that would like to include
          the broadest possible audience.
        </p>
        <ul>
          <li>Keyboard-only access</li>
          <li>ARIA labels</li>
          <li>Proper document structure and skip-link</li>
        </ul>
      </div>
    </div>
  </div>
</section>
