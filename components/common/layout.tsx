import { LayoutProps } from '@/interfaces/i-layout-page';
import Meta from '@/components/common/meta';
import HeaderNavigation from '@/components/navbar';
import Footer from '@/components/common/footer';

export default function Layout({ children, title, description }: LayoutProps) {
  return (
    <>
      <Meta description={description} title={title} />
      <div>
        <HeaderNavigation />
        {children}
      </div>
      <Footer />
    </>
  );
}
