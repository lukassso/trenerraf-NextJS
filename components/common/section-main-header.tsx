import { Box, Container, Typography } from '@mui/material';
import React, { FC } from 'react';
import HeadlineCurveSvg from '@/assets/headline-curve';

interface SectionMainHeaderProps {
  sectionTitle: string;
}

export const SectionMainHeader: FC<SectionMainHeaderProps> = ({ sectionTitle }) => {
  return (
    <Container maxWidth="xs">
      <Box
        sx={{
          pb: 15,
          pt: 16,
          position: 'relative',
          textAlign: 'center',
        }}
      >
        <Box
          sx={{
            position: 'relative',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            width: 'auto',
          }}
        >
          <Box>
            <Typography variant="h3">{sectionTitle}</Typography>
          </Box>
          <Box
            sx={{
              position: 'relative',
              top: 10,
              left: 2,
              transform: 'rotate(3deg)',
              height: 'auto',
            }}
          >
            <HeadlineCurveSvg viewBox="0 0 195 12" />
          </Box>
        </Box>
      </Box>
    </Container>
  );
};
