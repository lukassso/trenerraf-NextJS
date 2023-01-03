import Head from 'next/head';
import { CMS_NAME, HOME_OG_IMAGE_URL } from '@/lib/constants';
import { NextSeo } from 'next-seo';
import { LayoutProps } from '@/interfaces/i-layout-page';

export default function Meta({ title, description }: LayoutProps) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        {/*<meta name="description" content={description} />*/}
        {/*<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />*/}
        {/*<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />*/}
        {/*<link rel="shortcut icon" href="/favicon.ico" />*/}
        {/*<link*/}
        {/*  href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;600;900&display=swap"*/}
        {/*  rel="stylesheet"*/}
        {/*/>*/}
        {/*<link rel="canonical" href="https://trenerrafal.pl" />*/}
        {/*<meta httpEquiv="content-language" content="pl" />*/}
        {/*<meta name="msapplication-TileColor" content="#000000" />*/}
        {/*<meta name="msapplication-config" content="/browserconfig.xml" />*/}
        {/*<meta name="theme-color" content="#000" />*/}

        {/*<meta property="og:url" content="https://trenerrafal.pl" />*/}
        {/*<meta property="og:type" content="website" />*/}
        {/*<meta property="og:title" content={title} />*/}
        {/*<meta property="og:description" content={description} />*/}
        {/*<meta property="og:image" content="https://trenerrafal.pl/trener-rafal-og.png" />*/}

        {/*<meta name="twitter:card" content="summary_large_image" />*/}
        {/*<meta property="twitter:domain" content="trenerrafal.pl" />*/}
        {/*<meta property="twitter:url" content="https://trenerrafal.pl" />*/}
        {/*<meta name="twitter:title" content={title} />*/}
        {/*<meta name="twitter:description" content={description} />*/}
        {/*<meta name="twitter:image" content="https://trenerrafal.pl/trener-rafal-og.png" />*/}
      </Head>
    </>
  );
}
