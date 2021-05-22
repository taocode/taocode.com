<script>
  import ExternalLink from '$lib/ExternalLink.svelte';
  import PrivacyPolicyLink from '$lib/PrivacyPolicyLink.svelte';
  import SEO from '$lib/SEO.svelte';
</script>

<svelte:head>
  <title>Imprint | Mark Jones</title>

  <meta
    name="description"
    content="Duty to inform according to §5 e-commerce law, §14 company law, §63 trade
  regulations and disclosure duty according to §25 media law."
  />
</svelte:head>

<SEO />

<div class="container mh-container">
  <h1>Imprint</h1>

  <p>
    Duty to inform according to §5 e-commerce law, §14 company law, §63 trade
    regulations and disclosure duty according to §25 media law.
  </p>

  <p>
    Mark Jones
    <br />
    Montgomery St,
    <br />
    Winston-Salem, NC
    <br />
    USA
  </p>

  <p>
    <b>Business purpose:</b>
    IT services
    <br />

  </p>

  <p>
    <b>Phone:</b>
    <a href="tel:+13366089475">+13366089475</a>
    <br />

    <b>Email:</b>
    <a href="mailto:mark@taocode.com">mark@taocode.com</a>
    <br />

    <b>Website:</b>
    <a href="/">taocode.com</a>
    <br />
  </p>

  <h2>Liability for the contents of this website</h2>
  <p>
    We are constantly developing the contents of this website and make every
    effort to provide correct and up-to-date information. Unfortunately, we
    cannot assume any liability for the accuracy of any content on this website,
    especially for those provided by third parties. Should you notice any
    problematic or illegal content, please contact us immediately.
  </p>

  <h2>Liability for links on this website</h2>
  <p>
    Our website contains links to other websites for whose content we are not
    responsible. According to
    <ExternalLink
      href="https://www.ris.bka.gv.at/Dokument.wxe?Abfrage=Bundesnormen&Dokumentnummer=NOR40025813&tid=221137263"
      >§ 17 ECG</ExternalLink
    >, we are not liable for linked websites, because we had and have no
    knowledge of illegal activities, we have not noticed any such illegality and
    we would remove links immediately if we became aware of any illegality.
  </p>

  <p>
    If you notice illegal links on our website, please contact us we and will
    remove the respective links immediately.
  </p>

  <h2>Copyright notice</h2>
  <p>
    All contents of this website (pictures, photos, texts, videos) are subject
    to copyright. If necessary, we will legally pursue the unauthorized use of
    parts of the contents of our site.
  </p>

  <h2>Picture credits</h2>
  <p>
    The pictures, photos and graphics on this website are protected by
    copyright. The image rights are owned by the following photographers and
    companies:
  </p>
  <ul>
    <li>Mark Jones</li>
    <li>
      <ExternalLink href="https://unsplash.com">
        https://unsplash.com
      </ExternalLink>
    </li>
  </ul>

  <h2>Privacy policy</h2>
  <p>
    Information on data protection can be found on our
    <PrivacyPolicyLink />
    page.
  </p>
</div>
