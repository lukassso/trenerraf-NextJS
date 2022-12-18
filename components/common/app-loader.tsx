import LogoSvg from '@/assets/logoSvg';
import { Box } from '@mui/material';
import React from 'react';
import theme from '@/styles/theme';

const AppLoader = () => (
  <Box
    sx={{
      display: 'flex',
      width: '100vw',
      height: '100vh',
      alignItems: 'center',
      justifyContent: 'center',
    }}
  >
    <Box
      sx={{
        width: '100%',
        height: '100%',
        maxWidth: 140,
        maxHeight: 50,
      }}
    >
      <LogoSvg logoSvgFill={theme.palette.secondary.main} viewBox="0 0 354 111" />
    </Box>
  </Box>
);

export default AppLoader;
