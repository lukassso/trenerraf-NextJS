import { ReactNode } from 'react';

export interface IArticleCard {
  title: string;
  description: string;
  date: string;
  author: string;
  cardTeaser?: boolean;
  href: string;
  children?: ReactNode;
}
