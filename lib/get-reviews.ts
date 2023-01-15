import type { NextApiRequest, NextApiResponse } from 'next';
import { URL_GOOGLE_API_PLACE_ID } from '@/lib/constants';

export type Review = {
  profile_photo_url: string;
  rating: number;
  text: string;
  author_name: string;
};

const getReviews = async (req: NextApiRequest, res: NextApiResponse<Review[]>) => {
  const details = await fetch(URL_GOOGLE_API_PLACE_ID);
  const {
    result: { response },
  } = await details.json();
  res.status(200).json(response);
};

export default getReviews;
