import { styled } from '@mui/system';
import { Container } from '@mui/material';

export const BoxRoot = styled(Container)(({ theme }) => ({
  backgroundColor: 'transparent',
  marginTop: 100,
  [theme.breakpoints.down('md')]: {
    backgroundColor: theme.palette.grey[200],
  },
}));
