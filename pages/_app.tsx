import { AppProps } from 'next/app';
import { useEffect, useState } from 'react';
import AppLoader from '@/components/common/app-loader';
import { CssBaseline, ThemeProvider } from '@mui/material';
import theme from '@/styles/theme';
import '@/styles/react-slick.css';
import createEmotionCache from '@/lib/create-emotion-cache';
import { CacheProvider, EmotionCache } from '@emotion/react';
import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';

const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

function MyApp({ Component, emotionCache = clientSideEmotionCache, pageProps }: MyAppProps) {
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement!.removeChild(jssStyles);
    }
    setLoader(false);
  }, []);

  const pageContent = loader ? <AppLoader /> : <Component {...pageProps} />;

  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {pageContent}
      </ThemeProvider>
    </CacheProvider>
  );
}

export default MyApp;
