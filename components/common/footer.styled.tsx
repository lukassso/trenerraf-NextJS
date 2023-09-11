import { styled } from '@mui/system';
import { Box, Fab } from '@mui/material';

export const FooterStyled = styled(Box)(({ theme }) => ({
    padding: theme.spacing(5, 0, 5, 0),
    [theme.breakpoints.down('md')]: {
        textAlign: 'center',
      },
    '.footerSocial': {
        textAlign: 'center',
    },
    '& h2, h3': {
      fontSize: '1.6rem',
      textAlign: 'left',
      lineHeight: 1.5,
      paddingBottom: theme.spacing(3),
      paddingTop: theme.spacing(5),
      [theme.breakpoints.down('lg')]: {
        fontSize: '3rem',
      },
      [theme.breakpoints.down('sm')]: {
        textAlign: 'center',
        fontSize: '2.2rem',
      },
    },
    '& h1': {
      fontSize: '3.3rem',
      fontWeight: 200,
      textAlign: 'left',
      // paddingBottom: theme.spacing(20),
      lineHeight: 1.4,
      // transform: 'translateX(12.5em)',
      // transition: 'transform 2s ease-in-out',
      [theme.breakpoints.down('lg')]: {
        fontSize: '3rem',
      },
      [theme.breakpoints.down('md')]: {
        fontSize: '2.2rem',
        '& span': {
          position: 'relative',
          top: 1,
        },
      },
      [theme.breakpoints.down('sm')]: {
        paddingTop: theme.spacing(2),
        paddingBottom: theme.spacing(5),
        textAlign: 'center',
      },
    },
    '& span': {
        display: 'block',
    },
  }));