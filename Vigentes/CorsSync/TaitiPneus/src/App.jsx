import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './sections/Hero';
import Services from './sections/Services';
import About from './sections/About';
import Contact from './sections/Contact';
import NextStop from './sections/NextStop';

export default function App() {
  return (
    <div id="inicio">
      <a className="skip-link" href="#conteudo">Pular para o conteúdo</a>
      <Header />
      <main id="conteudo"><Hero /><Services /><About /><Contact /><NextStop /></main>
      <Footer />
    </div>
  );
}
