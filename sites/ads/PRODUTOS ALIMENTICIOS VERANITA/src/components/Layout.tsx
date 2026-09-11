import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import WhatsAppWidget from './WhatsAppWidget';

export default function Layout() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
  }, [pathname]);

  return (
    <div className="min-h-screen flex flex-col bg-brand-beige">
      <Header />
      <main className="flex-1 pt-20 md:pt-[132px]">
        <Outlet />
      </main>
      <Footer />
      <WhatsAppWidget />
    </div>
  );
}
