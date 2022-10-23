import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  components: {
    MuiCssBaseline: {
      styleOverrides: {},
    },
  },
  palette: {
    common: {
      black: '#101010',
      white: '#ffffff',
      // type: 'light',
    },
    primary: {
      light: '#213b87',
      main: '#101010',
      dark: '#101010',
    },
    secondary: {
      main: '#FDC100',
    },
    background: {
      default: '#ffffff',
      // dark: '#101010',
      // yellow: '#FDC100',
      // gray: '#f6f6f6',
    },
    warning: {
      main: '#ffd200',
    },
    error: {
      main: '#f44336',
    },
    info: {
      main: '#ffd200',
    },
    success: {
      main: '#4caf50',
    },
    grey: {
      50: '#fafafa',
      100: '#f5f5f5',
      200: '#eeeeee',
      300: '#e0e0e0',
      400: '#bdbdbd',
      500: '#9e9e9e',
      600: '#757575',
      700: '#616161',
      800: '#424242',
      900: '#212121',
      A100: '#d5d5d5',
      A200: '#aaaaaa',
      A400: '#303030',
      A700: '#616161',
    },
    text: {
      primary: '#101010',
      secondary: '#ffffff',
      // yellow: '#FDC100',
      // hint: '#f6f6f6',
      disabled: '#f6f6f6',
    },
  },
  spacing: 4,
  breakpoints: {
    keys: ['xs', 'sm', 'md', 'lg', 'xl'],
    // up: (key) => `@media (min-width:${values[key]}px)`,
  },
  typography: {
    fontFamily: 'Montserrat, Roboto',
    fontSize: 13,
    h1: {
      fontSize: '2.5rem',
      lineHeight: 1.2,
    },
    h2: {
      fontSize: '2rem',
      lineHeight: 1.1,
    },
    h3: {
      fontSize: '1.6rem',
      fontWeight: 600,
      lineHeight: 1,
      // padding: '50px 10px 70px',
    },
    h4: {
      fontSize: '1.4rem',
      lineHeight: 0.9,
    },
    h5: {
      fontSize: '0.8rem',
      lineHeight: 0.8,
      fontWeight: 'bold',
    },
    h6: {},
    button: {
      color: '#101010',
      bgColor: '#FDC100',
    },
    subtitle1: {
      color: '#359cd6',
    },
    subtitle2: {},
    body1: {
      lineHeight: 1.8,
    },
    body2: {
      fontSize: '0.8rem',
    },
    caption: {},
    overline: {},
  },

  transitions: {
    easing: {
      easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
      easeOut: 'cubic-bezier(0.0, 0, 0.2, 1)',
      easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
      sharp: 'cubic-bezier(0.4, 0, 0.6, 1)',
    },
    duration: {
      shortest: 150,
      shorter: 200,
      short: 250,
      standard: 300,
      complex: 375,
      enteringScreen: 225,
      leavingScreen: 195,
    },
  },
});

export default theme;
