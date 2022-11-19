import { Box, Grid, Typography, useMediaQuery, useTheme, Fade, Fab } from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import Image from 'next/image';
import { HeroClaimStyle } from '@/containers/hero-section/hero-section.styled';
import YellowPlumSvg from '@/assets/yellowPlumSvg';
import trenerRafalHero from '@/assets/trener-rafal-tlo-hero.png';

const HeroSection = () => {
  const { breakpoints } = useTheme();
  const matchMobileView = useMediaQuery(breakpoints.down('md'));

  return (
    <section
    // className={classes.root}
    >
      <Grid
        container
        // className={classes.container}
      >
        <Grid item xs={12} md={7}>
          <HeroClaimStyle>
            <Box>
              <Typography
                // className={classes.testAnimate}
                variant="h1"
                component="h3"
              >
                Stań się lepszą wersją siebie!
              </Typography>
              <Typography
                variant="h3"
                component="h2"
                // className={classes.textLoopWrapper}
              >
                Rafał Kiszło - Trener Personalny i najlepszy motywator w mieście! Zapraszam na wspólne treningi
                {/*<TextLoop*/}
                {/*    // className={classes.textLoopWrapper}*/}
                {/*    springConfig={{*/}
                {/*        stiffness: 70,*/}
                {/*        damping: 31,*/}
                {/*    }}*/}
                {/*    interval={5000}*/}
                {/*    adjustingSpeed={500}*/}
                {/*>*/}
                <Typography
                  component="span"
                  // className={classes.textLoopWrapper}
                >
                  na Mokotowie
                </Typography>
                {/*<Typography*/}
                {/*    component="span"*/}
                {/*    // className={classes.textLoopWrapper}*/}
                {/*>*/}
                {/*    {' '}*/}
                {/*    na Wilanowie{' '}*/}
                {/*</Typography>*/}
                {/* <Typography variant="h3" component="h2"  className={classes.textLoopWrapper}>
                                    // Rafał Kiszło - Trener Personalny i najlepszy
                                    // motywator w mieście! Zapraszam na wspólne
                                    // treningi na Mokotowie.
                                </Typography> */}
                {/*</TextLoop>*/}
                {/*{' '}.*/}
              </Typography>
            </Box>
            <Box
              display="flex"
              alignItems="center"
              justifyContent="center"
              height="100%"
              // className={classes.iconPhoneWrapper}
            >
              <Fade in appear={false} timeout={1500}>
                <Fab
                  // className={classes.phonePulse}
                  color="primary"
                  aria-label="call"
                  href="tel:+48608472294"
                >
                  <PhoneIcon color="secondary" style={{ fontSize: 57 }} />
                </Fab>
              </Fade>
            </Box>
          </HeroClaimStyle>
        </Grid>
        <Grid item xs={12} md={5}>
          <Box
            p={4}
            // className={classes.heroPicturesWrapper}
          >
            <Box sx={{ display: 'flex', position: 'relative' }}>
              <Box
                sx={{
                  position: 'absolute',
                }}
              >
                <Image src={trenerRafalHero} alt="hero picture" />
              </Box>
              <YellowPlumSvg />
            </Box>
            <Box></Box>
          </Box>
        </Grid>
      </Grid>
    </section>
  );
};

export default HeroSection;
