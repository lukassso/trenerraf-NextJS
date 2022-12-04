import { styled } from '@mui/system';
import { Box } from '@mui/material';

export const BoxRoot = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.grey[900],
  color: theme.palette.text.secondary,
  position: 'relative',
  // paddingBottom: -180,
  // minHeight: '100%',
  // maxHeight: 800,
  [theme.breakpoints.down('sm')]: {
    // maxHeight: 1000,
  },
}));
