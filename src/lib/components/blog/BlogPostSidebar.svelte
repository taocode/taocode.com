<script lang="ts">
  import AboutMe from '$lib/components/content/AboutMe.svelte'
  import PopularArticles from '$lib/components/blog/PopularArticles.svelte'
  import SubscribeAndFollow from '../SubscribeAndFollow.svelte'
  import Categories from './Categories.svelte'
  import Newsletter from '$lib/components/Newsletter.svelte'
  import type { Post } from '$lib/models/post'

  import { posts } from '$lib/stores'

</script>

<div class="md:flex md:gap-6 lg:block">
  <div class="md:w-1/2 lg:w-full">
    <AboutMe />
    <Newsletter />
  </div>
  <div class="md:w-1/2 lg:w-full">
    <PopularArticles />
    <Categories />
  </div>
</div>
<div class="mx-auto md:w-1/2 lg:w-full ">
  <SubscribeAndFollow />
</div>
