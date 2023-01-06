import { ReactNode } from 'react';

export type LayoutProps = {
  title: string;
  description: string;
  children?: ReactNode;
  ogImage?: string;
  ogTitle?: string;
  ogDescription?: string;
};
