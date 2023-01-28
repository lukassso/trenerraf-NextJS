import { Box, Button, CircularProgress, Container, Paper, Typography } from '@mui/material';
import { testimonials } from '@/components/one-page/testimonials-section/testimonials-section.data';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import React, { useReducer } from 'react';
import { ITestimonials } from '@/interfaces/i-testimonials';
import Review from '@/components/one-page/testimonials-section/review';
import Stack from '@mui/material/Stack';
import StarIcon from '@mui/icons-material/Star';
import { SectionMainHeader } from '@/components/common/section-main-header';
import LogoGoogleFull from '@/assets/logo-google-full';
import { PaperBox } from '@/components/one-page/testimonials-section/testimonial-section.styled';

const SHOW_PER_PAGE = 4;
const types = {
  start: 'START',
  loaded: 'LOADED',
};

const reducer = (state: any, action: any) => {
  switch (action.type) {
    case types.start:
      return { ...state, loading: true };
    case types.loaded:
      return {
        ...state,
        loading: false,
        data: [...state.data, ...action.newData],
        more: action.newData.length === SHOW_PER_PAGE,
        after: state.after + action.newData.length,
      };
    default:
      throw new Error("Don't understand action");
  }
};

function AdditionalTestimonials() {
  const [state, dispatch] = useReducer(reducer, {
    loading: false,
    more: true,
    data: [],
    after: 0,
  });
  const { loading, data, after, more } = state;

  return (
    <Box>
      {data.map((testimonial: ITestimonials) => (
        <Box key={`${testimonial.id}.${testimonial.name}`}>
          <Review date={testimonial.date} name={testimonial.name} text={testimonial.text} />
        </Box>
      ))}

      {loading && (
        <Box pt={11} display="flex" alignItems="center" justifyContent="center">
          <CircularProgress color="secondary" />
        </Box>
      )}
      {!loading && more && (
        <Box
          sx={{
            pt: 11,
            pb: 10,
            textAlign: 'center',
          }}
        >
          <Button
            onClick={() => {
              dispatch({ type: types.start });
              setTimeout(() => {
                const newData = testimonials.slice(after, after + SHOW_PER_PAGE);
                dispatch({ type: types.loaded, newData });
              }, 1500);
            }}
            size="large"
            startIcon={<ExpandMoreIcon />}
            variant="outlined"
            color="primary"
          >
            Wyświetl więcej
          </Button>
        </Box>
      )}
    </Box>
  );
}

export default function TestimonialsSection({ res }: any) {
  return (
    <Box component="section" id="opinie">
      <SectionMainHeader sectionTitle="Opinie Klientów" />
      <Container maxWidth="md">
        <Box display="flex" alignItems="center" flexDirection="column">
          <PaperBox elevation={5}>
            <Stack sx={{ maxWidth: 140, maxHeight: 50 }}>
              <LogoGoogleFull viewBox="0 0 388 129" />
            </Stack>
            <Box>
              <Typography sx={{ pt: 5 }}>{res?.result?.user_ratings_total} recenzji</Typography>
            </Box>
            <Stack direction="row" spacing={2}>
              {Array.from({ length: res?.result?.rating }).map((_, i) => (
                <Box key={i} sx={{ display: 'flex', alignItems: 'center', color: 'secondary.main' }}>
                  <StarIcon sx={{ fontSize: 40 }} />
                </Box>
              ))}
            </Stack>
          </PaperBox>

          {res?.result?.reviews?.map((review: any) => (
            <Box key={review.name}>
              <Review
                googleReview={false}
                name={review.author_name}
                text={review.text}
                date={review.relative_time_description}
                src={review.profile_photo_url}
              />
            </Box>
          ))}
          <AdditionalTestimonials />
        </Box>
      </Container>
    </Box>
  );
}
