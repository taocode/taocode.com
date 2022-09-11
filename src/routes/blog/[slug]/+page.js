import { error } from '@sveltejs/kit'
import readingTime from 'reading-time'


/** @type {import('./$types').PageLoad} */
export async function load({ params, url }) {
	const { slug } = params;
	const { pathname } = url;

	const postPromise = import(`../../../content/blog/${slug}/index.md`);
	const imageDataPromise = import(`../../../lib/generated/posts/${pathname.slice(6)}.js`);
	const pagePromise = import(`../../../content/blog/${slug}/index.md`);

	const [postResult, imageDataResult, pageResult] = await Promise.all([
		postPromise,
		imageDataPromise,
		pagePromise,
	]);
	const { default: body, metadata } = postResult;
	const { default: imageData } = imageDataResult;
	const { default: page } = pageResult;

	if (!body) {
		throw error(404)
	}
	const postHTML = body.render().html
	const readingTimeText = readingTime(postHTML)['text']
	// console.log('rt...',{readingTimeText,postHTML})
	const {
		category,
		datePublished,
		featuredImage,
		featuredImageAlt,
		ogImage,
		ogSquareImage,
		title,
		seoMetaDescription,
		siteUrl,
		twitterImage,
		tags
	} = metadata;

	return {
		post: {
			category,
			datePublished,
			featuredImage,
			featuredImageAlt,
			ogImage,
			ogSquareImage,
			title,
			seoMetaDescription,
			twitterImage,
			slug,
			siteUrl,
			body,
			readingTimeText,
			tags,
		},
		slug,
		imageData,
		page,
	};
}
