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
import { Avatar, Box, Divider, Typography } from '@mui/material';
import Stack from '@mui/material/Stack';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';

export type ReviewProps = {
  src?: string;
  rating?: number;
  name?: string;
  text?: string;
};

const Reviews: FC<ReviewProps> = ({ res }: any) => {
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
      <Box display="flex" alignItems="center" flexDirection="column">
        {res.result.reviews.map((review: any) => (
          <div key={review.name}>
            <Box sx={{ p: 1, pt: 4 }}>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  mb: 3,
                  mt: 2,
                }}
              >
                <ChatBubbleOutlineIcon />
              </Box>
              <Box px={8}>
                <Typography>{review.relative_time_description}</Typography>
                <Box display="flex" py={5} alignItems="center">
                  <Box>
                    <Avatar src={review.profile_photo_url} alt={review.author_name} />
                  </Box>
                  <Box display="flex" flexDirection="column" justifyContent="flex-start" pl={3}>
                    <Box>
                      <Typography> {review.author_name}</Typography>
                    </Box>
                    <Box>
                      <Typography component="span" variant="body2" color="primary">
                        {review.date}
                      </Typography>
                    </Box>
                    <Box>
                      <Stack direction="row" spacing={2}>
                        {Array.from({ length: res.result.rating }).map((_, i) => (
                          <div key={i}>
                            <StarIcon />
                          </div>
                        ))}
                      </Stack>
                    </Box>
                  </Box>
                </Box>
              </Box>
              <Divider />
            </Box>
          </div>
        ))}
      </Box>
    </div>
  );
};

export default Reviews;
