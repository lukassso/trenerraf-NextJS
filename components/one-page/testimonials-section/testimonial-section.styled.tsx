import { styled } from '@mui/system';
import { Paper } from '@mui/material';

export const PaperBox = styled(Paper)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  padding: 24,
  borderRadius: 20,
  background: theme.palette.background.default,
  [theme.breakpoints.down('sm')]: {
    width: '90%',
  },
}));
