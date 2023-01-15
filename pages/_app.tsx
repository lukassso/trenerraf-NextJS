import { AppProps } from 'next/app';
// import { useEffect, useState } from 'react';
// import AppLoader from '@/components/common/app-loader';
import CssBaseline from '@mui/material/CssBaseline';
import theme from '@/styles/theme';
import '@/styles/react-slick.css';
import createEmotionCache from '@/lib/create-emotion-cache';
import { CacheProvider, EmotionCache } from '@emotion/react';
import 'slick-carousel/slick/slick.css';
import { ThemeProvider } from '@mui/material';
import Script from 'next/script';
import { DefaultSeo } from 'next-seo';
import { INDEX_DESCRIPTION, INDEX_DESCRIPTION_OG, INDEX_TITLE, INDEX_TITLE_OG } from '@/lib/seo-links';
import '../styles/main.css';

const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

function MyApp({ Component, emotionCache = clientSideEmotionCache, pageProps }: MyAppProps) {
  // const [loader, setLoader] = useState(true);
  //
  // useEffect(() => {
  //   // Remove the server-side injected CSS.
  //   const jssStyles = document.querySelector('#jss-server-side');
  //   if (jssStyles) {
  //     jssStyles.parentElement!.removeChild(jssStyles);
  //   }
  //   setLoader(false);
  // }, []);

  const defaultSeo = {
    title: INDEX_TITLE,
    description: INDEX_DESCRIPTION,
    openGraph: {
      title: INDEX_TITLE_OG,
      description: INDEX_DESCRIPTION_OG,
      type: 'website',
      locale: 'pl_PL',
      url: 'https://trenerrafal.pl',
      siteName: 'Trener personalny Mokotów',
      images: [
        {
          url: 'https://trenerrafal.pl/trener-rafal-og.png',
          width: 1200,
          height: 630,
          alt: 'Trener personalny Rafał Kiszło',
        },
      ],
    },
    twitter: {
      cardType: 'summary_large_image',
    },
  };
  //
  // const pageContent = loader ? (
  //   <AppLoader />
  // ) : (
  //   <>
  //     <DefaultSeo {...defaultSeo} />
  //     <Component {...pageProps} />;
  //   </>
  // );

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

      <CacheProvider value={emotionCache}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <DefaultSeo {...defaultSeo} />
          <Component {...pageProps} />
        </ThemeProvider>
      </CacheProvider>
    </>
  );
}

export default MyApp;
