<script lang="ts">
  import { page } from '$app/state';

  const baseURL = `https://www.taocode.com`;
  const siteLogo = `${baseURL}/taocode-logo.png`;
  const schemaOrgURL = 'http://schema.org';

  interface Props {
    blogPostInfo?: {
      title?: string;
      excerpt?: string;
      creationDate?: string;
      cover?: string;
    };
  }

  let { blogPostInfo = {} }: Props = $props();

  const fallbackTitle = 'TAOCode - Web productions by Mark Jones';
  const fallbackDescription =
    'Personal website and blog with SvelteKit and TailwindCSS.';

  const authorJSONLD = {
    '@type': 'Person',
    name: 'Mark Jones',
    email: 'mark@taocode.com',
    address: 'Winston-Salem, North Carolina',
  };

  const schemaOrgJSONLD = [
    {
      '@context': schemaOrgURL,
      '@type': 'WebSite',
      url: baseURL,
      name: fallbackTitle,
      alternateName: fallbackTitle,
    },
  ];

  const fullURL = $derived(`${baseURL}${page.url.pathname}`);
  const socialTitle = $derived(blogPostInfo.title || fallbackTitle);
  const socialDescription = $derived(
    blogPostInfo.excerpt || fallbackDescription,
  );
  const socialImage = $derived(
    blogPostInfo.cover ? `${baseURL}/${blogPostInfo.cover}` : siteLogo,
  );
  const isBlogDetailsPage = $derived(Object.keys(blogPostInfo).length > 0);
  const openGraphType = $derived(isBlogDetailsPage ? 'article' : 'website');

  const detailSchemaOrgJSONLD = $derived([
    {
      '@context': schemaOrgURL,
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          item: {
            '@id': fullURL,
            name: socialTitle,
            image: socialImage,
          },
        },
      ],
    },
    {
      '@context': schemaOrgURL,
      '@type': 'BlogPosting',
      url: fullURL,
      name: socialTitle,
      alternateName: socialTitle,
      headline: socialTitle,
      image: { '@type': 'ImageObject', url: socialImage },
      author: authorJSONLD,
      publisher: {
        ...authorJSONLD,
        '@type': 'Organization',
        logo: {
          '@type': 'ImageObject',
          url: siteLogo,
        },
      },
      datePublished: blogPostInfo.creationDate,
      description: socialDescription,
    },
  ]);

  const ldJson = $derived(
    JSON.stringify(
      isBlogDetailsPage
        ? [...schemaOrgJSONLD, ...detailSchemaOrgJSONLD]
        : schemaOrgJSONLD,
    ),
  );

  $effect(() => {
    const ldJsonScript = document.getElementById('addedldJsonScript');

    if (ldJsonScript) {
      ldJsonScript.textContent = ldJson;
    } else {
      const script = document.createElement('script');
      script.setAttribute('id', 'addedldJsonScript');
      script.type = 'application/ld+json';
      script.text = ldJson;
      document.head.appendChild(script);
    }
  });
</script>

<svelte:head>
  <!-- Open Graph / Facebook -->
  <meta property="og:title" content={socialTitle} />
  <meta property="og:description" content={socialDescription} />
  <meta property="og:url" content={fullURL} />
  <meta property="og:image" content={socialImage} />
  <meta property="og:type" content={openGraphType} />

  <!-- Twitter -->
  <meta property="twitter:title" content={socialTitle} />
  <meta property="twitter:description" content={socialDescription} />
  <meta property="twitter:url" content={fullURL} />
  <meta property="twitter:image" content={socialImage} />
  <meta property="twitter:card" content="summary_large_image" />
</svelte:head>
