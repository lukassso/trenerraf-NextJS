import { Container, Grid, Typography, IconButton, Divider } from '@mui/material';
import Box from '@mui/material/Box';
import React, { useCallback, useMemo } from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import GoogleMapReact from 'google-map-react';
import { API_GOOGLE_KEY, PAGE_URL } from '@/lib/constants';
import { LogoJsonLd, SocialProfileJsonLd } from 'next-seo';

const PinOnTheMap = ({ text }: any) => (
  <Box
    sx={{
      color: 'secondary.main',
      background: 'black',
      padding: '15px 10px',
      display: 'flex',
      textAlign: 'center',
      minWidth: 100,
      width: '100%',
      fontWeight: 'bold',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 2,
      transform: 'translate(-50%, -50%)',
    }}
  >
    {text}
  </Box>
);

const Footer = () => {
  const defaultProps = {
    center: {
      lat: 52.1947712,
      lng: 21.0474938,
    },
    zoom: 13,
  };

  const mapViewCallback = useMemo(() => {
    return (
      <GoogleMapReact
        // @ts-ignore
        bootstrapURLKeys={{ key: API_GOOGLE_KEY }}
        center={defaultProps.center}
        defaultZoom={defaultProps.zoom}
        options={{ disableDefaultUI: true }}
      >
        <PinOnTheMap lat={defaultProps.center.lat} lng={defaultProps.center.lng} text="TrenerRafal.pl" />
      </GoogleMapReact>
    );
  }, [defaultProps.center, defaultProps.zoom]);

  return (
    <>
      <Box id="kontakt" />

      <Box component="footer">
        <Container maxWidth="md">
          <Grid item xs={12} md={3}>
            <Box py={5} display="flex" justifyContent="center">
              <IconButton
                href="https://www.youtube.com/channel/UCV70wJdF3cotToSLfV0gO8w"
                aria-label="facebook"
                color="secondary"
              >
                <YouTubeIcon sx={{ fontSize: '3.5rem' }} />
              </IconButton>
              <IconButton href="https://www.facebook.com/trenerrafalkiszlo/" aria-label="facebook" color="secondary">
                <FacebookIcon sx={{ fontSize: '3.5rem' }} />
              </IconButton>

              <IconButton href="https://www.instagram.com/trener_rafal_kiszlo" aria-label="Instagram" color="secondary">
                <InstagramIcon sx={{ fontSize: '3.5rem' }} />
              </IconButton>
            </Box>
          </Grid>
          <SocialProfileJsonLd
            type="Person"
            name="Trener Personalny Rafał Kiszło"
            url={PAGE_URL}
            sameAs={[
              'https://www.facebook.com/trenerrafalkiszlo/',
              'https://www.instagram.com/trener_rafal_kiszlo',
              'https://www.youtube.com/channel/UCV70wJdF3cotToSLfV0gO8w',
            ]}
          />
          <Box
            sx={{
              width: '100%',
              height: '100vh',
              maxHeight: '300px',
              overflow: 'hidden',
              '& div>div': {
                borderRadius: 4,
              },
            }}
          >
            {mapViewCallback}
          </Box>
        </Container>
        <Box sx={{ my: 7 }}>
          <Divider />
        </Box>
        <Box sx={{ my: 7, textAlign: 'center' }}>
          <LogoJsonLd logo={`${PAGE_URL}/rafal-kiszlo-trener-personalny.png`} url={PAGE_URL} />
          <Typography variant="body2" color="initial">
            Copyright © 2023 TrenerRafal.pl
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default Footer;
