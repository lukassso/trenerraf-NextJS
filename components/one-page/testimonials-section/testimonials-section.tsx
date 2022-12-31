import { Avatar, Box, Button, CircularProgress, Container, Divider, Typography } from '@mui/material';
import { testimonials, testimonials2 } from '@/components/one-page/testimonials-section/testimonials-section.data';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import React, { useReducer } from 'react';
import { ITestimonials } from '@/interfaces/i-testimonials';

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

function App2() {
  const [state, dispatch] = useReducer(reducer, {
    loading: false,
    more: true,
    data: [],
    after: 0,
  });
  const { loading, data, after, more } = state;

  return (
    <div>
      {data.map((testimonial: ITestimonials) => (
        <Box key={`${testimonial.id}.${testimonial.name}`} sx={{ p: 10, pt: 4 }}>
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
          <Box pl={8} pr={8}>
            <Typography key={testimonial.text}>{testimonial.text}</Typography>
            <Box display="flex" py={5} alignItems="center">
              <Box>
                <Avatar
                  key={testimonial.name}
                  alt={testimonial.name}
                  // src={require(`${testimonial.picture}`)}
                />
              </Box>
              <Box display="flex" flexDirection="column" justifyContent="flex-start" pl={3}>
                <Box>
                  <Typography>{testimonial.name}</Typography>
                </Box>
                <Box>
                  <Typography key={testimonial.date} component="span" variant="body2" color="primary">
                    {testimonial.date}
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
          <Divider />
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
    </div>
  );
}

export default function TestimonialsSection() {
  return (
    <section id="opinie">
      <Container maxWidth="md">
        <Box display="flex" alignItems="center" flexDirection="column">
          <Box
            sx={{
              pb: 15,
              pt: 16,
            }}
          >
            <Typography variant="h3" align="center">
              Opinie Klientów
            </Typography>
          </Box>
          <Box display="flex" alignItems="center" flexDirection="column">
            {testimonials2.map((testimonial2) => (
              <>
                <Box key={`${testimonial2.id}.${testimonial2.name}`} sx={{ p: 10, pt: 4 }}>
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
                    <Typography key={testimonial2.text}>{testimonial2.text}</Typography>
                    <Box display="flex" py={5} alignItems="center">
                      <Box>
                        <Avatar
                          key={testimonial2.name}
                          alt={testimonial2.name}
                          // src={require(`${testimonial2.picture}`)}
                        />
                      </Box>
                      <Box display="flex" flexDirection="column" justifyContent="flex-start" pl={3}>
                        <Box>
                          <Typography>{testimonial2.name}</Typography>
                        </Box>
                        <Box>
                          <Typography key={testimonial2.date} component="span" variant="body2" color="primary">
                            {testimonial2.date}
                          </Typography>
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                  <Divider />
                </Box>
              </>
            ))}
            <App2 />
          </Box>
        </Box>
      </Container>
    </section>
  );
}
