import { StructuredTextGraphQlResponse } from 'react-datocms';

export interface IBlogPostCard {
  title: string;
  excerpt: string;
  // description?: string;
  slug: string;
  date: string;
  // author: string;
  coverImage: {
    responsiveImage: string;
  };
  author?: {
    name: string;
    picture: {
      url: string;
    };
  };
  content?: StructuredTextGraphQlResponse;
  // authorName: string;
  // authorPicture: string;
}
