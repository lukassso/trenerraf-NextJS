import { LayoutProps } from '@/interfaces/i-layout-page';
import Meta from '@/components/common/meta';
import HeaderNavigation from '@/components/navbar';
import Footer from '@/components/common/footer';
// import { INDEX_DESCRIPTION_OG, INDEX_TITLE_OG } from '../../pages/_app';
// import { NextSeo } from 'next-seo';
// import { PAGE_URL } from '@/lib/constants';
import { FC, ReactNode } from 'react';

type LayoutProps2 = {
  children: ReactNode;
};

const Layout: FC<LayoutProps2 & LayoutProps> = ({
  children,
  title,
  description,
  ogDescription,
  ogTitle,
  ogUrl,
  ogImageUrl,
}) => {
  return (
    <>
      <Meta
        description={description}
        title={title}
        ogTitle={ogTitle}
        ogDescription={ogDescription}
        ogImageUrl={ogImageUrl}
        ogUrl={ogUrl}
      />
      <div>
        <HeaderNavigation />
        {children}
      </div>
      <Footer />
    </>
  );
};

export default Layout;
