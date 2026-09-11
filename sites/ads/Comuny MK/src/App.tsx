import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Diferenciais from './components/Diferenciais';
import Portfolio from './components/Portfolio';
import Contato from './components/Contato';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <Diferenciais />
      <Portfolio />
      <Contato />
      <Footer />
    </div>
  );
}
