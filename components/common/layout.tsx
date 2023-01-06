import { LayoutProps } from '@/interfaces/i-layout-page';
import Meta from '@/components/common/meta';
import HeaderNavigation from '@/components/navbar';
import Footer from '@/components/common/footer';
import { INDEX_DESCRIPTION_OG, INDEX_TITLE_OG } from '../../pages/_app';
import { NextSeo } from 'next-seo';
import { PAGE_URL } from '@/lib/constants';

export default function Layout({ children, title, description }: LayoutProps) {
  return (
    <>
      {/*<Meta description={description} title={title} />*/}
      <Meta description={description} title={title} />
      <NextSeo
        openGraph={{
          title: `${INDEX_TITLE_OG}`,
          description: `${INDEX_DESCRIPTION_OG}`,
          type: 'website',
          locale: 'pl_PL',
          url: PAGE_URL,
          siteName: 'Trener personalny Mokotów',
          images: [
            {
              url: 'https://trenerrafal.pl/trener-rafal-og.png',
              width: 1200,
              height: 630,
              alt: 'Trener personalny Rafał Kiszło',
            },
          ],
        }}
        twitter={{
          cardType: 'summary_large_image',
        }}
      />
      <div>
        <HeaderNavigation />
        {children}
      </div>
      <Footer />
    </>
  );
}
