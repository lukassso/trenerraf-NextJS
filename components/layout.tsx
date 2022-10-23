import Navbar from '@/layouts/navbar';
import { LayoutProps } from '@/interfaces/interface-home-page';
import Meta from '@/components/meta';

export default function Layout({ children, title, description }: LayoutProps) {
  return (
    <>
      <Meta description={description} title={title} />
      <div className="min-h-screen">
        <Navbar />
        {children}
      </div>
      <div>footer section</div>
    </>
  );
}
