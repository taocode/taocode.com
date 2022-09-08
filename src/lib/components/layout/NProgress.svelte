<script>
  import NProgress from 'nprogress'
  import { navigating } from '$app/stores'
  import { browser } from '$app/environment'

  import './NProgress.pcss'

  NProgress.configure({
    // Full list: https://github.com/rstacruz/nprogress#configuration
    showSpinner: false,
  });

  $: if (browser) {
    $navigating ? NProgress.start() : NProgress.done();
  }
</script>
