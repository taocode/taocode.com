<script>
  import NProgress from 'nprogress';
  import { navigating } from '$app/state';

  import './NProgress.pcss';

  NProgress.configure({
    showSpinner: false,
  });

  $effect(() => {
    if (navigating.from === null) return;

    NProgress.start();

    return () => {
      NProgress.done();
    };
  });
</script>
