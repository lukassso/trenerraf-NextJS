import { Html, Head, Main, NextScript } from 'next/document';
import { LayoutProps } from '@/interfaces/i-layout-page';

export default function Document() {
  return (
    <Html lang="pl">
      <Head />
      {/*<Head>*/}
      {/*  <meta property="og:image" content="https://trenerrafal.pl/trener-rafal-og.png" />*/}
      {/*  <meta name="twitter:image" content="https://trenerrafal.pl/trener-rafal-og.png" />*/}
      {/*</Head>*/}
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
