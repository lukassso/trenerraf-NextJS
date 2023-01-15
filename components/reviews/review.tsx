import Image from 'next/image';
import { FC } from 'react';

export type ReviewProps = {
  src?: string;
  rating?: number;
  name?: string;
  text?: string;
};

const Review: FC<ReviewProps> = ({ src, rating, name, text }) => (
  <div>
    {src}, {rating}, {name}, {text}
    review array from here
  </div>
);

export default Review;
