import { Box, Container, Grid, IconButton, Typography, useMediaQuery, useTheme } from '@mui/material';
import { FC } from 'react';
import Slider, { Settings } from 'react-slick';
import IconArrowBack from '@mui/icons-material/ArrowBack';
import IconArrowForward from '@mui/icons-material/ArrowForward';
import { stories } from '@/containers/success-stories-section/success-stories.data';
import CardItem from '@/containers/success-stories-section/card-item';

interface SliderArrowArrow {
  onClick?: () => void;
  type: 'next' | 'prev';
  className?: 'string';
}

const SliderArrow: FC<SliderArrowArrow> = (props) => {
  const { onClick, type, className } = props;
  return (
    <IconButton
      sx={{
        backgroundColor: 'background.paper',
        color: 'primary.main',
        '&:hover': { backgroundColor: 'primary.main', color: 'primary.contrastText' },
        bottom: { xs: '-70px !important', md: '-28px !important' },
        left: 'unset !important',
        right: type === 'prev' ? '60px !important' : '0 !important',
        zIndex: 10,
        boxShadow: 1,
      }}
      disableRipple
      color="inherit"
      onClick={onClick}
      className={className}
    >
      {type === 'next' ? <IconArrowForward sx={{ fontSize: 22 }} /> : <IconArrowBack sx={{ fontSize: 22 }} />}
    </IconButton>
  );
};

const SuccessStories: FC = () => {
  const { breakpoints } = useTheme();
  const matchMobileView = useMediaQuery(breakpoints.down('md'));

  const sliderConfig: Settings = {
    speed: 300,
    slidesToShow: matchMobileView ? 1 : 3,
    slidesToScroll: 1,
    arrows: !matchMobileView && true,
    prevArrow: <SliderArrow type="prev" />,
    nextArrow: <SliderArrow type="next" />,
    customPaging: () => (
      <Box sx={{ height: 8, width: 30, backgroundColor: 'divider', display: 'inline-block', borderRadius: 4 }} />
    ),
    centerMode: matchMobileView && true,
    centerPadding: matchMobileView ? '15px' : undefined,
  };

  return (
    <Box
      component="section"
      id="metamorfozy"
      sx={{
        mt: {
          xs: 6,
          md: 8,
        },
        mb: {
          xs: 0,
          md: 30,
        },
        backgroundColor: 'background.default',
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            height: '100%',
            width: { xs: '100%', md: '90%' },
            display: 'flex',
            alignItems: 'center',
            justifyContent: { xs: 'center', md: 'flex-start' },
          }}
        >
          <Typography variant="h1" sx={{ mt: { xs: 0, md: 0 }, mb: { xs: 0, md: 2 }, fontSize: { xs: 30, md: 48 } }}>
            Metamorfozy
          </Typography>
        </Box>

        <Slider {...sliderConfig}>
          {stories.map((item) => (
            <CardItem key={item.id} story={item} />
          ))}
        </Slider>
      </Container>
    </Box>
  );
};

export default SuccessStories;
