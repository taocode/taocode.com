<script>
  import Image from '$lib/images/headshot-tongues-out-with-b.jpg';
  // import ExternalLink from './ExternalLink.svelte';
</script>

<div class="mb-16">
  <header class="topic-box">
    <h2 class="mt-0">About Me</h2>
  </header>
  <div class="flex justify-center w-1/2 mx-auto mt-5 sm:w-1/3 md:w-5/9 lg:w-1/2">
    <img
      srcset="{Image}"
      type="image/webp"
      alt="Mark Jones"
      class="rounded-full"
    />
  </div>
  <h2 class="text-center">Mark Jones</h2>
  <p>
    Full stack web developer, musician, voice actor, artist, hoppy beer
    and happy pet lover.
  </p>
</div>
