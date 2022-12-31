import Head from 'next/head';
import { CMS_NAME, HOME_OG_IMAGE_URL } from '@/lib/constants';
import { NextSeo } from 'next-seo';
import { LayoutProps } from '@/interfaces/i-layout-page';

export default function Meta({ title, description }: LayoutProps) {
  return (
    <>
      <NextSeo description={description} openGraph={{ title, description }} />
      <Head>
        <title>{title}</title>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;600;900&display=swap"
          rel="stylesheet"
        />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        <meta name="theme-color" content="#000" />
        <meta property="og:image" content="/ms-icon-310x310.png" />
      </Head>
    </>
  );
}
