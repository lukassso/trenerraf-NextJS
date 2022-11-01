import { Box, Container, Grid, IconButton, Typography, useMediaQuery, useTheme } from '@mui/material';
import { FC } from 'react';
import Slider, { Settings } from 'react-slick';
import IconArrowBack from '@mui/icons-material/ArrowBack';
import IconArrowForward from '@mui/icons-material/ArrowForward';
import { StyledDots } from '@/containers/success-stories-section/success-stories.styled';
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
    // infinite: true,
    // autoplay: true,
    speed: 300,
    slidesToShow: matchMobileView ? 1 : 3,
    slidesToScroll: 1,
    prevArrow: <SliderArrow type="prev" />,
    nextArrow: <SliderArrow type="next" />,
    dots: true,
    appendDots: (dots) => <StyledDots>{dots}</StyledDots>,
    customPaging: () => (
      <Box sx={{ height: 8, width: 30, backgroundColor: 'divider', display: 'inline-block', borderRadius: 4 }} />
    ),
  };

  return (
    <Box
      component="section"
      id="metamorfozy"
      sx={{
        pt: {
          xs: 6,
          md: 8,
        },
        pb: 14,
        backgroundColor: 'background.default',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Box
              sx={{
                height: '100%',
                width: { xs: '100%', md: '90%' },
                display: 'flex',
                alignItems: 'center',
                justifyContent: { xs: 'center', md: 'flex-start' },
              }}
            >
              <Typography variant="h1" sx={{ mt: { xs: 0, md: -5 }, fontSize: { xs: 30, md: 48 } }}>
                Metamorfozy
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={12}>
            <Slider {...sliderConfig}>
              {stories.map((item) => (
                <CardItem key={String(item.id)} item={item} />
              ))}
            </Slider>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default SuccessStories;
