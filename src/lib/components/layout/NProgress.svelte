<script>
  import NProgress from 'nprogress';
  import { navigating } from '$app/state';
  import { browser } from '$app/environment';

  import './NProgress.pcss';

  NProgress.configure({
    showSpinner: false,
  });

  $effect(() => {
    if (browser) {
      navigating ? NProgress.start() : NProgress.done();
    }
  });
</script>
