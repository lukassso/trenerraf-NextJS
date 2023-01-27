// import Review from '@/components/review';
// import getReviews from '@/lib/get-reviews';
//
// const Review = () => {
//   const data = getReviews();
//   data?.map(({ profile_photo_url, rating, text, author_name }) => (
//     <Review key={text} name={author_name} rating={rating} text={text} src={profile_photo_url} />
//   ));
// };
// export default Review;

import React, { FC } from 'react';
import { Avatar, Box, Divider, Typography } from '@mui/material';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import LogoGoogleIcon from '@/assets/logo-google-icon';

export type ReviewProps = {
  src?: string;
  rating?: number;
  name: string;
  text: string;
  date: string;
  googleReview?: boolean;
};

const Review: FC<ReviewProps> = ({ googleReview = true, text, name, src, date }) => {
  return (
    <Box sx={{ p: 6, pt: 9 }}>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          mb: 3,
          mt: 2,
        }}
      >
        {googleReview ? <ChatBubbleOutlineIcon /> : <LogoGoogleIcon />}
      </Box>
      <Box>
        <Typography>{text}</Typography>
        <Box display="flex" py={5} alignItems="center">
          <Box>
            <Avatar alt={name} src={src} />
          </Box>
          <Box display="flex" flexDirection="column" justifyContent="flex-start" pl={3}>
            <Box>
              <Typography>{name}</Typography>
            </Box>
            <Box>
              <Typography component="span" variant="body2" color="primary">
                {date}
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
      <Divider />
    </Box>
  );
};

export default Review;
