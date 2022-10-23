import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="apple-touch-icon" sizes="180x180" href="/pwa/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/pwa/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/pwa/favicon-16x16.png" />
        <link rel="manifest" href="/pwa/site.webmanifest" />
        <link rel="mask-icon" href="/pwa/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
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
