import { dev } from '$app/env';
import { getAllPosts } from '#lib/server/posts.js';
import type { LayoutServerLoad } from './$types';

export const prerender = true;

export const load: LayoutServerLoad = async () => {
  return {
    posts: getAllPosts(dev),
  };
};
