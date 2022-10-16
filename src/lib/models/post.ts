export type Post = {
  title: string;
  slug: string;
  creationDate: string;
  published: Date;
  category: 'Programming' | 'Portfolio' | 'Life';
  excerpt: string;
  tags: string[];
  html: string;
  hasAffiliateLink?: boolean;
  cover?: string;
  thumbnail?: string;
  site_url?: string;
  lead?: string;
  readingTimeText: string;
  wordCount: number;
};
