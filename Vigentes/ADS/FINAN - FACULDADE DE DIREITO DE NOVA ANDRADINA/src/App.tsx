import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Instagram from './components/Instagram';
import Diferenciais from './components/Diferenciais';
import Sobre from './components/Sobre';
import Cursos from './components/Cursos';
import Localizacao from './components/Localizacao';
import Contato from './components/Contato';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import Noticias from './pages/Noticias'; 
// 1. Importe o componente aqui
import PromoModal from './components/PromoModal'; 

function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Sobre />
      <Cursos />
      <Diferenciais />
      <Instagram />
      <Localizacao />
      <Contato />
      <Footer />
      <WhatsAppButton />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen">
        {/* 2. Adicione o componente aqui para aparecer em todo o site */}
        <PromoModal /> 

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/noticias" element={<Noticias />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;