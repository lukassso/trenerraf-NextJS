// import Review from '@/components/review';
// import getReviews from '@/lib/get-reviews';
//
// const Reviews = () => {
//   const data = getReviews();
//   data?.map(({ profile_photo_url, rating, text, author_name }) => (
//     <Review key={text} name={author_name} rating={rating} text={text} src={profile_photo_url} />
//   ));
// };
// export default Reviews;

import { FC } from 'react';
import { URL_GOOGLE_API_PLACE_ID } from '@/lib/constants';
import StarIcon from '@mui/icons-material/Star';

export type ReviewProps = {
  src: string;
  rating: number;
  name: string;
  text: string;
  res: any;
};

const Review: FC<ReviewProps> = ({ res }) => {
  console.log(res);
  return (
    <div>
      essa
      {/*{res.result.rating}*/}
      {Array.from({ length: res.result.rating }).map((_, i) => (
        <li key={i}>
          <StarIcon />
        </li>
      ))}
    </div>
  );
};

export default Review;

export async function getServerSideProps() {
  // const key = process.env.NEXT_PUBLIC_LOCALHOST_GOOGLE_API_KEY;
  let res = null;

  // try {
  //   const respose = await fetch(
  //       `https://maps.googleapis.com/maps/api/place/details/json?place_id=ChIJf14O7JLNHkcR-AJhS_VKLCw&key=${key}`,
  //   );
  //   res = await respose.json();
  // } catch (error) {
  //   console.log(error);
  // }

  try {
    const response = await fetch(URL_GOOGLE_API_PLACE_ID);
    res = await response.json();
  } catch (error) {
    console.log(error);
  }

  return {
    props: {
      res,
    },
  };
}
