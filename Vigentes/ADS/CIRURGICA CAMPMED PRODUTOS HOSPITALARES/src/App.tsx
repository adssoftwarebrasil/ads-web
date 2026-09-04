import { useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import TopBar from './components/TopBar';
import WhatsappFloat from './components/WhatsappFloat';
import Catalog from './pages/Catalog';
import Category from './pages/Category';
import Home from './pages/Home';
import NotFound from './pages/NotFound';

/**
 * Ao trocar de página, sobe para o topo. Se o endereço tiver âncora
 * (por exemplo `/#visitar`), rola até a seção correspondente.
 */
function RolarNaNavegacao() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const alvo = document.querySelector(hash);
      if (alvo) {
        alvo.scrollIntoView({ behavior: 'smooth', block: 'start' });
        return;
      }
    }
    window.scrollTo({ top: 0, left: 0 });
  }, [pathname, hash]);

  return null;
}

export default function App() {
  return (
    <>
      <a className="skip-link" href="#conteudo">
        Ir para o conteúdo
      </a>
      <RolarNaNavegacao />
      <TopBar />
      <Header />
      <main id="conteudo">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalogo" element={<Catalog />} />
          <Route path="/catalogo/:slug" element={<Category />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
      <WhatsappFloat />
    </>
  );
}
