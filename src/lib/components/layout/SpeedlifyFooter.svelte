<script>
  import ProgressRing from '$lib/components/ProgressRing.svelte'
</script>
<div class="lighthouse">
<div class="">
<h2>Lighthouse Score</h2>
<div class="-mt-1 mb-2"><span>October, 2022</span></div>
<div class="rings">
  <ProgressRing progress={100} title="Performance" />
  <ProgressRing progress={100} title="Accessibility" />
  <ProgressRing progress={100}  title="Best practices" />
  <ProgressRing progress={100} title="SEO" />
</div>

<p class="mt-2"><a href="https://taocode.com">https://taocode.com</a></p>

</div>
</div>

<style lang="postcss">
  .lighthouse {
    @apply max-w-3/4 mx-auto text-center xs:max-w-1/2 sm:max-w-64;
    > div {
      @apply bg-green-950 bg-opacity-40 p-3 rounded;
    }
  }
  .rings {
    @apply flex flex-row opacity-70 gap-2;
  }
  span {
    @apply text-sm opacity-70;
  }

</style>
