<script>
import { onMount } from 'svelte';

onMount(() => {
    var s = document.createElement('script'),
    tag = document.getElementById('utterances');
    s.setAttribute('repo',"taocode/taocode.com");
    s.setAttribute('issue-term',"pathname");
    s.setAttribute('label',"✨💬");
    s.setAttribute('theme',"github-light");
    s.setAttribute('crossorigin',"anonymous");

    s.src = 'https://utteranc.es/client.js';
    tag.parentNode.insertBefore(s, tag);
});
</script>
<div id="utterances"></div>
