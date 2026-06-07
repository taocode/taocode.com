import { dev } from '$app/environment';
import { getAllPosts } from '$lib/server/posts';
import type { LayoutServerLoad } from './$types';

export const prerender = true;

export const load: LayoutServerLoad = async () => {
	return {
		posts: getAllPosts(dev)
	};
};
