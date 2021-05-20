export type Post = {
  title: string;
  slug: string;
  creationDate: string;
  category: 'Programming' | 'Portfolio' | 'Life';
  excerpt: string;
  tags: string[];
  html: string;
  hasAffiliateLink?: boolean;
  cover?: string;
  lead?: string;
  readingTime: string;
};
