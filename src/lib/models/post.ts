export type PostCategory = 'Programming' | 'Portfolio' | 'Life';

/** Metadata index for listings, feeds, and post detail headers. Body renders via .svx component. */
export type Post = {
  title: string;
  slug: string;
  creationDate: string;
  published: Date;
  category: PostCategory;
  excerpt: string;
  tags: string[];
  readingTimeText: string;
  wordCount: number;
  lead?: string;
  cover?: string;
  thumbnail?: string;
  hasAffiliateLink?: boolean;
  site_url?: string;
  description?: string;
  draft?: boolean;
  hidden?: boolean;
};
