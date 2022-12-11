import { styled } from '@mui/system';
import { Box, Fab } from '@mui/material';
import TextLoop from 'react-text-loop';

export const TextLoopStyle = styled(TextLoop)(() => ({
  marginLeft: 5,
  position: 'relative',
  top: -1,
}));

export const FabPhonePulse = styled(Fab)(({ theme }) => ({
  '@keyframes pulse': {
    '0%': {
      boxShadow: '0 0 0 0 rgba(204,169,44, 0.8)',
    },
    '20%': {
      boxShadow: '0 0 0 20px rgba(204,169,44, 0)',
    },
    '100%': {
      boxShadow: '0 0 0 0 rgba(204,169,44, 0)',
    },
  },
  width: theme.spacing(30),
  height: theme.spacing(30),
  borderRadius: '50%',
  background: theme.palette.primary.main,
  animation: `pulse 3.5s infinite linear`,
  [theme.breakpoints.down('sm')]: {
    width: theme.spacing(22),
    height: theme.spacing(22),
  },
}));

export const HeroClaimStyle = styled(Box)(({ theme }) => ({
  padding: theme.spacing(55, 10, 10, 40),
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
  lineHeight: theme.spacing(1),
  [theme.breakpoints.down('lg')]: {
    padding: theme.spacing(28),
    paddingTop: theme.spacing(35),
  },
  [theme.breakpoints.down('md')]: {
    padding: theme.spacing(10),
    paddingTop: theme.spacing(20),
  },
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(5),
    paddingTop: theme.spacing(27),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    lineHeight: theme.spacing(1),
  },

  '& h3': {
    fontSize: '3.3rem',
    textAlign: 'left',
    paddingBottom: theme.spacing(8),
    paddingTop: theme.spacing(5),
    [theme.breakpoints.down('lg')]: {
      fontSize: '3rem',
    },
    [theme.breakpoints.down('sm')]: {
      textAlign: 'center',
      fontSize: '2.2rem',
    },
  },
  '& h2': {
    fontSize: '1.6rem',
    fontWeight: 200,
    textAlign: 'left',
    // paddingBottom: theme.spacing(20),
    lineHeight: 1.5,
    // transform: 'translateX(12.5em)',
    // transition: 'transform 2s ease-in-out',
    [theme.breakpoints.down('lg')]: {
      fontSize: '1.3rem',
    },
    [theme.breakpoints.down('md')]: {
      fontSize: '1.1rem',
    },
    [theme.breakpoints.down('sm')]: {
      paddingTop: theme.spacing(5),
      paddingBottom: theme.spacing(10),
      textAlign: 'center',
      fontSize: '1rem',
    },
  },
}));
