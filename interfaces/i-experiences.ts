import { ReactNode } from 'react';

export interface IExperiences {
  id: number;
  area: string;
  name: string;
  content?: ReactNode;
}
