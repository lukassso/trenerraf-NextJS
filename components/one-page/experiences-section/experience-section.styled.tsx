import { styled } from '@mui/system';
import { Box, Button, Paper } from '@mui/material';

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
    bottom: 23,
    [theme.breakpoints.down('sm')]: {
      fontSize: '0.8rem',
    },
  },
  '& span': {
    display: 'block',
  }
}));
export const CertIcon = styled(Box)(({ theme }) => ({
  position: 'absolute',

  top: -10,
}));
export const OpisKursyStyled = styled(Box)(({ theme }) => ({
  '& p': {
    padding: '0px 45px 20px 45px',
  },
  '& span': {
    display: 'block',
    padding: '10px 0px',
  }
}));
export const ButtonBlog = styled(Box)(({ theme }) => ({
  position: 'absolute',
  bottom: -25,
  left: 10,
  width: '100%',
  '& p': {
    padding: 0,
    textAlign: 'center',
    width: '100%',
    fontSize: '0.9rem',
  },
  '& svg': {
    position: 'relative',
    top: 6,
    left: -5,
  },
}));