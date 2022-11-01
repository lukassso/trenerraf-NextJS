import { styled } from '@mui/system';
import { Box } from '@mui/material';

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
    paddingTop: theme.spacing(7),
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
    // transform: '',
    // opacity: 1,
    // transition: 'opacity 4.75s ease-in-out',
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
