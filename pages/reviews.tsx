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

import React, { FC } from 'react';
import { URL_GOOGLE_API_PLACE_ID } from '@/lib/constants';
import StarIcon from '@mui/icons-material/Star';
import { Avatar, Box, Typography } from '@mui/material';
import Stack from '@mui/material/Stack';

export type ReviewProps = {
  src: string;
  rating: number;
  name: string;
  text: string;
  // res: Review;
};

const Review: FC<ReviewProps> = ({ res }: any) => {
  console.log(res);
  return (
    <div>
      Ilość opinii: {res.result.user_ratings_total}
      Ogólna ocena:
      <Stack direction="row" spacing={2}>
        {Array.from({ length: res.result.rating }).map((_, i) => (
          <div key={i}>
            <StarIcon />
          </div>
        ))}
      </Stack>
      {res.result.reviews.map((review, index) => (
        <div key={index}>
          <Box>
            {review.author_name}, {review.rating},
          </Box>
          <Typography>{review.relative_time_description}</Typography>
          <Avatar alt="Remy Sharp" src={review.profile_photo_url} />
          <Typography>{review.text}</Typography>
        </div>
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
