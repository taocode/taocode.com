import fs from 'fs'
import frontMatter from 'front-matter'
import { marked }  from 'marked'
import Prism from 'prismjs'
import loadLanguages from 'prismjs/components/index.js'
import readingTime from 'reading-time'

// import { get } from 'svelte/store'
import { allPosts } from '$lib/stores'

loadLanguages(['shell', 'markdown', 'json','js','ts'])

// const postWatcher = fs.watch('./src/posts')
export const readPosts = () => {
  allPosts.set(
    fs
    .readdirSync('./src/posts')
    .filter((elem) => elem.endsWith('.svx') || elem.endsWith('.md'))
    .map(
      (postFilename) => {
        const postContent = fs.readFileSync(`./src/posts/${postFilename}`, {
          encoding: 'utf8',
        }
      )

      const postFrontMatter = frontMatter(postContent);
      marked.setOptions({
        highlight: (source, language) => {
          const lang = language ? language : 'js'
          const html = Prism.highlight(source, Prism.languages[lang], lang)
          return `<pre class='language-${lang}'><code class='language-${lang}'>${html}</code></pre>`
        }
      })

      const html = marked.parse(postFrontMatter.body);
      const excerpt = marked.parse(postFrontMatter.attributes['excerpt']);
      const readingTimeDuration = readingTime(postFrontMatter.body).text;

      return {
        ...postFrontMatter.attributes,
        html,
        excerpt,
        readingTime: readingTimeDuration,
      }
    })
  )
}
