import { Box, Typography } from '@mui/material';
import React, { FC } from 'react';

interface SectionMainHeaderProps {
  sectionTitle: string;
}

export const SectionMainHeader: FC<SectionMainHeaderProps> = ({ sectionTitle }) => {
  return (
    <Box
      sx={{
        pb: 15,
        pt: 16,
      }}
    >
      <Typography variant="h3" align="center">
        {sectionTitle}
      </Typography>
    </Box>
  );
};
