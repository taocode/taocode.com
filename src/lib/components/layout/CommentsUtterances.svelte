<script>
import { dev } from '$app/environment'
import { onMount } from 'svelte'

onMount(() => {
	if (!dev) {
    const s = document.createElement('script')
    const tag = document.getElementById('utterances')
    s.setAttribute('repo',"taocode/taocode.com")
    s.setAttribute('issue-term',"pathname")
    s.setAttribute('label',"✨💬")
    s.setAttribute('theme',"preferred-color-scheme")
    s.setAttribute('crossorigin',"anonymous")
    s.src = 'https://utteranc.es/client.js'
    tag.parentNode.insertBefore(s, tag)
	}
})
</script>
<div id="utterances" class="mt-16"></div>
