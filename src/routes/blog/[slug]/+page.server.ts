import readingTime from "reading-time"

export async function load({ fetch }) {
  const postsPromise = import.meta.glob('../../../posts/*.md')
  // const res = await fetch(`/blog.json`);
  const postResult = await Promise.resolve(postsPromise)
  console.log('blog/[slug]/+page.ts')
  const postMeta = Object.values(postResult).map((c,i,a) => c())
  const postsRes = await Promise.all(postMeta)
  const postsAll = postsRes.map((c,i,a) => {
    // console.dir(typeof c.default.render)
    if (typeof c.default.render === 'function') {
      c.metadata.html = c.default.render().html
      const readingTimeDuration = readingTime(c.metadata.html).text;
      c.metadata.readingTime = readingTimeDuration

      console.log('functioned',c.metadata.slug)
    }
    return c.metadata
  })
  // console.dir(postsRes)
  return {
    posts: postsAll
  }
}
