import { AppProps } from 'next/app';
import { useEffect, useState } from 'react';
import AppLoader from '@/components/common/app-loader';
import CssBaseline from '@mui/material/CssBaseline';
import theme from '@/styles/theme';
import '@/styles/react-slick.css';
import createEmotionCache from '@/lib/create-emotion-cache';
import { CacheProvider, EmotionCache } from '@emotion/react';
import 'slick-carousel/slick/slick.css';
import { ThemeProvider } from '@mui/material';
import Script from 'next/script';
import { DefaultSeo } from 'next-seo';
// import 'slick-carousel/slick/slick-theme.css';

const clientSideEmotionCache = createEmotionCache();

export const MAIN_DESCRIPTION =
  'Zapraszam na wspólne treningi na Mokotowie. Osobisty trening dostosowany do Twoich potrzeb. Pokażę Ci jak poprawić sylwetkę i osiągnąć sukces.';
export const MAIN_TITLE = 'Trener personalny Mokotów, Rafał Kiszło';

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
    <>
      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
      />

      {/* eslint-disable-next-line @next/next/inline-script-id */}
      <Script strategy="lazyOnload">
        {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
                    page_path: window.location.pathname,
                    });
                `}
      </Script>
      <DefaultSeo
        title={MAIN_TITLE}
        description={MAIN_DESCRIPTION}
        openGraph={{
          title: `${MAIN_TITLE}`,
          description: `${MAIN_DESCRIPTION}`,
          type: 'website',
          locale: 'pl_PL',
          url: 'https://trenerrafal.pl',
          siteName: 'Trener personalny Mokotów',
        }}
        twitter={{
          cardType: 'summary_large_image',
        }}
      />
      <CacheProvider value={emotionCache}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          {pageContent}
        </ThemeProvider>
      </CacheProvider>
    </>
  );
}

export default MyApp;
