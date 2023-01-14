import { StaticImageData } from 'next/image';

export interface ISuccessStories {
  id: number;
  image: StaticImageData;
  name: string;
  weight: string;
  text: string;
}
