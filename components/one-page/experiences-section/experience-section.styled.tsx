import { styled } from '@mui/system';
import { Box, Paper } from '@mui/material';

export const PrizeHeader = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  paddingTop: 40,
  paddingBottom: 40,
  borderBottom: '1px solid black',
  borderTop: '1px solid black',
}));

export const PrizesText = styled(Box)(({ theme }) => ({
  paddingLeft: 20,
  lineHeight: '1.4',
  [theme.breakpoints.down('sm')]: {
    fontSize: '0.9rem',
    fontWeight: '600',
  },
}));
export const PaperBox = styled(Paper)(({ theme }) => ({
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  borderColor: theme.palette.secondary.main,
  minHeight: 120,
  padding: 25,
  [theme.breakpoints.down('sm')]: {
    minHeight: 120,
  },
  '& svg': {
    position: 'absolute',

    top: -10,
  },

  '& h2': {
    fontSize: '1.2rem',
    fontWeight: 600,
    lineHeight: 1.2,
    textAlign: 'center',
    [theme.breakpoints.down('sm')]: {
      fontSize: '1rem',
      lineHeight: 1.1,
    },
  },
  '& p': {
    position: 'absolute',
    bottom: 20,
    [theme.breakpoints.down('sm')]: {
      fontSize: '0.8rem',
    },
  },
}));
