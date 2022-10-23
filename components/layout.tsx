import Meta, { LayoutProps } from './meta';
import Navbar from '../layouts/navbar';

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
