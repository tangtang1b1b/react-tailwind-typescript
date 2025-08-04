import type { ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="bg-gray-50 flex-1 flex">
        <div className="w-full">{children}</div>
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
