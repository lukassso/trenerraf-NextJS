import { PAGE_URL } from '@/lib/constants';
import { NextSeo } from 'next-seo';
import { LayoutProps } from '@/interfaces/i-layout-page';

export default function Meta({ title, description, ogTitle, ogDescription }: LayoutProps) {
  return (
    <>
      <NextSeo
        // robotsProps={{
        //   nosnippet: true,
        //   notranslate: true,
        //   noimageindex: true,
        //   noarchive: true,
        //   maxSnippet: -1,
        //   maxImagePreview: 'none',
        //   maxVideoPreview: -1,
        // }}
        title={title}
        description={description}
        canonical={`${PAGE_URL}`}

        additionalLinkTags={[
          {
            rel: 'icon',
            sizes: '16x16',
            href: `${PAGE_URL}/favicon-16x16.png`,
          },
          {
            rel: 'icon',
            sizes: '32x32',
            href: `${PAGE_URL}/favicon-32x32.png`,
          },
          {
            rel: 'icon',
            sizes: '96x96',
            href: `${PAGE_URL}/favicon-96x96.png`,
          },
          {
            rel: 'apple-touch-icon',
            href: `${PAGE_URL}/apple-icon-57x57.png`,
            sizes: '57x57',
          },
          {
            rel: 'apple-touch-icon',
            href: `${PAGE_URL}/apple-icon-120x120.png`,
            sizes: '120x120',
          },
          {
            rel: 'apple-touch-icon',
            href: `${PAGE_URL}/apple-icon-152x152.png`,
            sizes: '152x152',
          },
          {
            rel: 'shortcut icon',
            href: `${PAGE_URL}/favicon.ico`,
          },
          {
            rel: 'manifest',
            href: '/manifest.json',
          },
          {
            rel: 'stylesheet',
            href: 'https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;600;900&display=swap',
          },
          // {
          //   rel: 'preload',
          //   href: 'https://www.test.ie/font/sample-font.woof2',
          //   as: 'font',
          //   type: 'font/woff2',
          //   crossOrigin: 'anonymous',
          // },
        ]}
        additionalMetaTags={[
          {
            httpEquiv: 'content-type',
            content: 'pl',
          },
          {
            name: 'keywords',
            content: 'trener personalny, trening, mokotów',
          },
          {
            name: 'viewport',
            content: 'width=device-width, initial-scale=1',
          },
          {
            name: 'msapplication-TileColor',
            content: '#000000',
          },
          {
            name: 'msapplication-config',
            content: '/browserconfig.xml',
          },
          {
            name: 'theme-color',
            content: '#000',
          },
        ]}
      />
    </>
  );
}
