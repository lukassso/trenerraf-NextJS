import { Box, Grid, Typography, useMediaQuery, useTheme, Fade, Fab } from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import Image from 'next/image';
import {
  FabPhonePulse,
  HeroClaimStyle,
  HeroImage,
  TextLoopStyle,
} from '@/components/one-page/hero-section/hero-section.styled';
import YellowPlumSvg from '@/assets/yellowPlumSvg';
import trenerRafalHero from '../../../public/trener-rafal-kiszlo.webp';

const HeroSection = () => {
  const { breakpoints } = useTheme();
  const matchMobileView = useMediaQuery(breakpoints.down('md'));

  return (
    <section>
      <Grid container>
        <Grid item xs={12} md={7}>
          <HeroClaimStyle>
            <Box sx={{ pb: 10 }}>
              <Typography component="h2">Stań się lepszą wersją siebie!</Typography>
              <Typography component="h1">
                Rafał Kiszło - Trener Personalny i najlepszy motywator w mieście! Zapraszam na wspólne treningi
                <TextLoopStyle
                  springConfig={{
                    stiffness: 70,
                    damping: 31,
                  }}
                  interval={5000}
                  adjustingSpeed={500}
                >
                  <Typography component="span"> na Mokotowie</Typography>
                  <Typography component="span"> na Wilanowie </Typography>
                </TextLoopStyle>
              </Typography>
            </Box>
            <Box display="flex" alignItems="center" justifyContent="center" height="100%">
              <FabPhonePulse color="primary" aria-label="call" href="tel:+48608472294">
                <PhoneIcon color="secondary" style={{ fontSize: matchMobileView ? 50 : 57 }} />
              </FabPhonePulse>
            </Box>
          </HeroClaimStyle>
        </Grid>
        <Grid item xs={12} md={5}>
          <HeroImage>
            <Box
              sx={{
                position: 'absolute',
                zIndex: -1,
                width: 'auto',
                height: '100%',
                maxWidth: 899,
                maxHeight: 814,
              }}
            >
              <YellowPlumSvg />
            </Box>
            <Box
              sx={{ display: 'flex' }}
              component={Image}
              src={trenerRafalHero}
              priority={true}
              placeholder="blur"
              alt="Trener personalny Mokotów"
            />
          </HeroImage>
        </Grid>
      </Grid>
    </section>
  );
};

export default HeroSection;
