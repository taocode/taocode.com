<script>
  import { ChevronLeftIcon } from 'svelte-feather-icons'
</script>

<a
  sveltekit:prefetch
  href="/blog"
  class="inline-flex no-underline rounded hover:underline"
>
  <ChevronLeftIcon class="mt-1 mr-3" size="1.5x" />
  Back to Blog overview
</a>
