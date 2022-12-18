import { LayoutProps } from '@/interfaces/interface-home-page';
import Meta from '@/components/common/meta';
import HeaderNavigation from '@/components/navbar';
import Footer from '@/components/common/footer';

export default function Layout({ children, title, description }: LayoutProps) {
  return (
    <>
      <Meta description={description} title={title} />
      <div className="min-h-screen">
        <HeaderNavigation />
        {children}
      </div>
      <Footer />
    </>
  );
}
