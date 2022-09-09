<script>
  import PrivacyPolicyLink from '$lib/components/layout/PrivacyPolicyLink.svelte'
  import { onMount } from 'svelte'
  import SEO from '$lib/components/SEO/index.svelte'

  onMount(() => {
    var s = document.createElement('script'),
      tag = document.getElementsByTagName('script')[0];
    s.src = 'https://cdn.iubenda.com/iubenda.js'
    tag.parentNode.insertBefore(s, tag)
  });
  const { author, siteUrl } = website

  let title = 'Home';
  const breadcrumbs = [
    {
      name: 'Home',
      slug: '',
    },
  ];
  let metadescription =
    'SvelteKit MDsvex Blog Starter - starter code by Rodney Lab to help you get going on your next blog site';
  const featuredImageAlt =
    'picture of a person with long, curly hair, wearing a red had taking a picture with an analogue camera';
  const featuredImage = {
    url: featuredImageSrc,
    alt: featuredImageAlt,
    width: 672,
    height: 448,
    caption: 'Home page',
  };
  const ogImage = {
    url: ogImageSrc,
    alt: featuredImageAlt,
  };
  const ogSquareImage = {
    url: ogSquareImageSrc,
    alt: featuredImageAlt,
  };

  const twitterImage = {
    url: twitterImageSrc,
    alt: featuredImageAlt,
  };
  const entityMeta = {
    url: `${siteUrl}/`,
    faviconWidth: 512,
    faviconHeight: 512,
    caption: author,
  };
  const seoProps = {
		title,
		slug: '',
		entityMeta,
		datePublished: '2021-07-07T14:19:33.000+0100',
		lastUpdated: '2021-07-07T14:19:33.000+0100',
		breadcrumbs,
		metadescription,
		featuredImage,
		ogImage,
		ogSquareImage,
		twitterImage,
	}
</script>

<svelte:head>
  <title>Privacy Policy | Mark Jones</title>

  <meta name="description" content="Privacy policy for taocode.com" />
</svelte:head>

<SEO {...seoProps} />
<div class="mj-container container py-12 text-center">
  <h1>Privacy Policy</h1>
  <p>
  Click the button for taocode.com's privacy policy:
  </p><p>
  <PrivacyPolicyLink />
  </p>
</div>