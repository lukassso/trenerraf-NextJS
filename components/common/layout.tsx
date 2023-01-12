import Meta from '@/components/common/meta';
import HeaderNavigation from '@/components/navbar';
import Footer from '@/components/common/footer';
import { FC, ReactNode } from 'react';
import { Imeta } from '@/interfaces/i-meta';
import { Box } from '@mui/material';

type LayoutProps = {
  children: ReactNode;
};

const Layout: FC<Imeta & LayoutProps> = ({
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
      <Box>
        <HeaderNavigation />
        {children}
      </Box>
      <Footer />
    </>
  );
};

export default Layout;
