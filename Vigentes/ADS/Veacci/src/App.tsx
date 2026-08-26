import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Products from './components/Products';
import Process from './components/Process';
import Cases from './components/Cases';
import Standard from './components/Standard';
import Quote from './components/Quote';
import SocialImpact from './components/SocialImpact';
import CtaFinal from './components/CtaFinal';
import Footer from './components/Footer';
import ContactWidget from './components/ContactWidget';
import CookieBanner from './components/CookieBanner';

export default function App() {
  return (
    <>
      <a
        href="#conteudo"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-ink focus:px-4 focus:py-2 focus:text-ivory"
      >
        Pular para o conteúdo
      </a>

      <Header />

      <main id="conteudo">
        <Hero />
        <Services />
        <Products />
        <Process />
        <Cases />
        <Standard />
        <Quote />
        <SocialImpact />
      </main>

      <CtaFinal />
      <Footer />
      <ContactWidget />
      <CookieBanner />
    </>
  );
}
