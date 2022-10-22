import { FunctionComponent } from 'react';
import { NextSeo } from 'next-seo';
import Head from 'next/head';

type LayoutProps = {
  title: string;
  description: string;
};

// @ts-ignore
const Layout: FunctionComponent<LayoutProps> = ({ title, description, children }) => {
  return (
    <>
      <NextSeo description={description} openGraph={{ title, description }} />
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
        <meta name="go-import" content="trener rafal" />
        <title>{title}</title>
      </Head>
      <div>{children}</div>
    </>
  );
};

export default Layout;
