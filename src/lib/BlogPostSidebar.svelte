<script>
  import AboutMe from './AboutMe.svelte';
  import PopularArticles from './PopularArticles.svelte';
  import SubscribeAndFollow from './SubscribeAndFollow.svelte';
  import Categories from './Categories.svelte';
  import Newsletter from './Newsletter.svelte';
  import type { Post } from '../models/post';

  export let posts: Post[];
</script>

<div class="md:flex md:gap-6 lg:block">
  <div class="md:w-1/2 lg:w-full">
    <AboutMe />
    <Newsletter />
  </div>
  <div class="md:w-1/2 lg:w-full">
    <PopularArticles {posts} />
    <Categories {posts} />
  </div>
</div>
<div class="mx-auto md:w-1/2 lg:w-full ">
  <SubscribeAndFollow />
</div>
