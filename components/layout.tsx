import { LayoutProps } from '@/interfaces/interface-home-page';
import Meta from '@/components/meta';
import { HeaderNavigation } from '@/containers/navbar/header-navigation';

export default function Layout({ children, title, description }: LayoutProps) {
  return (
    <>
      <Meta description={description} title={title} />
      <div className="min-h-screen">
        <HeaderNavigation />
        {children}
      </div>
      <div>footer section</div>
    </>
  );
}
