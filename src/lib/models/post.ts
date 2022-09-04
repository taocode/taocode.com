export type Post = {
  title: string;
  slug: string;
  creationDate: string;
  category: 'Programming' | 'Portfolio' | 'Life';
  excerpt: string;
  tags: string[];
  html: string;
  hasAffiliateLink?: boolean;
  hidden?: boolean;
  cover?: string;
  thumbnail?: string;
  site_url?: string;
  lead?: string;
  readingTime: string;
};
