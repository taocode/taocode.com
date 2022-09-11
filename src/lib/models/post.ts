export type Post = {
  title: string;
  slug: string;
  datePublished: string;
  dateCreated: string;
  category: 'Programming' | 'Portfolio' | 'Life';
  excerpt: string;
  tags: string[];
  body: string;
  hasAffiliateLink?: boolean;
  cover?: string;
  thumbnail?: string;
  siteUrl?: string;
  lead?: string;
  readingTimeText: string;
};
