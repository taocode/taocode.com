import type { Post } from '$lib/models/post';

declare global {
  namespace App {
    interface PageData {
      posts: Post[];
    }
  }
}

export {};
