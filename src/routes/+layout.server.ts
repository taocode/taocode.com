
import { parseISO } from "date-fns"
import readingTime from "reading-time"
import { marked }  from 'marked'
import Prism from 'prismjs'
import loadLanguages from 'prismjs/components/index.js'

loadLanguages(['shell', 'markdown', 'json','js','ts'])

export const prerender = true

import type { LayoutServerLoad } from './$types'
export async function load<LayoutServerLoad>({params}) {

  const postsPromise = import.meta.glob('../posts/*.md')
  // const res = await fetch(`/blog.json`);
  const postResult = await Promise.resolve(postsPromise)
  // console.log('/+layout.server.ts load()',{params}) 
  const postMeta = Object.values(postResult).map((c,i,a) => c())
  const slugs = Object.keys(postResult).map((c) => c.slice(9,c.lastIndexOf('.')))
  // console.log({slugs})
  const postsRes = await Promise.all(postMeta)
  const postsAll = postsRes.map((c,i,a) => {
    // console.dir(typeof c.default.render)
    const data = c.metadata
    if (typeof c.default.render === 'function') {
      const rendered = c.default.render()
      // console.log(c)
      const rto = readingTime(rendered.html)
      data.readingTimeText = rto.text
      data.wordCount = rto.words
    }
    if (data.slug !== slugs[i]) {
      console.log('corrected slug:',data.slug,slugs[i])
      data.slug = slugs[i]
    }
    if (!data.description) data.description = data.excerpt
    data.published = parseISO(data.creationDate)
    // console.log('loaded:',data.slug,data.creationDate,data.published,data.creationDate)
    return data
  })
  // console.dir(postsRes)
  return {
    posts: postsAll
  }
}
