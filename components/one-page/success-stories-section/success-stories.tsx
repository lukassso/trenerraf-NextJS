import { Box, Container, Grid, IconButton, Typography, useMediaQuery, useTheme } from '@mui/material';
import { FC } from 'react';
import Slider, { Settings } from 'react-slick';
import IconArrowBack from '@mui/icons-material/ArrowBack';
import IconArrowForward from '@mui/icons-material/ArrowForward';
import { stories } from '@/components/one-page/success-stories-section/success-stories.data';
import CardItem from '@/components/one-page/success-stories-section/card-item';
import { SectionMainHeader } from '@/components/common/section-main-header';

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
      aria-label={type === 'next' ? 'Pokaż poprzednie' : 'Pokaż następne'}
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
        // backgroundColor: 'linear-gradient(0deg, rgba(255,254,252,1) 66%, rgba(255,254,252,1) 100%',
      }}
    >
      <Container maxWidth="lg">
        <SectionMainHeader sectionTitle="Metamorfozy" />

        <Slider {...sliderConfig}>
          {stories.map((item, index) => (
            <CardItem key={`${item}.${index}`} story={item} />
          ))}
        </Slider>
      </Container>
    </Box>
  );
};

export default SuccessStories;
