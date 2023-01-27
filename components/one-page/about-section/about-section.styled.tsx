import { styled } from '@mui/system';
import { Box } from '@mui/material';

export const BoxRoot = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.grey[900],
  color: theme.palette.text.secondary,
  position: 'relative',
  // [theme.breakpoints.down('sm')]: {},
}));
