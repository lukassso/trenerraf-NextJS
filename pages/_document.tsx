import { Html, Head, Main, NextScript } from 'next/document';
import { LayoutProps } from '@/interfaces/i-layout-page';

export default function Document() {
  return (
    <Html lang="pl">
      <Head>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;600;900&display=swap"
          rel="stylesheet"
        />
        <link rel="canonical" href="https://trenerrafal.pl" />
        <meta httpEquiv="content-language" content="pl" />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        <meta name="theme-color" content="#000" />

        <meta property="og:url" content="https://trenerrafal.pl" />
        <meta property="og:type" content="website" />

        <meta property="og:image" content="https://trenerrafal.pl/trener-rafal-og.png" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="trenerrafal.pl" />
        <meta property="twitter:url" content="https://trenerrafal.pl" />

        <meta name="twitter:image" content="https://trenerrafal.pl/trener-rafal-og.png" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
//
// const getInitialProps = async (ctx) => {
//   const originalRenderPage = ctx.renderPage;
//   const cache = createEmotionCache();
//   const { extractCriticalToChunks } = createEmotionServer(cache);
//
//   ctx.renderPage = () =>
//     originalRenderPage({
//       enhanceApp: (App: any) =>
//         function EnhanceApp(props) {
//           return <App emotionCache={cache} {...props} />;
//         },
//     });
//
//   const initialProps = await getInitialProps(ctx);
//   const emotionStyles = extractCriticalToChunks(initialProps.html);
//   const emotionStyleTags = emotionStyles.styles.map((style) => (
//     <style
//       data-emotion={`${style.key} ${style.ids.join(' ')}`}
//       key={style.key}
//       // eslint-disable-next-line react/no-danger
//       dangerouslySetInnerHTML={{ __html: style.css }}
//     />
//   ));
//
//   return {
//     ...initialProps,
//     emotionStyleTags,
//   };
// };
