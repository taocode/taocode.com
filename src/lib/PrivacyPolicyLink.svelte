<script>
  import { onMount } from 'svelte';

  onMount(() => {
    var s = document.createElement('script'),
      tag = document.getElementsByTagName('script')[0];
    s.src = 'https://cdn.iubenda.com/iubenda.js';
    tag.parentNode.insertBefore(s, tag);
  });
</script>
<a href="https://www.iubenda.com/privacy-policy/30856945" class="iubenda-black iubenda-noiframe iubenda-embed iubenda-noiframe " title="Privacy Policy ">Privacy Policy</a>

