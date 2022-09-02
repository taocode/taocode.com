<script>
  import { onMount } from 'svelte'
  import { browser } from '$app/environment'

  onMount(() => {
    if (browser) {
      var s = document.createElement('script')
      s.src = 'https://cdn.iubenda.com/iubenda.js'
      document.documentElement.append(s)
    }
  });
</script>
<a href="https://www.iubenda.com/privacy-policy/30856945" class="iubenda-black iubenda-noiframe iubenda-embed iubenda-noiframe " title="Privacy Policy ">Privacy Policy</a>

