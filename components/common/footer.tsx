import { Container, Grid, Typography, IconButton, Divider, useTheme } from '@mui/material';
import Box from '@mui/material/Box';
import React, { useCallback, useMemo } from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import GoogleMapReact from 'google-map-react';
import { API_GOOGLE_KEY, PAGE_URL } from '@/lib/constants';
import { LogoJsonLd, SocialProfileJsonLd } from 'next-seo';
import {
  FooterStyled
} from '@/components/common/footer.styled';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';

const itemData = [
  {
    img: '../trener-personalny-mokotow-rafal-kiszlo1.png',
    title: 'Treningi personalne Mokotów',
    author: 'Rafał Kiszło',
  },
  {
    img: '../trener-personalny-mokotow-rafal-kiszlo2.png',
    title: 'Treningi personalne Mokotów',
    author: 'Rafał Kiszło',
  },
  {
    img: '../trener-personalny-mokotow-rafal-kiszlo3.png',
    title: 'Treningi personalne Mokotów',
    author: 'Rafał Kiszło',
  },
  {
    img: '../trener-personalny-mokotow-rafal-kiszlo4.png',
    title: 'Treningi personalne Mokotów',
    author: 'Rafał Kiszło',
  },
];

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
        <FooterStyled>
        <Grid container spacing={2}>
            <Grid item xs={12} md={8}>
              <Typography component="h3">
                Napisz do mnie przez Social Media
              </Typography>
            </Grid>
            <Grid item xs={12} md={4} className="footerSocial">
              <IconButton
                  href="https://www.youtube.com/channel/UCV70wJdF3cotToSLfV0gO8w"
                  aria-label="Youtube"
                  color="secondary"
                >
                  <YouTubeIcon sx={{ fontSize: '4.5rem' }} />
                </IconButton>
                <IconButton href="https://www.facebook.com/trenerrafalkiszlo/" aria-label="facebook" color="secondary">
                  <FacebookIcon sx={{ fontSize: '3.5rem' }} />
                </IconButton>

                <IconButton href="https://www.instagram.com/trener_rafal_kiszlo" aria-label="Instagram" color="secondary">
                  <InstagramIcon sx={{ fontSize: '3.4rem' }} />
                </IconButton>
                <SocialProfileJsonLd
                  type="Person"
                  name="Trener personalny Mokotów -  Rafał Kiszło"
                  url={PAGE_URL}
                  sameAs={[
                    'https://www.facebook.com/trenerrafalkiszlo/',
                    'https://www.instagram.com/trener_rafal_kiszlo',
                    'https://www.youtube.com/channel/UCV70wJdF3cotToSLfV0gO8w',
                  ]}
                />
            </Grid>
          </Grid>


          <Grid container spacing={5}>
            <Grid item xs={12} md={8}>
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
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d39130.68292386866!2d21.047822!3d52.19491300000001!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471ecd92ec0e5e7f%3A0x2c2c4af54b6102f8!2sTrener%20personalny%20Rafa%C5%82%20Kisz%C5%82o!5e0!3m2!1spl!2spl!4v1694339005361!5m2!1spl!2spl"
                width="100%"
                height="300px"
                frameBorder="0"
                style={{ border: 0 }}
                allowFullScreen={true}
                aria-hidden="false"
                tabIndex={0}
              />

              {/*mapViewCallback*/} 
            </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Typography component="h3">
                Umów się na trening
              </Typography>
              <Typography component="p">
                <Typography component="span">Rafał Kiszło</Typography>
                <Typography component="span">ul. Józefa Piusa Dziekońskiego 1</Typography>
                <Typography component="span">00-728 Warszawa, Mokotów</Typography>
                <Typography component="span"><a href="tel:+48608472294" style={{ textDecoration: 'none', color: '#0086b3', fontWeight: '600' }}>tel. +48 608 472 294</a></Typography>
              </Typography>
            </Grid>
          </Grid>
        </FooterStyled>
        </Container>
        <Container maxWidth="md">
          <FooterStyled>
            <Grid container spacing={2}>
              <Grid item xs={12} md={12}>
                <Typography component="h3">
                  Wspólne treningi personalne na Mokotowie - Galeria
                </Typography>
              </Grid>
            </Grid>
              <Grid container spacing={5}
                sx={{
                  mt: 2,
                  px: 5,
                }}>
              <ImageList sx={{ width: '100%', height: '100%'}}>
                {itemData.map((item) => (
                  <ImageListItem key={item.img}>
                    <img
                      srcSet={`${item.img}`}
                      src={`${item.img}`}
                      alt={item.title}
                      loading="lazy"
                    />
                    <ImageListItemBar
                      title={item.title}
                      subtitle={<span>by: {item.author}</span>}
                      position="below"
                    />
                  </ImageListItem>
                ))}
              </ImageList>
              </Grid>
          </FooterStyled>
        </Container>
        <Box sx={{ my: 7 }}>
          <Divider />
        </Box>
        <Box sx={{ my: 7, textAlign: 'center' }}>
          <LogoJsonLd logo={`${PAGE_URL}/rafal-kiszlo-trener-personalny.png`} url={PAGE_URL} />
          <Typography variant="body2" color="initial">
          2023 Prawa autorskie © Trener personalny Mokotów -  Rafał Kiszło
          </Typography>
        </Box>
      </Box>
    </>

  );  

};

export default Footer;

