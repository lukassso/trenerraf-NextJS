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
import NextLink from '@/components/common/next-link';

const HeroSection = () => {
  const { breakpoints } = useTheme();
  const matchMobileView = useMediaQuery(breakpoints.down('md'));

  return (
    <section>
      <Grid container>
        <Grid item xs={12} md={7}>
          <HeroClaimStyle>
            <Box sx={{ pb: 10 }}>
              <Typography component="h1">
                Trener personalny Mokotów - Rafał Kiszło
              </Typography>
              <Typography component="p">Szukasz wsparcia w drodze do osiągnięcia wymarzonej sylwetki, ale nie wiesz jak zacząć? <br/><strong>Posiadam ponad 15 letnie doświadczenie. Jako doświadczony trener personalny działający na Mokotowie pomogłem setkom osób w osiągnięciu ich wymarzonej sylwetki.</strong> Indywidualne podejście do każdego podopiecznego oraz unikalne metody motywacji sprawią, że razem pokonamy wszelkie przeszkody i osiągniemy założone efekty.
              <br/>
              <Typography component="p" className="opis_p">
              Treningi prowadzę w Warszawie
              <TextLoopStyle
                  springConfig={{
                    stiffness: 70,
                    damping: 31,
                  }}
                  interval={5000}
                  adjustingSpeed={500}
                >
                  <Typography component="span"><strong> na Mokotowie</strong></Typography>
                  <Typography component="span"><strong> na Wilanowie </strong></Typography>
                </TextLoopStyle>
                , mój dokłady adres to ul. Józefa Piusa Dziekońskiego 1, 00-728 Warszawa - <NextLink href="https://goo.gl/maps/dz3y2GhBGZQE8w6A6" target="_blank" sx={{ textDecoration: 'none', color: '#0086b3', fontWeight: '600' }}>Zobacz adres na mapie</NextLink>

                </Typography>
                </Typography>
                <Typography component="p">
                Zadzwoń lub napisz - umówimy się na pierwszy trening

                </Typography>
              <Typography component="h2">Stań się lepszą wersją siebie!</Typography>
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
              alt="Trener personalny Mokotów - Rafał Kiszło"
            />
          </HeroImage>
        </Grid>
      </Grid>
    </section>
  );
};

export default HeroSection;
