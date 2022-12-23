<script lang="ts">
  import AboutMe from '$lib/components/content/AboutMe.svelte'
  import PopularArticles from '$lib/components/blog/PopularArticles.svelte'
  import SubscribeAndFollow from '../SubscribeAndFollow.svelte'
  import Categories from './Categories.svelte'
  import Newsletter from '$lib/components/Newsletter.svelte'
  import type { Post } from '$lib/models/post'

  import { posts } from '$lib/stores'

</script>

<div class="flex flex-col gap-6 sm:flex-row md:gap-6 md:flex-col">
  <div class="sm:max-w-1/2 md:max-w-none">
    <AboutMe />
    <Newsletter />
  </div>
  <div class="">
    <PopularArticles />
    <Categories />
  </div>
</div>
<div class="">
  <SubscribeAndFollow />
</div>
