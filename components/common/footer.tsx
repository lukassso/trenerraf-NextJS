import { Container, Grid, Typography, IconButton, Divider } from '@mui/material';
import Box from '@mui/material/Box';
import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';

const Footer = () => {
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
        </Container>
        <Box sx={{ my: 7 }}>
          <Divider />
        </Box>
        <Box textAlign="center">
          <Typography variant="body2" color="initial">
            Copyright © 2023 TrenerRafal.pl
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default Footer;
