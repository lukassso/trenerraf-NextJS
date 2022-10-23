import { StructuredTextGraphQlResponse } from 'react-datocms';

interface IArticle {
  id: number;
  title: string;
  description: string;
  publishedAt: string;
  date: string;
  commentsCount: number;
  publicReactionsCount: number;
  positiveReactionsCount: number;
  coverImage: string;
  tags: string[];
  href: string;
  collectionId: number;
  slug: string;
  markdown: string;
  contentHtml: string;
  author: {
    name: string;
  };
  content: StructuredTextGraphQlResponse;
  excerpt: string;
  seoSettings: {
    description: string;
    title: string;
  };
  awardedArticle: boolean;
}

export default IArticle;
