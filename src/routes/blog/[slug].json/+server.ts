import posts from '../../blog/_posts'
export const prerender = true

export function GET({params}) {
	// console.log('individual post',params.slug,posts[params.slug])
  return new Response(JSON.stringify(posts.filter((v,i) => v.slug === params.slug)));
}
