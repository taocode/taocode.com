
import { parseISO } from "date-fns"
import readingTime from "reading-time"
import { marked }  from 'marked'
import Prism from 'prismjs'
import loadLanguages from 'prismjs/components/index.js'

loadLanguages(['shell', 'markdown', 'json','js','ts'])

export const prerender = true



export async function load() {

  const postsPromise = import.meta.glob('../posts/*.md')
  // const res = await fetch(`/blog.json`);
  const postResult = await Promise.resolve(postsPromise)
  // console.log('blog/[slug]/+page.ts') 
  const postMeta = Object.values(postResult).map((c,i,a) => c())
  const postsRes = await Promise.all(postMeta)
  const postsAll = postsRes.map((c,i,a) => {
    // console.dir(typeof c.default.render)
		const data = c.metadata
    if (typeof c.default.render === 'function') {
      data.html = c.default.render().html
      data.readingTimeText = readingTime(data.html).text
    }
    data.excerpt = marked.parse(data.excerpt)
		data.published = parseISO(data.creationDate)
		// console.log('loaded:',data.slug,data.creationDate,data.published,data.creationDate)
    return data
  })
  // console.dir(postsRes)
  return {
    posts: postsAll
  }
}
