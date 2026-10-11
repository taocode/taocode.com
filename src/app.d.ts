import type { Post } from '#lib/models/post.js';

declare global {
  namespace App {
    interface PageData {
      posts: Post[];
    }
  }
}

export {};
